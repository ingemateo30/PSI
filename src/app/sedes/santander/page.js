"use client";

import SedeLanding from "@/component/SedeLanding";
import { sedesSantander } from "@/lib/sedesData";

export default function SedesSantander() {
  return (
    <SedeLanding
      sedesList={sedesSantander}
      heroTitle="Sedes San Gil, Socorro y Piedecuesta"
      heroSubtitle="23 años de experiencia nos respaldan. Internet con fibra óptica ultraveloz y televisión digital, cerca de ti en nuestras 3 sedes de Santander."
      descubreHref="/descubre/santander"
    />
  );
}
