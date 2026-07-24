"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wifi,
  Tv,
  MapPin,
  Headset,
  Shield,
  Lightbulb,
  Cpu,
  TrendingUp,
  Download,
  Copy,
  Check,
  ScanLine,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const features = [
  {
    icon: Wifi,
    title: "INTERNET",
    highlight: "FIBRA ÓPTICA",
    text: "Velocidad ultra veloz y estable para tu hogar o tu empresa.",
  },
  {
    icon: Tv,
    title: "TELEVISIÓN",
    highlight: "DIGITAL HD",
    text: "Los mejores canales nacionales e internacionales.",
  },
  {
    icon: MapPin,
    title: "4 SEDES",
    highlight: "PARA ATENDERTE",
    text: "San Gil, Socorro, Piedecuesta y Campoalagre.",
  },
  {
    icon: Headset,
    title: "SOPORTE Y",
    highlight: "ACOMPAÑAMIENTO",
    text: "Estamos contigo en cada paso de tu conexión.",
  },
];

const values = [
  { icon: Shield, label: "CONFIANZA" },
  { icon: Lightbulb, label: "INNOVACIÓN" },
  { icon: Cpu, label: "TECNOLOGÍA" },
  { icon: TrendingUp, label: "RESULTADOS" },
];

export default function Descubre() {
  const [qrUrl, setQrUrl] = useState("https://www.psitelecomunicaciones.com/sedes");
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);

  useEffect(() => {
    setQrUrl(`${window.location.origin}/sedes`);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silencioso: el navegador no permitió copiar al portapapeles.
    }
  };

  const handleDownload = () => {
    const canvas = qrRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "psi-qr-sedes.png";
    link.click();
  };

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#071a2b] via-[#0e3a5c] to-[#0e6493]">
        {/* Decoración de fondo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0e6493]/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-[#e31e25]/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/1.svg')] bg-cover bg-center"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24">
          {/* Encabezado logo + escaneo */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-14">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <Image src="/logo.png" alt="PSI Telecomunicaciones" width={72} height={72} className="object-contain" />
              </div>
              <div className="text-white">
                <p className="text-2xl font-extrabold leading-none">PSI</p>
                <p className="text-xs tracking-widest text-blue-200">TELECOMUNICACIONES</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white backdrop-blur-sm w-fit">
              <div className="bg-white/15 rounded-full p-2">
                <ScanLine size={22} />
              </div>
              <div>
                <p className="font-bold leading-tight">ESCANEA Y DESCUBRE</p>
                <p className="text-sm text-blue-100">nuestras sedes, planes y servicios.</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Columna de texto */}
            <div className="text-white">
              <p className="text-xl md:text-2xl font-light italic text-blue-100 mb-2">Conoce todo lo que</p>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-2">
                PSI <span className="text-[#4fb0e8]">puede</span>
                <br />
                hacer por ti
              </h1>
              <p className="text-lg italic text-blue-100 mt-4 max-w-md">
                Soluciones inteligentes de conectividad para{" "}
                <span className="not-italic font-bold text-white bg-[#e31e25] px-2 py-0.5 rounded">
                  hogares y empresas
                </span>{" "}
                que quieren estar siempre conectados.
              </p>

              <div className="mt-10 space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="shrink-0 bg-white/10 border border-white/20 rounded-full p-3">
                      <f.icon size={24} className="text-[#4fb0e8]" />
                    </div>
                    <div>
                      <p className="font-bold">
                        {f.title} <span className="text-[#4fb0e8]">{f.highlight}</span>
                      </p>
                      <p className="text-blue-100 text-sm">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna QR */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-[#4fb0e8]/40 blur-2xl"></div>
                <div className="relative bg-white rounded-[2rem] p-6 sm:p-8 shadow-2xl">
                  <QRCodeCanvas
                    ref={qrRef}
                    value={qrUrl}
                    size={280}
                    level="H"
                    marginSize={2}
                    fgColor="#0e3a5c"
                    bgColor="#ffffff"
                    imageSettings={{
                      src: "/logo.png",
                      height: 52,
                      width: 52,
                      excavate: true,
                    }}
                  />
                </div>
              </div>

              <p className="text-blue-100 text-sm mt-6 text-center max-w-xs">
                Escanea con la cámara de tu celular o entra directo al enlace.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-5">
                <Link
                  href="/sedes"
                  className="inline-flex items-center gap-2 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  Ver nuestras sedes
                </Link>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl transition-all"
                >
                  <Download size={18} />
                  Descargar QR
                </button>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl transition-all"
                >
                  {copied ? <Check size={18} className="text-green-300" /> : <Copy size={18} />}
                  {copied ? "¡Copiado!" : "Copiar enlace"}
                </button>
              </div>
            </div>
          </div>

          {/* Franja de valores */}
          <div className="mt-20 pt-10 border-t border-white/15">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="bg-white/10 border border-white/20 rounded-full p-3">
                    <v.icon size={22} className="text-[#4fb0e8]" />
                  </div>
                  <span className="text-white text-sm font-bold tracking-wide">{v.label}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-white text-xl sm:text-2xl font-extrabold tracking-tight">INNOVAMOS HOY,</p>
              <p className="text-[#4fb0e8] text-xl sm:text-2xl font-extrabold tracking-tight">
                TRANSFORMAMOS TU MAÑANA.
              </p>
            </div>
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
      <FloatingWhatsApp
        phoneNumber="+573184550936"
        accountName="PSI"
        avatar="/logo.png"
        darkMode={true}
        statusMessage="Normalmente responde en 1 hora"
        chatMessage="¡Hola!, ¿en qué te podemos ayudar?"
        placeholder="Escribe un mensaje"
        notification={true}
        chatboxHeight={340}
      />
    </>
  );
}
