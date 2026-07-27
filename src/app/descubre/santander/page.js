"use client";

import { Wifi, Tv, MapPin, Headset } from "lucide-react";
import DescubreFlyer from "@/component/DescubreFlyer";

const features = [
  { icon: Wifi, title: "Fibra Óptica", caption: "Internet ultra veloz" },
  { icon: Tv, title: "TV Digital HD", caption: "+87 canales" },
  { icon: MapPin, title: "3 Sedes", caption: "San Gil, Socorro y Piedecuesta" },
  { icon: Headset, title: "Soporte 24/7", caption: "Siempre contigo" },
];

export default function DescubreSantander() {
  return (
    <DescubreFlyer
      targetPath="/sedes/santander"
      fallbackUrl="https://www.psi.net.co/sedes/santander"
      features={features}
      ctaLabel="Ver nuestras sedes"
      flyerFileName="psi-flyer-santander.png"
      qrFileName="psi-qr-santander.png"
      scanTagline="nuestras sedes en Santander: planes y contacto."
    />
  );
}
