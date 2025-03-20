"use client";

import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FaWhatsapp } from "react-icons/fa";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Empresa() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className={`sticky top-0 z-50 transition-all duration-300 "}`}>
        <Navbar />
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen text-gray-900 pt-16 pb-24">
        
        <div className="relative overflow-hidden bg-[#0e6493] text-white py-20 px-6 mb-16">
          <div className="absolute inset-0 bg-[url('/imagen.webp')] opacity-10"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#e31e25]/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#e31e25]/20 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h2 className="text-5xl md:text-6xl font-bold mb-4">Sobre Nosotros</h2>
              <div className="w-24 h-1 bg-[#e31e25] mx-auto mb-6"></div>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
                Conoce más sobre nuestra empresa, misión, visión y compromiso con la calidad del servicio.
              </p>
            </div>
          </div>
        </div>

       
        <div className="max-w-6xl mx-auto px-6 space-y-12">
        
          <div className={`bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#e31e25] transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-[#0e6493]/10 flex items-center justify-center">
                  <span className="text-4xl">📡</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e31e25] mb-4">PROVEEDOR DE TELECOMUNICACIONES S.A.S.</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Somos una empresa prestadora de servicios de Televisión por cable e Internet, con cobertura en
                  <span className="font-semibold text-[#0e6493]"> San Gil (Santander), Socorro (Santander), Piedecuesta (Santander) y Campoalegre (Huila)</span>.
                  Nos comprometemos a ofrecer la mejor calidad en servicios de telecomunicaciones para nuestros usuarios.
                </p>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
            <div className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0e6493] h-full transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "200ms" }}>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#0e6493] mb-4 text-center">Misión</h3>
                <p className="text-gray-700 flex-grow">
                  Prestar el mejor servicio de televisión por suscripción con un excelente servicio al cliente,
                  garantizando una óptima señal y un equipo técnico comprometido. Nos enfocamos en la seguridad,
                  confiabilidad e innovación constante para ofrecer el mejor servicio.
                </p>
              </div>
            </div>

          
            <div className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#0e6493] h-full transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "400ms" }}>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#0e6493] mb-4 text-center">Visión</h3>
                <p className="text-gray-700 flex-grow">
                  Ser la empresa líder en la prestación del servicio de televisión por suscripción, generando bienestar
                  y prosperidad para nuestros usuarios. Nos comprometemos a satisfacer las necesidades de nuestros clientes
                  con calidad y excelencia.
                </p>
              </div>
            </div>
          </div>

        
          <div className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#e31e25] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "600ms" }}>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#e31e25] mb-4">Políticas de Calidad</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Nos especializamos en telecomunicaciones, brindando un servicio de entretenimiento e información.
                  Nos comprometemos con la satisfacción del usuario, mejorando la calidad de vida y el bienestar de la región.
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "800ms" }}>
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-[#0e6493]">Líneas de Atención</h3>
              <div className="w-24 h-1 bg-[#e31e25] mx-auto mt-4"></div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Estamos siempre disponibles para atender tus inquietudes a través de nuestras líneas de contacto.
              </p>
            </div>

          
            <div className="overflow-x-auto rounded-xl shadow-lg">
              <table className="min-w-full bg-white text-left">
                <thead className="bg-gradient-to-r from-[#0e6493] to-[#1a7eb6] text-white">
                  <tr>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Ciudad</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Teléfono</th>
                    <th className="py-4 px-6 font-semibold whitespace-nowrap">Dirección</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium whitespace-nowrap">San Gil</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaWhatsapp className="text-[#e31e25] mr-2" /> +573184550936
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">Carrera 9 # 9-94</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium whitespace-nowrap">Socorro</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                      <FaWhatsapp className="text-[#e31e25] mr-2" /> +573188237392
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">Carrera 14 # 10-45</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium whitespace-nowrap">Campoalegre</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                      <FaWhatsapp className="text-[#e31e25] mr-2" /> +573165602425
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">Carrera 9 # 17-51</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium whitespace-nowrap">Piedecuesta</td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                      <FaWhatsapp className="text-[#e31e25] mr-2" /> +573187305239
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">Carrera 7 # 4-63</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
              </div>
            </div>


            <div>
              <h4 className="text-lg font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="/fibra" className="text-gray-300 hover:text-white">Internet Fibra Óptica</a></li>
                <li><a href="/television" className="text-gray-300 hover:text-white">Televisión HD</a></li>
                <li><a href="/fibra" className="text-gray-300 hover:text-white">Paquetes</a></li>
                <li><a href="/empresa" className="text-gray-300 hover:text-white">Empresas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Soporte</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Centro de Ayuda</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Preguntas Frecuentes</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Reporte de Problemas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="/empresa" className="text-gray-300 hover:text-white">Sobre PSI</a></li>
                <li><a href="/normatividad" className="text-gray-300 hover:text-white">Normatividad</a></li>
                <li><a href="/tratamiento" className="text-gray-300 hover:text-white">Tratamiento de datos</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} PSI Fibra. Todos los derechos reservados.</p>
          </div>
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

