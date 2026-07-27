"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Shield,
  Lightbulb,
  Cpu,
  TrendingUp,
  Download,
  Copy,
  Check,
  ScanLine,
  Loader2,
  QrCode,
} from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { toPng } from "html-to-image";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const values = [
  { icon: Shield, label: "CONFIANZA" },
  { icon: Lightbulb, label: "INNOVACIÓN" },
  { icon: Cpu, label: "TECNOLOGÍA" },
  { icon: TrendingUp, label: "RESULTADOS" },
];

// Proporción del logo incrustado respecto al tamaño real del QR (para que no se vea borroso al escalar).
const LOGO_RATIO = 52 / 280;

export default function DescubreFlyer({
  targetPath,
  fallbackUrl,
  features,
  ctaLabel,
  flyerFileName,
  qrFileName,
  scanTagline,
  contactScope,
}) {
  const [qrUrl, setQrUrl] = useState(fallbackUrl);
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const flyerRef = useRef(null);
  const qrExportRef = useRef(null);

  useEffect(() => {
    setQrUrl(`${window.location.origin}${targetPath}`);
  }, [targetPath]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qrUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silencioso: el navegador no permitió copiar al portapapeles.
    }
  };

  const handleDownloadQr = () => {
    const canvas = qrExportRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = qrFileName;
    link.click();
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
      link.download = flyerFileName;
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
        <Navbar contactScope={contactScope} />
      </div>

      <div className="relative overflow-hidden bg-gradient-to-br from-[#071a2b] via-[#0e3a5c] to-[#0e6493]">
        {/* Decoración de fondo */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#0e6493]/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-[#e31e25]/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-24">
          {/* Encabezado logo + escaneo */}
          <div className="flex items-center justify-between mb-14">
            <img src="/psi.png" alt="PSI Telecomunicaciones" className="h-24 md:h-32 w-auto object-contain" />

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3 text-white backdrop-blur-sm w-fit">
              <div className="bg-white/15 rounded-full p-2">
                <ScanLine size={22} />
              </div>
              <div>
                <p className="font-bold leading-tight">ESCANEA Y DESCUBRE</p>
                <p className="text-sm text-blue-100">{scanTagline}</p>
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
                <span className="not-italic font-bold text-[#ff6b70]">hogares y empresas</span> que quieren
                estar siempre conectados.
              </p>

              <div className="mt-10 space-y-6">
                {features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="shrink-0 bg-white/10 border border-white/20 rounded-full p-3">
                      <f.icon size={24} className="text-[#4fb0e8]" />
                    </div>
                    <div>
                      <p className="font-bold">{f.title}</p>
                      <p className="text-blue-100 text-sm">{f.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna QR */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-[#4fb0e8]/40 blur-2xl"></div>
                <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-br from-[#4fb0e8] via-white/60 to-[#e31e25] shadow-2xl">
                  <div className="bg-white rounded-[calc(2rem-3px)] p-6 sm:p-8">
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
              </div>

              <p className="text-blue-100 text-sm mt-6 text-center max-w-xs">
                Escanea con la cámara de tu celular o entra directo al enlace.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mt-5">
                <Link
                  href={targetPath}
                  className="inline-flex items-center gap-2 bg-[#e31e25] hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  {ctaLabel}
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-3">
                <button
                  onClick={handleDownloadFlyer}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl transition-all disabled:opacity-60 text-sm"
                >
                  {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                  {downloading ? "Generando..." : "Descargar flyer"}
                </button>
                <button
                  onClick={handleDownloadQr}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl transition-all text-sm"
                >
                  <QrCode size={16} />
                  Descargar solo el QR
                </button>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold py-2.5 px-4 rounded-xl transition-all text-sm"
                >
                  {copied ? <Check size={16} className="text-green-300" /> : <Copy size={16} />}
                  {copied ? "¡Copiado!" : "Copiar enlace"}
                </button>
              </div>
            </div>
          </div>

          {/* Franja de valores */}
          <div className="mt-20 pt-10 border-t border-white/15">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              {values.map((v, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="bg-white/10 border border-white/20 rounded-full p-3">
                    <v.icon size={22} className="text-[#4fb0e8]" />
                  </div>
                  <span className="text-white text-sm font-bold tracking-wide">{v.label}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
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

      {/* Elementos ocultos usados solo para generar las imágenes descargables */}
      <div style={{ position: "absolute", top: 0, left: 0, width: 0, height: 0, overflow: "hidden" }}>
        {/* QR de alta resolución, listo para descargar solo */}
        <QRCodeCanvas
          ref={qrExportRef}
          value={qrUrl}
          size={1000}
          level="H"
          marginSize={3}
          fgColor="#0e3a5c"
          bgColor="#ffffff"
          imageSettings={{
            src: "/logo.png",
            height: Math.round(1000 * LOGO_RATIO),
            width: Math.round(1000 * LOGO_RATIO),
            excavate: true,
          }}
        />

        {/* Flyer cuadrado tipo publicidad, 1080x1080 */}
        <div
          ref={flyerRef}
          style={{ width: 1080, height: 1080, fontFamily: "BrandingSF, sans-serif" }}
          className="relative flex flex-col overflow-hidden bg-gradient-to-br from-[#071a2b] via-[#0e3a5c] to-[#0e6493] p-14"
        >
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0e6493]/50 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-[#e31e25]/25 rounded-full blur-3xl"></div>

          {/* Encabezado: logo blanco, grande */}
          <div className="relative flex items-center mb-12">
            <img src="/psi.png" alt="PSI" style={{ height: 170, objectFit: "contain" }} />
          </div>

          {/* Cuerpo: titular + QR */}
          <div className="relative">
            <div className="flex items-center gap-12 w-full">
              <div className="flex-1 text-white">
                <p className="text-xl font-light italic text-blue-100 mb-1">Conoce todo lo que</p>
                <h1 className="text-6xl font-extrabold leading-[1.05] mb-4">
                  PSI <span className="text-[#4fb0e8]">puede</span>
                  <br />
                  hacer por ti
                </h1>
                <p className="text-lg italic text-blue-100 max-w-sm mb-10">
                  Soluciones inteligentes para{" "}
                  <span className="not-italic font-bold text-[#ff6b70]">hogares y empresas</span> que quieren
                  crecer.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6 max-w-md">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
                        <f.icon size={24} className="text-[#4fb0e8]" />
                      </div>
                      <div>
                        <p className="font-bold text-sm leading-tight">{f.title}</p>
                        <p className="text-blue-100 text-xs">{f.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col items-center">
                <div
                  className="inline-flex items-center gap-1.5 bg-[#e31e25] text-white text-xs font-extrabold tracking-wide px-4 py-2 rounded-full shadow-lg mb-5"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  <ScanLine size={14} />
                  ESCANEA AQUÍ
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2.4rem] bg-[#4fb0e8]/40 blur-2xl"></div>
                  <div className="relative p-[3px] rounded-[2.2rem] bg-gradient-to-br from-[#4fb0e8] via-white/60 to-[#e31e25] shadow-2xl">
                    <div className="bg-white rounded-[calc(2.2rem-3px)] p-7">
                      <QRCodeCanvas
                        value={qrUrl}
                        size={820}
                        style={{ width: 330, height: 330 }}
                        level="H"
                        marginSize={2}
                        fgColor="#0e3a5c"
                        bgColor="#ffffff"
                        imageSettings={{
                          src: "/logo.png",
                          height: Math.round(820 * LOGO_RATIO),
                          width: Math.round(820 * LOGO_RATIO),
                          excavate: true,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Franja de valores */}
          <div className="relative mt-12 mb-10 grid grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="bg-white/10 border border-white/20 rounded-full p-3">
                  <v.icon size={22} className="text-[#4fb0e8]" />
                </div>
                <span className="text-white text-xs font-bold tracking-wide">{v.label}</span>
              </div>
            ))}
          </div>

          {/* Cierre: barra de color con la propuesta de valor y el sitio web */}
          <div className="relative rounded-2xl bg-gradient-to-r from-[#e31e25] to-[#ff4b52] px-10 py-6 shadow-xl flex items-center justify-between">
            <p className="text-white font-extrabold text-xl leading-tight">
              INNOVAMOS HOY,
              <br />
              TRANSFORMAMOS TU MAÑANA.
            </p>
            <div className="text-right">
              <p className="text-white/80 text-xs uppercase tracking-widest">Visítanos en</p>
              <p className="text-white font-extrabold text-2xl">www.psi.net.co</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
