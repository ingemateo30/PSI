"use client";

import { useState } from "react";
import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Cobertura() {
    const [direccion, setDireccion] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Verificando cobertura para: ${direccion}`);
    };
  
    return (
        <>
        <Navbar />
      <div className="bg-white min-h-screen text-gray-900 py-16 px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e6493]">¡Conéctate con PSI Fibra!</h2>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            Descubre la mejor cobertura de fibra óptica en tu ciudad. Verifica disponibilidad y únete a la mejor conexión.
          </p>
        </div>
  
        {/* Sección de Ciudades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          {/* Tarjeta - San Gil */}
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-[#e31e25] text-center">
            <h3 className="text-2xl font-semibold text-[#0e6493]">📍 San Gil, Santander</h3>
            <p className="text-gray-600 mt-2">Velocidades hasta <strong>1 Gbps</strong> en la zona urbana.</p>
          </div>
  
          {/* Tarjeta - Socorro */}
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-[#e31e25] text-center">
            <h3 className="text-2xl font-semibold text-[#0e6493]">📍 Socorro, Santander</h3>
            <p className="text-gray-600 mt-2">Red de fibra expandida en el <strong>70% del municipio</strong>.</p>
          </div>
  
          {/* Tarjeta - Piedecuesta */}
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-[#e31e25] text-center">
            <h3 className="text-2xl font-semibold text-[#0e6493]">📍 Piedecuesta, Santander</h3>
            <p className="text-gray-600 mt-2">Cobertura en más de <strong>50 barrios</strong>.</p>
          </div>
  
          {/* Tarjeta - Campoalegre */}
          <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-[#e31e25] text-center">
            <h3 className="text-2xl font-semibold text-[#0e6493]">📍 Campoalegre, Huila</h3>
            <p className="text-gray-600 mt-2">Latencia mínima y conexión estable en la zona urbana.</p>
          </div>
  
        </div>
  
        {/* Formulario de Consulta */}
        <div className="mt-16 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-semibold text-[#0e6493] mb-4">🔍 Consulta tu cobertura</h3>
          <p className="text-gray-600 mb-4">Ingresa tu dirección y te confirmaremos la disponibilidad del servicio.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ejemplo: Calle 10 #5-20, San Gil"
              className="w-full p-3 rounded-md border border-gray-300 focus:border-[#0e6493] focus:ring-2 focus:ring-[#0e6493]"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 w-full bg-[#e31e25] text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
            >
              📍 Verificar cobertura
            </button>
          </form>
        </div>
  
        {/* Botón de Contacto */}
        <div className="mt-10 text-center">
          <a href="#" className="bg-[#0e6493] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#093f61] transition">
            📞 Hablar con un asesor
          </a>
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
