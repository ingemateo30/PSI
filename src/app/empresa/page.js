"use client";

import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Empresa() {
    return (
        <>
         <Navbar />
      <div className="bg-white min-h-screen text-gray-900 py-16 px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e6493]">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            Conoce más sobre nuestra empresa, misión, visión y compromiso con la calidad del servicio.
          </p>
        </div>
  
        {/* Información de la empresa */}
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Empresa */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#e31e25]">📡 PROVEEDOR DE TELECOMUNICACIONES S.A.S.</h3>
            <p className="text-gray-700 mt-2">
              Somos una empresa prestadora de servicios de Televisión por cable e Internet, con cobertura en 
              <strong> San Gil (Santander), Socorro (Santander), Piedecuesta (Santander) y Campoalegre (Huila)</strong>.
            </p>
          </div>
  
          {/* Misión */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#e31e25]">🎯 Misión</h3>
            <p className="text-gray-700 mt-2">
              Prestar el mejor servicio de televisión por suscripción con un excelente servicio al cliente, 
              garantizando una óptima señal y un equipo técnico comprometido. Nos enfocamos en la seguridad, 
              confiabilidad e innovación constante para ofrecer el mejor servicio.
            </p>
          </div>
  
          {/* Visión */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#e31e25]">🚀 Visión</h3>
            <p className="text-gray-700 mt-2">
              Ser la empresa líder en la prestación del servicio de televisión por suscripción, generando bienestar 
              y prosperidad para nuestros usuarios. Nos comprometemos a satisfacer las necesidades de nuestros clientes 
              con calidad y excelencia.
            </p>
          </div>
  
          {/* Políticas de Calidad */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-[#e31e25]">✅ Políticas de Calidad</h3>
            <p className="text-gray-700 mt-2">
              Nos especializamos en telecomunicaciones, brindando un servicio de entretenimiento e información. 
              Nos comprometemos con la satisfacción del usuario, mejorando la calidad de vida y el bienestar de la región.
            </p>
          </div>
        </div>
  
        {/* Tabla de Líneas de Atención */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-[#0e6493] text-center mb-6">📞 Líneas de Atención</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg text-left border">
              <thead className="bg-[#0e6493] text-white">
                <tr>
                  <th className="p-4">Ciudad</th>
                  <th className="p-4">Teléfono</th>
                  <th className="p-4">Dirección</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">San Gil</td>
                  <td className="p-4">7236020</td>
                  <td className="p-4">Carrera 9 #9-94</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Socorro</td>
                  <td className="p-4">7273300</td>
                  <td className="p-4">Carrera 14 #10-45</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">Campoalegre</td>
                  <td className="p-4">3182711387</td>
                  <td className="p-4">Carrera 9 17-51</td>
                </tr>
                <tr>
                  <td className="p-4">Piedecuesta</td>
                  <td className="p-4">3187305239</td>
                  <td className="p-4">Carrera 7 4-63</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        {/* Formulario de PQR */}
        <div className="mt-16 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-[#0e6493] mb-4">📩 Gestión de PQR</h3>
          <p className="text-gray-600 mb-4">
            Presenta tus peticiones, quejas o reclamos a través de nuestro formulario. Tu información será tratada con total privacidad.
          </p>
          <form>
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 mb-3 rounded-md border border-gray-300 focus:border-[#0e6493] focus:ring-2 focus:ring-[#0e6493]"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full p-3 mb-3 rounded-md border border-gray-300 focus:border-[#0e6493] focus:ring-2 focus:ring-[#0e6493]"
            />
            <textarea
              placeholder="Escribe tu mensaje"
              className="w-full p-3 mb-3 rounded-md border border-gray-300 focus:border-[#0e6493] focus:ring-2 focus:ring-[#0e6493]"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#e31e25] text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
            >
              Enviar PQR
            </button>
          </form>
        </div>
      </div>
       <footer className="bg-gray-800 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Logo */}
                    <div className="mb-2">
                      <img src="/psi.png" alt="PSI Fibra" className="w-32 md:w-40" />
                    </div>
                  </div>
      
                  <div>
                    <h4 className="text-lg font-bold mb-4">Servicios</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="text-gray-300 hover:text-white">Internet Fibra Óptica</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Televisión HD</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Paquetes</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Empresas</a></li>
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
                      <li><a href="#" className="text-gray-300 hover:text-white">Sobre PSI</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Noticias</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Trabaja con Nosotros</a></li>
                      <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
                    </ul>
                  </div>
                </div>
      
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
                  <p>&copy; 2025 PSI Fibra. Todos los derechos reservados.</p>
                </div>
              </div>
            </footer>
              {/* Botón de WhatsApp */}
                  <FloatingWhatsApp
                    phoneNumber="+573212631673"
                    accountName="Jelcom soluciones informaticas"
                    avatar="./logo.png"
                    darkMode={true}
                    statusMessage="Normalmente responde en 1 hora"
                    chatMessage="¡Hola! jelcom, ¿en qué te podemos ayudar?"
                    placeholder="Escribe un mensaje"
                    notification={true}
                    chatboxHeight={340}
                  />
                  <FloatingSocial />
                  <Boton />
      </>
    );
  }
  