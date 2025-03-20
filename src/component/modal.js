import { useState } from "react";
import { Wifi, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppModal = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  const sedes = [
    {
      name: "Sede San Gil",
      address: "Calle 67 #87-03, Bogotá",
      phone: "573184550936"
    },
    {
      name: "Sede Socorro",
      address: "Avenida 19 #126-42, Bogotá",
      phone: "573188237392"
    },
    {
      name: "Sede Piedecuesta",
      address: "Carrera 78 #26-35 Sur, Bogotá",
      phone: "573187305239"
    },
    {
        name: "Sede Campoalegre",
        address: "Carrera 78 #26-35 Sur, Bogotá",
        phone: "573165602425"
      }
  ];

  const handleContactClick = (phone) => {
    const message = encodeURIComponent(`Hola, estoy interesado en el plan ${plan.name} de ${plan.speed} Megas por ${plan.price}/mes. ¿Podrían brindarme más información?`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    onClose();
  };

  const isFeatured = plan?.featured || false;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md overflow-hidden bg-white rounded-3xl shadow-2xl transform transition-all duration-300 animate-fadeIn">
        {/* Cabecera del modal con degradado */}
        <div className="bg-gradient-to-r from-[#0e6493] to-[#073a57] p-6 text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center mb-2">
            <Wifi className="w-6 h-6 mr-2" />
            <h3 className="text-xl font-bold">{plan.name}</h3>
          </div>
            
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">{plan.price}</span>
            <span className="ml-1 text-sm text-blue-100">/mes IVA incluido</span>
          </div>
        </div>
        
        <div className="p-6">
          <h4 className="text-lg font-bold text-[#0e6493] mb-4">Selecciona una sede para contactar</h4>
          
          <div className="space-y-3 mb-4">
            {sedes.map((sede, index) => (
              <div 
                key={index}
                onClick={() => handleContactClick(sede.phone)}
                className="flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 border border-gray-200 hover:border-[#0e6493] hover:bg-blue-50 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#0e6493] group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-[#0e6493] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-gray-800">{sede.name}</h5>
                  <p className="text-xs text-gray-600">{sede.address}</p>
                </div>
                <FaWhatsapp className="w-6 h-6 text-green-500 group-hover:text-green-700 transition-colors" />
              </div>
            ))}
          </div>
          
          <div className="text-center text-xs text-gray-500">
            <p>Al contactarnos, nuestro equipo te brindará todos los detalles sobre este plan y responderá todas tus consultas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppModal;