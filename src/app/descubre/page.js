"use client";

import Link from "next/link";
import { MapPin, QrCode, ArrowRight } from "lucide-react";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";
import WhatsAppFlotante from "@/component/WhatsAppFlotante";
import { useSedes } from "@/component/ContentProvider";

// Índice de códigos QR: cada sede tiene el suyo (flyer y QR descargables en /descubre/<sede>).
export default function Descubre() {
  const sedes = useSedes();

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#071a2b] via-[#0e3a5c] to-[#0e6493] min-h-[70vh]">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0e6493]/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-[#e31e25]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-24">
          <div className="flex flex-col items-center text-center text-white mb-14">
            <img src="/psi.png" alt="PSI Telecomunicaciones" className="h-24 md:h-32 w-auto object-contain mb-8" />
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Un código QR <span className="text-[#4fb0e8]">por cada sede</span>
            </h1>
            <p className="text-lg text-blue-100 mt-4 max-w-2xl">
              Elige la sede para ver su flyer y descargar su código QR. Cada QR lleva a la página de esa sede,
              con sus planes y su contacto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {sedes.map((sede) => (
              <Link
                key={sede.id}
                href={`/descubre/${sede.id}`}
                className="group bg-white/10 border border-white/20 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white transition-all hover:-translate-y-1 flex items-center gap-5"
              >
                <div className="shrink-0 bg-white/15 rounded-full p-4">
                  <QrCode size={32} className="text-[#4fb0e8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold">{sede.ciudad}</h2>
                  <p className="text-blue-100 text-sm flex items-center gap-1.5 mt-1">
                    <MapPin size={14} className="shrink-0" />
                    <span className="truncate">{sede.direccion}</span>
                  </p>
                  <p className="text-sm font-semibold text-[#ff6b70] mt-3 inline-flex items-center gap-1.5">
                    Ver QR y flyer
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src="/psi.png" alt="PSI Fibra" className="w-28" />
          <p className="text-gray-300 text-sm text-center">
            &copy; {new Date().getFullYear()} PSI Telecomunicaciones. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      <FloatingSocial />
      <Boton />
      <WhatsAppFlotante />
    </>
  );
}
