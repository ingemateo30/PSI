"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Hero from '@/component/hero';
import Navbar from '@/component/navbar';
import Planes from '@/component/planes';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/component/mapa"), {
  ssr: false, // 🚀 Desactiva el renderizado en servidor
});
import Caracteristica from '@/component/caracteristicas';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ArrowRight, MapPin, Phone, Star, UserCheck, } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>PSI - Internet y Televisión por Fibra Óptica</title>
        <meta name="description" content="Tu compañía de internet y televisión por fibra óptica con la mejor velocidad y servicio" />
        <meta name="keywords" content="fibra óptica, internet, televisión, PSI, alta velocidad" />
        <meta property="og:title" content="PSI - Internet y Televisión por Fibra Óptica" />
        <meta property="og:description" content="Tu compañía de internet y televisión por fibra óptica" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Navbar with scroll effect */}
      <div className={`sticky top-0 z-50 transition-all duration-300 "}`}>
        <Navbar />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Características Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <Caracteristica />
      </section>

      {/* Cobertura Section with enhanced design */}
      <section className="relative bg-gradient-to-r from-[#0e6493] to-[#073a57] py-20 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-white"></div>
        </div>

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¡Cobertura de PSI Fibra/TV!
              <span className="block w-24 h-1 bg-[#e31e25] mx-auto mt-4 rounded-full"></span>
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">
              Conéctate a la mejor red de fibra óptica en las siguientes ciudades:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* San Gil */}
            <div className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">San Gil</h3>
              <p className="text-gray-100 text-center">Velocidad y estabilidad en la Capital Turística de Santander.</p>
            </div>

            {/* Socorro */}
            <div className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Socorro</h3>
              <p className="text-gray-100 text-center">La mejor conectividad en la Perla de Santander.</p>
            </div>

            {/* Piedecuesta */}
            <div className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Piedecuesta</h3>
              <p className="text-gray-100 text-center">Internet rápido y confiable en la ciudad garrotera.</p>
            </div>

            {/* Campoalegre */}
            <div className="bg-white/10 p-6 rounded-xl shadow-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <MapPin size={28} />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-center">Campoalegre</h3>
              <p className="text-gray-100 text-center">Conectamos a la ciudad del arroz con la mejor fibra óptica.</p>
            </div>
          </div>

          {/* Botón de consulta */}
          <div className="mt-12 text-center">
            <a href="/cobertura" className="inline-flex items-center bg-[#e31e25] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-red-600 transition transform hover:scale-105">
              <span>Consulta tu cobertura</span>
              <ArrowRight className="ml-2" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <Planes />
      </section>

      {/* Testimonials Section with enhanced design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#0e6493]">
              Lo que dicen nuestros clientes
              <span className="block w-24 h-1 bg-[#e31e25] mx-auto mt-4 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de familias confían en PSI para su conectividad diaria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-[#0e6493]/10 flex items-center justify-center mr-4">
                  <UserCheck className="h-8 w-8 text-[#0e6493]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0e6493]">María García</h4>
                  <p className="text-sm text-gray-600">Cliente desde 2023</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg">
                "Nunca había tenido una conexión tan estable. Desde que contratamos PSI, no hemos tenido problemas de velocidad ni caídas de señal."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-[#0e6493]/10 flex items-center justify-center mr-4">
                  <UserCheck className="h-8 w-8 text-[#0e6493]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0e6493]">Carlos Rodríguez</h4>
                  <p className="text-sm text-gray-600">Cliente desde 2022</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg">
                "La calidad de la televisión es increíble y el internet es súper rápido. Además, el servicio técnico siempre responde rápidamente si tenemos alguna duda."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-16 w-16 rounded-full bg-[#0e6493]/10 flex items-center justify-center mr-4">
                  <UserCheck className="h-8 w-8 text-[#0e6493]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0e6493]">Ana Martínez</h4>
                  <p className="text-sm text-gray-600">Cliente desde 2024</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg">
                "Trabajo desde casa y necesito una conexión confiable. Con PSI puedo hacer videollamadas sin interrupciones y subir archivos grandes en segundos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with enhanced design */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/api/placeholder/1200/400')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e6493]/90 to-[#073a57]/90"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">¿Listo para disfrutar de la mejor conexión?</h2>
            <p className="text-xl mb-10">
              Únete a miles de clientes satisfechos y experimenta la diferencia de nuestra fibra óptica de última generación
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/cobertura"
                className="px-8 py-4 rounded-full bg-[#e31e25] text-white font-bold text-lg shadow-lg transition transform hover:scale-105 hover:bg-red-600 flex items-center justify-center"
              >
                <span>Ver disponibilidad en tu zona</span>
                <MapPin className="ml-2" size={18} />
              </a>
              <a
                href="https://wa.me/573184550936?text=Hola%2C+quiero+más+información+sobre+su+servicio"
                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white shadow-lg transition transform hover:scale-105 hover:bg-white/10 flex items-center justify-center"
              >
                <span>Contactar a un asesor</span>
                <Phone className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Section */}
      <section >
        <Map />
      </section>



      {/* Footer */}
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

    </div>

  );
}
