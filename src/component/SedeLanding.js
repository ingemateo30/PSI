"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Wifi, Tv, QrCode } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "@/component/navbar";
import FloatingSocial from "@/component/redes";
import Boton from "@/component/botonsubir";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { canalesDestacados } from "@/lib/sedesData";

export default function SedeLanding({ sedesList, heroTitle, heroSubtitle, descubreHref, contactScope }) {
  const [activa, setActiva] = useState(sedesList[0].id);
  const sede = sedesList.find((s) => s.id === activa) || sedesList[0];
  const mostrarSelector = sedesList.length > 1;

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar contactScope={contactScope} />
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-900">
        {/* Hero */}
        <div className="relative overflow-hidden bg-[#0e6493] text-white py-16 px-6">
          <div className="absolute inset-0 bg-[url('/imagen.webp')] opacity-10"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#e31e25]/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#e31e25]/20 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
            {/* Insignia 23 años */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-600 shadow-xl border-4 border-yellow-200">
              <div className="text-center leading-none">
                <p className="text-3xl font-extrabold text-[#0e3a5c]">23</p>
                <p className="text-[9px] font-bold tracking-widest text-[#0e3a5c]">AÑOS</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-3">{heroTitle}</h1>
            <div className="w-24 h-1 bg-[#e31e25] mb-6"></div>
            <p className="text-lg md:text-xl max-w-2xl font-light">{heroSubtitle}</p>

            <Link
              href={descubreHref}
              className="mt-8 inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold py-2.5 px-5 rounded-xl transition-all"
            >
              <QrCode size={18} />
              Ver la página con el código QR
            </Link>
          </div>
        </div>

        {/* Selector de sedes (solo si hay más de una en este grupo) */}
        {mostrarSelector && (
          <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
            <div className="bg-white rounded-2xl shadow-xl p-3 flex flex-wrap justify-center gap-2">
              {sedesList.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiva(s.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                    activa === s.id
                      ? "bg-[#0e6493] text-white shadow-md"
                      : "text-gray-600 hover:bg-blue-50"
                  }`}
                >
                  <MapPin size={18} className={activa === s.id ? "text-white" : "text-[#e31e25]"} />
                  {s.ciudad}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Detalle de la sede seleccionada */}
        <div className="max-w-6xl mx-auto px-6 mt-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Info de contacto */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#e31e25] h-fit">
              <h3 className="text-2xl font-bold text-[#0e6493] mb-4">PSI {sede.ciudad}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#e31e25] mt-1 shrink-0" size={20} />
                  <p className="text-gray-700">{sede.direccion}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-[#e31e25] mt-1 shrink-0" size={20} />
                  <p className="text-gray-700">{sede.whatsappDisplay}</p>
                </div>
                {sede.horario && (
                  <div className="flex items-start gap-3">
                    <Clock className="text-[#e31e25] mt-1 shrink-0" size={20} />
                    <p className="text-gray-700 text-sm">{sede.horario}</p>
                  </div>
                )}
              </div>

              <a
                href={`https://wa.me/${sede.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 w-full py-3 px-6 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all"
              >
                <FaWhatsapp size={20} />
                Escríbenos por WhatsApp
              </a>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Tv className="text-[#0e6493]" size={20} />
                  <span className="text-sm">Televisión Digital sola</span>
                </div>
                <span className="text-xl font-bold text-[#e31e25]">{sede.tvPrice}</span>
              </div>
            </div>

            {/* Planes de la sede */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-[#0e6493] mb-1">Internet + Televisión</h3>
              <p className="text-gray-600 mb-6">Fibra óptica ultraveloz, IVA incluido.</p>

              <div className="grid grid-cols-2 gap-5">
                {sede.plans.map((plan, i) => {
                  const featured = i === sede.plans.length - 1;
                  return (
                    <div
                      key={i}
                      className={`rounded-2xl p-6 text-center shadow-lg transition-all hover:-translate-y-1 ${
                        featured
                          ? "bg-gradient-to-br from-[#0e6493] to-[#073a57] text-white"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div
                        className={`mx-auto mb-3 w-12 h-12 rounded-full flex items-center justify-center ${
                          featured ? "bg-white/15" : "bg-[#0e6493]/10"
                        }`}
                      >
                        <Wifi className={featured ? "text-white" : "text-[#0e6493]"} size={22} />
                      </div>
                      <p className={`text-lg font-bold ${featured ? "text-white" : "text-gray-800"}`}>
                        {plan.megas} Megas
                      </p>
                      <p className={`text-sm mb-2 ${featured ? "text-blue-100" : "text-gray-500"}`}>
                        + Televisión
                      </p>
                      <p className={`text-3xl font-extrabold ${featured ? "text-white" : "text-[#e31e25]"}`}>
                        {plan.price}
                      </p>
                    </div>
                  );
                })}
              </div>

              <a
                href={`https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(
                  `Hola PSI ${sede.ciudad}, quiero más información sobre los planes de internet y televisión.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-8 bg-[#e31e25] hover:bg-red-700 text-white rounded-xl font-bold shadow-lg transition-all hover:scale-105"
              >
                Quiero contratar en {sede.ciudad}
              </a>
            </div>
          </div>
        </div>

        {/* Canales destacados */}
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-[#0e6493]">Lo que incluye tu Televisión Digital</h3>
            <div className="w-24 h-1 bg-[#e31e25] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Más de 87 canales digitales y 7 canales de radio.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {canalesDestacados.map((cat, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border-t-4 border-[#0e6493]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-[#0e6493]/10 rounded-full p-2">
                    <cat.icon className="text-[#0e6493]" size={20} />
                  </div>
                  <h4 className="font-bold text-gray-800">{cat.categoria}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{cat.canales.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabla resumen (solo si el grupo tiene más de una sede) */}
        {mostrarSelector && (
          <div className="max-w-6xl mx-auto px-6 mt-20">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-[#0e6493]">{heroTitle}</h3>
              <div className="w-24 h-1 bg-[#e31e25] mx-auto mt-4"></div>
            </div>

            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full bg-white text-left">
                <thead className="bg-gradient-to-r from-[#0e6493] to-[#1a7eb6] text-white">
                  <tr>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Ciudad</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Dirección</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">WhatsApp</th>
                  </tr>
                </thead>
                <tbody>
                  {sedesList.map((s) => (
                    <tr key={s.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 font-medium whitespace-nowrap">{s.ciudad}</td>
                      <td className="py-4 px-6 whitespace-nowrap">{s.direccion}</td>
                      <td className="py-4 px-6 whitespace-nowrap">
                        <a
                          href={`https://wa.me/${s.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:text-[#e31e25] transition-colors"
                        >
                          <FaWhatsapp className="text-green-600 mr-2" /> {s.whatsappDisplay}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-6 mt-20 pb-4 text-center">
          <p className="text-[#0e6493] text-2xl font-extrabold">INNOVAMOS HOY, TRANSFORMAMOS TU MAÑANA.</p>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Servicios</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/fibra" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Internet Fibra Óptica
                  </a>
                </li>
                <li>
                  <a href="/television" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Televisión HD
                  </a>
                </li>
                <li>
                  <a href={descubreHref} className="text-gray-300 hover:text-white transition-colors duration-200">
                    Código QR de PSI
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Empresa</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/empresa" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Sobre PSI
                  </a>
                </li>
                <li>
                  <a href="/cobertura" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Cobertura
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 text-sm">
            <p>&copy; {new Date().getFullYear()} PSI Fibra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <FloatingSocial />
      <Boton />
      <FloatingWhatsApp
        phoneNumber={`+${sede.whatsapp}`}
        accountName={`PSI ${sede.ciudad}`}
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
