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
  Loader2,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";
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

// Proporción del logo incrustado respecto al tamaño real del QR (evita que se vea borroso al escalar).
const LOGO_RATIO = 52 / 280;

export default function Descubre() {
  const [qrUrl, setQrUrl] = useState("https://www.psitelecomunicaciones.com/sedes");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const flyerRef = useRef(null);

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

  const handleDownloadFlyer = async () => {
    if (!flyerRef.current || downloading) return;
    setDownloading(true);
    try {
      if (document.fonts?.ready) await document.fonts.ready;
      const dataUrl = await toPng(flyerRef.current, {
        width: 1080,
        height: 1080,
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "psi-flyer-qr.png";
      link.click();
    } catch (err) {
      console.error("No se pudo generar el flyer:", err);
    } finally {
      setDownloading(false);
    }
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
                  {/* Resolución interna 2x respecto al tamaño mostrado para que se vea nítido en pantallas retina. */}
                  <QRCodeCanvas
                    value={qrUrl}
                    size={560}
                    style={{ width: 280, height: 280 }}
                    level="H"
                    marginSize={2}
                    fgColor="#0e3a5c"
                    bgColor="#ffffff"
                    imageSettings={{
                      src: "/logo.png",
                      height: Math.round(560 * LOGO_RATIO),
                      width: Math.round(560 * LOGO_RATIO),
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
                  onClick={handleDownloadFlyer}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl transition-all disabled:opacity-60"
                >
                  {downloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                  {downloading ? "Generando..." : "Descargar flyer"}
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

      {/* Flyer cuadrado oculto: se usa solo para generar la imagen descargable */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 0, height: 0, overflow: "hidden" }}>
        <div
          ref={flyerRef}
          style={{
            width: 1080,
            height: 1080,
            fontFamily: "BrandingSF, sans-serif",
          }}
          className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#071a2b] via-[#0e3a5c] to-[#0e6493] p-16"
        >
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#0e6493]/50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-16 w-80 h-80 bg-[#e31e25]/25 rounded-full blur-3xl"></div>

          {/* Encabezado */}
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-2xl p-3 shadow-xl">
                <img src="/logo.png" alt="PSI" width={64} height={64} style={{ objectFit: "contain" }} />
              </div>
              <div className="text-white">
                <p className="text-2xl font-extrabold leading-none">PSI</p>
                <p className="text-xs tracking-widest text-blue-200">TELECOMUNICACIONES</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white">
              <div className="bg-white/15 rounded-full p-2">
                <ScanLine size={20} />
              </div>
              <div>
                <p className="font-bold leading-tight text-sm">ESCANEA Y DESCUBRE</p>
                <p className="text-xs text-blue-100">sedes, planes y servicios</p>
              </div>
            </div>
          </div>

          {/* Cuerpo: titular + QR */}
          <div className="relative flex items-center gap-10">
            <div className="flex-1 text-white">
              <p className="text-xl font-light italic text-blue-100 mb-1">Conoce todo lo que</p>
              <h1 className="text-5xl font-extrabold leading-[1.05] mb-3">
                PSI <span className="text-[#4fb0e8]">puede</span>
                <br />
                hacer por ti
              </h1>
              <p className="text-base italic text-blue-100 max-w-sm mb-8">
                Soluciones inteligentes para{" "}
                <span className="not-italic font-bold text-white bg-[#e31e25] px-2 py-0.5 rounded">
                  hogares y empresas
                </span>{" "}
                que quieren crecer.
              </p>

              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="shrink-0 bg-white/10 border border-white/20 rounded-full p-2.5">
                      <f.icon size={20} className="text-[#4fb0e8]" />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">
                        {f.title} <span className="text-[#4fb0e8]">{f.highlight}</span>
                      </p>
                      <p className="text-blue-100 text-xs">{f.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-[#4fb0e8]/40 blur-2xl"></div>
                <div className="relative bg-white rounded-[2rem] p-6 shadow-2xl">
                  <QRCodeCanvas
                    value={qrUrl}
                    size={760}
                    style={{ width: 300, height: 300 }}
                    level="H"
                    marginSize={2}
                    fgColor="#0e3a5c"
                    bgColor="#ffffff"
                    imageSettings={{
                      src: "/logo.png",
                      height: Math.round(760 * LOGO_RATIO),
                      width: Math.round(760 * LOGO_RATIO),
                      excavate: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Pie */}
          <div className="relative pt-8 border-t border-white/15">
            <div className="grid grid-cols-4 gap-4 mb-8">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="bg-white/10 border border-white/20 rounded-full p-2.5">
                    <v.icon size={20} className="text-[#4fb0e8]" />
                  </div>
                  <span className="text-white text-xs font-bold tracking-wide">{v.label}</span>
                </div>
              ))}
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-white text-2xl font-extrabold tracking-tight leading-tight">INNOVAMOS HOY,</p>
                <p className="text-[#4fb0e8] text-2xl font-extrabold tracking-tight leading-tight">
                  TRANSFORMAMOS TU MAÑANA.
                </p>
              </div>
              <p className="text-blue-100 text-sm font-semibold">www.psitelecomunicaciones.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
