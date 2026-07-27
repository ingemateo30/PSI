"use client";

import { Wifi, Tv, MapPin, Headset } from "lucide-react";
import DescubreFlyer from "@/component/DescubreFlyer";

const features = [
  { icon: Wifi, title: "Fibra Óptica", caption: "Internet ultra veloz" },
  { icon: Tv, title: "TV Digital HD", caption: "+87 canales" },
  { icon: MapPin, title: "Sede Campoalegre", caption: "Calle 23 No. 8-64" },
  { icon: Headset, title: "Soporte 24/7", caption: "Siempre contigo" },
];

export default function DescubreCampoalegre() {
  return (
    <DescubreFlyer
      targetPath="/sedes/campoalegre"
      fallbackUrl="https://www.psi.net.co/sedes/campoalegre"
      features={features}
      ctaLabel="Ver sede Campoalegre"
      flyerFileName="psi-flyer-campoalegre.png"
      qrFileName="psi-qr-campoalegre.png"
      scanTagline="la sede Campoalegre: planes y contacto."
      contactScope="campoalegre"
    />
  );
}
