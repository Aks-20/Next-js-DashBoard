const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export type DashboardStats = {
  students: number;
  teachers: number;
  classes: number;
  events: number;
};

export async function getDashboardStats(): Promise<DashboardStats> {
  if (!API_BASE_URL) {
    return { students: 1250, teachers: 120, classes: 45, events: 28 };
  }

  try {
    const res = await fetch(`${API_BASE_URL}/dashboard/stats`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    const data = await res.json();
    return {
      students: Number(data?.students ?? 1250),
      teachers: Number(data?.teachers ?? 120),
      classes: Number(data?.classes ?? 45),
      events: Number(data?.events ?? 28),
    };
  } catch {
    return { students: 1250, teachers: 120, classes: 45, events: 28 };
  }
}
