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
                  <span className="font-semibold text-[#0e6493]"> San Gil (Santander), Socorro (Santander) y Piedecuesta (Santander)</span>.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Social Media Column */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div>
                <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Servicios</h4>
              <ul className="space-y-3">
                <li><a href="/fibra" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Internet Fibra Óptica
                </a></li>
                <li><a href="/television" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Televisión HD
                </a></li>
                <li><a href="/fibra" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Paquetes
                </a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Empresa</h4>
              <ul className="space-y-3">
                <li><a href="/empresa" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Sobre PSI
                </a></li>
                <li><a href="/normatividad" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Normatividad
                </a></li>
                <li><a href="/tratamiento" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Tratamiento de datos
                </a></li>
                <li><a href="/terminos" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Términos y Condiciones
                </a></li>
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

