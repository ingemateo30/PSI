import { notFound } from "next/navigation";
import SedeLanding from "@/component/SedeLanding";
import { sedesConPlanes } from "@/lib/content";
import { readContent } from "@/lib/contentStore";

// Una página pública por sede (/sedes/sangil, /sedes/socorro, ...): es a donde lleva el código QR de esa sede.
export default async function SedePage({ params }) {
  const { sede: id } = await params;
  const sede = sedesConPlanes(await readContent()).find((s) => s.id === id);
  if (!sede) notFound();

  return (
    <SedeLanding
      sedesList={[sede]}
      heroTitle={`Sede ${sede.ciudad}`}
      heroSubtitle={`23 años de experiencia nos respaldan. Internet con fibra óptica ultraveloz y televisión digital para tu hogar o empresa en ${sede.ciudad}.`}
      contactScope={sede.id}
    />
  );
}
