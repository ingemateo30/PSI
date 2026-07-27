"use client";

import SedeLanding from "@/component/SedeLanding";
import { sedes } from "@/lib/sedesData";

export default function Sedes() {
  return (
    <SedeLanding
      sedesList={sedes}
      heroTitle="Nuestras Sedes"
      heroSubtitle={
        <>
          23 años de experiencia nos respaldan. Internet con fibra óptica ultraveloz y televisión
          digital, cerca de ti en <span className="font-semibold">4 sedes</span>.
        </>
      }
      descubreHref="/descubre"
    />
  );
}
