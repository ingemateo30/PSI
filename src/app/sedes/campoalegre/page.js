"use client";

import SedeLanding from "@/component/SedeLanding";
import { sedeCampoalegre } from "@/lib/sedesData";

export default function SedesCampoalegre() {
  return (
    <SedeLanding
      sedesList={sedeCampoalegre}
      heroTitle="Sede Campoalegre"
      heroSubtitle="23 años de experiencia nos respaldan. Internet con fibra óptica ultraveloz y televisión digital para tu hogar o empresa en Campoalegre."
      descubreHref="/descubre/campoalegre"
      contactScope="campoalegre"
    />
  );
}
