"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Boton from "@/component/contratarmapa"
import L from "leaflet";
import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";



// Ícono personalizado para los marcadores
const iconoPersonalizado = new L.Icon({
  iconUrl: "/logo.png",
  iconSize: [38, 48],
  iconAnchor: [19, 48],
  popupAnchor: [0, -42],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

const sedes = [
  { 
    ciudad: "San Gil", 
    lat: 6.5536, 
    lng: -73.1308, 
    direccion: "Carrera 9 # 9-94", 
    telefono: "3184550936",
    horario: "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM – 12:00 PM",
    imagen: "/sedes/sangil.jpg"
  },
  { 
    ciudad: "Socorro", 
    lat: 6.4668, 
    lng: -73.2620, 
    direccion: "Carrera 14 # 10-45", 
    telefono: "3188237392",
    horario: "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM – 12:00 PM",
    imagen: "/sedes/socorro.jpg"
  },
  { 
    ciudad: "Piedecuesta", 
    lat: 6.9895, 
    lng: -73.0516, 
    direccion: "Carrera 7 # 4-63", 
    telefono: "3187305239",
    horario: "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM – 12:00 PM",
    imagen: "/sedes/piedecuesta.jpg"
  },
];

export default function MapaSedes() {
  const [selectedSede, setSelectedSede] = useState(null);
  const [mapKey, setMapKey] = useState(1);

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png"
    });
  }, []);

  // Handles sede selection outside the map
  const handleSedeClick = (sede) => {
    setSelectedSede(sede);
    setMapKey(prevKey => prevKey + 1); // Force map rerender
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 -z-10">
      
      <div className="absolute left-0 right-0 h-32 bg-[#0e6493]/5 -skew-y-3 transform z-10"></div>
      
      <div className="relative text-center mb-16">
        <h2 className="text-5xl font-bold text-[#0e6493] tracking-tight">
          Nuestra <span className="relative inline-block">
            Cobertura
            <span className="block w-20 h-2 bg-[#e31e25] mx-auto mt-3 rounded-full"></span>
          </span>
        </h2>
        <p className="text-lg mt-6 max-w-3xl mx-auto text-gray-600">
          Encuentra la sede más cercana a ti y visítanos para recibir asesoría personalizada sobre nuestros servicios de conexión.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 ">
        {/* Sedes Panel */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-xl font-bold text-[#0e6493] mb-6 border-b border-gray-200 pb-2">
            Selecciona una Sede
          </h3>
          
          <div className="space-y-4">
            {sedes.map((sede, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedSede === sede ? 
                  "bg-[#0e6493] text-white shadow-md" : 
                  "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => handleSedeClick(sede)}
              >
                <div className="flex items-center">
                  <div className={`p-2 rounded-full ${selectedSede === sede ? "bg-white/20" : "bg-[#0e6493]/10"} mr-3`}>
                    <MapPin className={selectedSede === sede ? "text-white" : "text-[#0e6493]"} size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${selectedSede === sede ? "text-white" : "text-[#e31e25]"}`}>
                      {sede.ciudad}
                    </h4>
                    <p className={`text-sm ${selectedSede === sede ? "text-white/80" : "text-gray-600"}`}>
                      {sede.direccion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Seleccion y detalles */}
          {selectedSede && (
            <div className="mt-8 p-5 bg-gray-50 rounded-lg border-l-4 border-[#0e6493]">
              <h4 className="text-xl font-bold text-[#0e6493] mb-2">{selectedSede.ciudad}</h4>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-start">
                  <MapPin className="text-[#e31e25] mr-3 mt-1" size={18} />
                  <p className="text-gray-700">{selectedSede.direccion}</p>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-[#e31e25] mr-3 mt-1" size={18} />
                  <p className="text-gray-700">{selectedSede.telefono}</p>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-[#e31e25] mr-3 mt-1" size={18} />
                  <p className="text-gray-700">{selectedSede.horario}</p>
                </div>
              </div>
                      </div>
          )}
        </div>
        
        {/* Contenedor Mapa */}
        <div className="lg:col-span-2 relative z-20">
          <div className="bg-white p-2 rounded-xl shadow-xl overflow-hidden">
            <MapContainer
              key={mapKey}
              center={selectedSede ? [selectedSede.lat, selectedSede.lng] : [6.2, -73.1]}
              zoom={selectedSede ? 13 : 7}
              className="h-[600px] w-full rounded-lg"
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              {sedes.map((sede, index) => (
                <Marker 
                  key={index} 
                  position={[sede.lat, sede.lng]} 
                  icon={iconoPersonalizado}
                >
                  <Popup className="custom-popup">
                    <div className="text-center p-1">
                      <h3 className="text-lg font-bold text-[#e31e25]">{sede.ciudad}</h3>
                      <p className="text-gray-700 text-sm mb-2">{sede.direccion}</p>
                      <div className="flex justify-center space-x-2 text-xs">
                        <span className="inline-flex items-center">
                          <Phone size={12} className="mr-1" />
                          {sede.telefono}
                        </span>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
      
      {/* Información adicional */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#0e6493] mb-4">¿Necesitas más información?</h3>
        <p className="text-gray-600 mb-6">
          Nuestros asesores están listos para atenderte y ofrecerte la mejor solución para tus necesidades de conectividad.
        </p>
        <Boton />
      </div>
    </div>
  );
}