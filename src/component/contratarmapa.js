"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function BotonContratacion() {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (showModal) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const sedes = [
    { id: 1, nombre: "San Gil", direccion: "Carrera 9 # 9-94", telefono: "573184550936", mensaje: "Hola, quiero más información sobre su servicio en San Gil" },
    { id: 2, nombre: "Socorro", direccion: "Carrera 14 # 10-45", telefono: "573188237392", mensaje: "Hola, quiero más información sobre su servicio en Socorro" },
    { id: 4, nombre: "Piedecuesta", direccion: "Carrera 7 # 4-63", telefono: "573187305239", mensaje: "Hola, quiero más información sobre su servicio en Piedecuesta" },
  ];

  const abrirWhatsApp = (telefono, mensaje) => {
    const mensajeCodificado = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${telefono}?text=${mensajeCodificado}`, "_blank", "noopener,noreferrer");
    setShowModal(false);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      {/* Botón que abre el modal */}
      <a  onClick={() => setShowModal(true)} className="inline-block px-8 py-3 rounded-lg bg-[#e31e25] text-white font-bold hover:bg-[#c71a1f] transition-colors shadow-lg">
          Contáctanos ahora
        </a>

      {/* Modal renderizado con un portal */}
      {mounted &&
        createPortal(
          showModal && (
            <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg w-full max-w-md overflow-y-auto relative shadow-2xl mx-auto p-6 max-h-[90vh]"
              >
                {/* Encabezado */}
                <div className="bg-[#0e6493] p-5 rounded-t-lg sticky top-0 z-10">
                  <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-red-300">
                    <X size={28} />
                  </button>
                  <h3 className="text-xl font-bold text-white">Selecciona una sede</h3>
                </div>

                {/* Contenido */}
                <p className="text-gray-600 my-4 text-sm">Selecciona la sede más cercana para recibir información personalizada:</p>
                <div className="grid grid-cols-1 gap-3">
                  {sedes.map((sede) => (
                    <button
                      key={sede.id}
                      onClick={() => abrirWhatsApp(sede.telefono, sede.mensaje)}
                      className="flex items-start p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors text-left group shadow-md"
                    >
                      <div className="bg-[#0e6493] rounded-full p-2 mr-3 text-white">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0e6493] text-sm">{sede.nombre}</h4>
                        <p className="text-gray-600 text-xs">{sede.direccion}</p>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Botón de cerrar */}
                <div className="mt-4 flex justify-center">
                  <button onClick={closeModal} className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors text-sm">
                    Cerrar
                  </button>
                </div>
              </motion.div>
            </div>
          ),
          document.body
        )}
    </>
  );
}
