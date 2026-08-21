const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export type DashboardStats = {
  students: number;
  teachers: number;
  classes: number;
  events: number;
};

async function fetchWithTimeoutAndRetry(input: RequestInfo, init?: RequestInit, timeout = 5000, retries = 1) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const merged = { ...(init || {}), signal: controller.signal } as RequestInit;
    const res = await fetch(input, merged);
    clearTimeout(id);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
    return res;
  } catch (err) {
    clearTimeout(id);
    if (retries > 0 && err instanceof Error && err.name !== "AbortError") {
      return fetchWithTimeoutAndRetry(input, init, timeout, retries - 1);
    }
    throw err;
  }
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const fallback = { students: 1250, teachers: 120, classes: 45, events: 28 };
  if (!API_BASE_URL) return fallback;

  try {
    const res = await fetchWithTimeoutAndRetry(`${API_BASE_URL}/dashboard/stats`, { next: { revalidate: 60 } }, 5000, 1);
    const data = await res.json();
    return {
      students: Number(data?.students ?? fallback.students),
      teachers: Number(data?.teachers ?? fallback.teachers),
      classes: Number(data?.classes ?? fallback.classes),
      events: Number(data?.events ?? fallback.events),
    };
  } catch (err) {
    console.error("getDashboardStats error:", err);
    return fallback;
  }
}
