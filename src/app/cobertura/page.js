"use client";

import { useState, useEffect } from "react";
import Navbar from '@/component/navbar';
import FloatingSocial from '@/component/redes';
import Boton from '@/component/botonsubir';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { motion } from "framer-motion";
import Mapa from '@/component/mapa';

export default function Cobertura() {
  const [direccion, setDireccion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Activar animación de las tarjetas después de cargar la página
    setAnimateCards(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de verificación
    setTimeout(() => {
      setIsLoading(false);
      alert(`Verificando cobertura para: ${direccion}`);
    }, 1500);
  };

  return (
    <>
      <Navbar />
     <Mapa />
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
      <FloatingSocial />
      <Boton />
      <FloatingWhatsApp
        phoneNumber="573204000000"
        accountName="PSI Fibra"
        avatar="https://psi-fibra.vercel.app/logo.png"
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        allowClickAway
        darkMode={false}
      />
    </>
  );
}