"use client";

import { useState } from "react";
import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Television() {
    const canales = {
      "Noticias": ["CNN", "BBC News", "Caracol Noticias", "RCN Noticias", "NTN24"],
      "Deportes": ["ESPN", "Fox Sports", "Win Sports", "Directv Sports", "Gol Caracol"],
      "Entretenimiento": ["FX", "TNT", "Warner Channel", "Sony", "Universal"],
      "Películas": ["HBO", "Cinemax", "Paramount Channel", "Golden", "Star Channel"],
      "Infantil": ["Cartoon Network", "Disney Channel", "Nickelodeon", "Discovery Kids", "Baby TV"],
      "Música": ["MTV", "VH1", "Telehit", "HTV", "MuchMusic"],
    };
  
    return (
        <>
        <Navbar />
      <div className="bg-white min-h-screen text-gray-900 py-16 px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0e6493]">Plan de Televisión</h2>
          <p className="text-lg md:text-xl mt-4 max-w-3xl mx-auto text-gray-600">
            Disfruta de una programación variada con una amplia selección de canales para toda la familia.
          </p>
        </div>
  
        {/* Tarjeta del Plan de TV */}
        <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-3xl font-bold text-[#e31e25] mb-4">Plan Full HD</h3>
          <p className="text-lg text-gray-700 mb-4">Más de 100 canales en alta definición.</p>
          <ul className="text-gray-700 text-left mb-6 space-y-2">
            <li>Canales nacionales e internacionales</li>
            <li>Deportes, noticias, películas y más</li>
            <li>Señal en alta definición HD</li>
            <li>Soporte técnico 24/7</li>
          </ul>
          <p className="text-3xl font-bold text-[#0e6493] mb-4">$49.900 / mes</p>
          <button className="bg-[#e31e25] text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition">
            Suscribirse
          </button>
        </div>
  
        {/* Lista de Canales */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-[#0e6493] text-center mb-6">Canales Disponibles</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(canales).map(([categoria, lista]) => (
              <div key={categoria} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h4 className="text-2xl font-semibold text-[#e31e25] mb-3">{categoria}</h4>
                <ul className="text-gray-700 space-y-1">
                  {lista.map((canal, index) => (
                    <li key={index}>{canal}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
  