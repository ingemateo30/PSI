"use client";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaShareAlt, FaTimes } from "react-icons/fa";

export default function FloatingSocial() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Detectar si es un dispositivo móvil al cargar y cuando cambia el tamaño de la ventana
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Comprobar al cargar
    checkIfMobile();
    
    // Listener para cambios de tamaño de ventana
    window.addEventListener('resize', checkIfMobile);
    
    // Limpieza al desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Redes sociales
  const socialNetworks = [
    { name: "Facebook", icon: <FaFacebookF size={20} />, color: "bg-blue-700", hoverColor: "hover:bg-blue-800" },
    { name: "Instagram", icon: <FaInstagram size={20} />, color: "bg-pink-500", hoverColor: "hover:bg-pink-600" },
    { name: "Twitter", icon: <FaTwitter size={20} />, color: "bg-sky-500", hoverColor: "hover:bg-sky-600" },
    { name: "YouTube", icon: <FaYoutube size={20} />, color: "bg-red-600", hoverColor: "hover:bg-red-700" },
    { name: "Email", icon: <FaEnvelope size={20} />, color: "bg-gray-700", hoverColor: "hover:bg-gray-800" },
  ];

  // Versión para escritorio
  if (!isMobile) {
    return (
      <div className="fixed left-0 top-1/3 z-50 flex flex-col shadow-lg rounded-r-lg overflow-hidden">
        {socialNetworks.map((network, index) => (
          <a 
            key={network.name}
            href="#" 
            aria-label={network.name}
            className={`${network.color} ${network.hoverColor} p-3 text-white transition-all duration-300 flex items-center justify-center ${
              index < socialNetworks.length - 1 ? 'border-b border-white/10' : ''
            }`}
          >
            {network.icon}
          </a>
        ))}
      </div>
    );
  }

  // Versión para móvil
  return (
    <>
      {/* Botón flotante de compartir para móviles */}
      <button 
        onClick={toggleMenu} 
        className={`fixed z-50 shadow-lg rounded-full p-3 text-white transition-all duration-300 flex items-center justify-center ${
          isOpen ? "bg-red-500 bottom-24 right-4" : "bg-blue-600 bottom-24 right-4"
        }`}
        aria-label={isOpen ? "Cerrar menú social" : "Abrir menú social"}
      >
        {isOpen ? <FaTimes size={20} /> : <FaShareAlt size={20} />}
      </button>

      {/* Menú desplegable de redes sociales */}
      <div className={`fixed z-40 transition-all duration-300 ${
        isOpen 
          ? "opacity-100 pointer-events-auto" 
          : "opacity-0 pointer-events-none"
      }`}>
        <div className="fixed inset-0 bg-black/30" onClick={toggleMenu}></div>
        <div className={`fixed right-4 bottom-36 z-50 flex flex-col-reverse gap-2 transition-all duration-500 ${
          isOpen ? "translate-y-0" : "translate-y-20"
        }`}>
          {socialNetworks.map((network, index) => (
            <a 
              key={network.name}
              href="#" 
              aria-label={network.name}
              className={`${network.color} ${network.hoverColor} p-3 text-white transition-all duration-300 flex items-center justify-center rounded-full shadow-lg ${
                isOpen ? "scale-100" : "scale-0"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
            >
              {network.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}


