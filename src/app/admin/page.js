import AdminLogin from "@/component/admin/AdminLogin";
import AdminPanel from "@/component/admin/AdminPanel";
import { adminConfigured, isAdmin } from "@/lib/adminAuth";
import { readContent } from "@/lib/contentStore";

export const metadata = {
  title: "Administración | PSI",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!adminConfigured()) return <AdminLogin deshabilitado />;
  if (!(await isAdmin())) return <AdminLogin />;
  return <AdminPanel content={await readContent()} />;
}
