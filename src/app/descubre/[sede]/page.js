import { notFound, redirect } from "next/navigation";
import DescubreSede from "@/component/DescubreSede";
import { isAdmin } from "@/lib/adminAuth";
import { readContent } from "@/lib/contentStore";

// Herramienta interna: flyer y código QR descargables de una sede (se llega desde /admin, pestaña "Códigos QR").
// El QR en sí apunta a /sedes/<sede>, que es la página pública para el cliente.
export default async function DescubreSedePage({ params }) {
  const { sede } = await params;
  // Quien no es administrador (p. ej. un cliente con un enlace viejo) va a la página pública de esa sede.
  if (!(await isAdmin())) redirect(`/sedes/${sede}`);

  const content = await readContent();
  if (!content.sedes.some((s) => s.id === sede)) notFound();

  return <DescubreSede sedeId={sede} />;
}
