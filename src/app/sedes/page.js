import SedeLanding from "@/component/SedeLanding";
import { sedesConPlanes } from "@/lib/content";
import { readContent } from "@/lib/contentStore";

export default async function Sedes() {
  const sedes = sedesConPlanes(await readContent());

  return (
    <SedeLanding
      sedesList={sedes}
      heroTitle="Nuestras Sedes"
      heroSubtitle={
        <>
          23 años de experiencia nos respaldan. Internet con fibra óptica ultraveloz y televisión
          digital, cerca de ti en <span className="font-semibold">{sedes.length} sedes</span>.
        </>
      }
    />
  );
}
