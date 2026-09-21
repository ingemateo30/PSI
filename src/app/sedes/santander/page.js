import SedeLanding from "@/component/SedeLanding";
import { listaY, sedesConPlanes } from "@/lib/content";
import { readContent } from "@/lib/contentStore";

// Página del grupo Santander: se conserva porque el QR anterior apuntaba aquí.
// Cada sede tiene además su propia página y su propio QR (/sedes/<sede>).
export default async function SedesSantander() {
  const sedes = sedesConPlanes(await readContent()).filter((s) => s.grupo === "santander");

  return (
    <SedeLanding
      sedesList={sedes}
      heroTitle={`Sedes ${listaY(sedes.map((s) => s.ciudad))}`}
      heroSubtitle={`23 años de experiencia nos respaldan. Internet con fibra óptica ultraveloz y televisión digital, cerca de ti en nuestras ${sedes.length} sedes de Santander.`}
      contactScope="santander"
    />
  );
}
