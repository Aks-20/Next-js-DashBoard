const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export type DashboardStats = {
  students: number;
  teachers: number;
  classes: number;
  events: number;
};

export async function getDashboardStats(): Promise<DashboardStats> {
  if (!API_BASE_URL) {
    return { students: 0, teachers: 0, classes: 0, events: 0 };
  }

  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/stats`, {
      // Revalidate server-side to keep data fresh but cache briefly
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();
    return {
      students: Number(data?.students ?? 0),
      teachers: Number(data?.teachers ?? 0),
      classes: Number(data?.classes ?? 0),
      events: Number(data?.events ?? 0),
    };
  } catch (_e) {
    return { students: 0, teachers: 0, classes: 0, events: 0 };
  }
}


