import { notFound } from "next/navigation";
import DescubreSede from "@/component/DescubreSede";
import { readContent } from "@/lib/contentStore";

// Flyer y código QR de una sede (/descubre/sangil, /descubre/socorro, ...).
export default async function DescubreSedePage({ params }) {
  const { sede } = await params;
  const content = await readContent();
  if (!content.sedes.some((s) => s.id === sede)) notFound();

  return <DescubreSede sedeId={sede} />;
}
