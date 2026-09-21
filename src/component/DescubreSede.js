"use client";

import { Wifi, Tv, MapPin, Headset } from "lucide-react";
import DescubreFlyer from "@/component/DescubreFlyer";
import { useSedes } from "@/component/ContentProvider";

// Flyer con QR de una sola sede: el QR apunta a la página de esa sede y nada más.
export default function DescubreSede({ sedeId }) {
  const sede = useSedes().find((s) => s.id === sedeId);

  const features = [
    { icon: Wifi, title: "Fibra Óptica", caption: "Internet ultra veloz" },
    { icon: Tv, title: "TV Digital HD", caption: "+87 canales" },
    { icon: MapPin, title: `Sede ${sede.ciudad}`, caption: sede.direccion },
    { icon: Headset, title: "Soporte 24/7", caption: "Siempre contigo" },
  ];

  return (
    <DescubreFlyer
      targetPath={`/sedes/${sede.id}`}
      fallbackUrl={`https://www.psi.net.co/sedes/${sede.id}`}
      features={features}
      ctaLabel={`Ver sede ${sede.ciudad}`}
      flyerFileName={`psi-flyer-${sede.id}.png`}
      qrFileName={`psi-qr-${sede.id}.png`}
      scanTagline={`la sede ${sede.ciudad}: planes y contacto.`}
      contactScope={sede.id}
    />
  );
}
