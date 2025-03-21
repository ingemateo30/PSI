"use client";
import { useState, useEffect, useRef } from "react";
import { X, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function BotonContratacion() {
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef(null);

    // Controlar el comportamiento del modal y asegurar que esté por encima de todo
    useEffect(() => {
        if (showModal) {
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
      }, [showModal]);

    // Asegurar que el modal se ajusta correctamente en pantallas pequeñas
    useEffect(() => {
        const handleResize = () => {
            if (modalRef.current && window.innerWidth < 768) {
                modalRef.current.style.height = 'auto';
                modalRef.current.style.maxHeight = '90vh';
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sedes = [
        { id: 1, nombre: "San Gil", direccion: "Carrera 9 # 9-94", telefono: "573184550936", mensaje: "Hola, quiero más información sobre su servicio en San Gil" },
        { id: 2, nombre: "Socorro", direccion: "Carrera 14 # 10-45", telefono: "573188237392", mensaje: "Hola, quiero más información sobre su servicio en Socorro" },
        { id: 4, nombre: "Piedecuesta", direccion: "Carrera 7 # 4-63", telefono: "573187305239", mensaje: "Hola, quiero más información sobre su servicio en Piedecuesta" },
    ];

    const abrirWhatsApp = (telefono, mensaje) => {
        const mensajeCodificado = encodeURIComponent(mensaje);
        window.open(
            `https://wa.me/${telefono}?text=${mensajeCodificado}`,
            "_blank",
            "noopener,noreferrer"
        );
        setShowModal(false);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <a
                onClick={() => setShowModal(true)}
                className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#e31e25] to-[#ff3c42] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg flex items-center space-x-2 relative overflow-hidden group font-branding-sf"
            >
                <FaWhatsapp className="w-5 h-5 animate-pulse" />
                <span>Cotizar ahora</span>
                <div className="absolute inset-0 bg-white opacity-20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </a>

            {showModal && (
                <div
                    ref={modalRef}
                    className="fixed inset-0 z-[100000] flex items-center justify-center p-4 backdrop-blur-sm bg-white/30"
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg w-full max-w-md overflow-y-auto relative shadow-2xl mx-auto my-auto"
                        style={{ maxHeight: 'calc(100vh - 40px)' }}
                    >
                        <div className="bg-[#0e6493] p-5 rounded-t-lg sticky top-0 z-10">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-red-300"
                            >
                                <X size={28} />
                            </button>
                            <h3 className="text-xl font-bold text-white pr-8">
                                Selecciona una sede
                            </h3>
                        </div>

                        <div className="p-4 sm:p-6">
                            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                                Selecciona la sede más cercana para recibir información personalizada:
                            </p>

                            <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                {sedes.map((sede) => (
                                    <button
                                        key={sede.id}
                                        onClick={() => abrirWhatsApp(sede.telefono, sede.mensaje)}
                                        className="flex items-start p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-[#0e6493] transition-colors text-left group shadow-md"
                                    >
                                        <div className="bg-[#0e6493] rounded-full p-2 mr-2 sm:mr-3 text-white group-hover:bg-[#0e7ab3] transition-colors flex-shrink-0">
                                            <MapPin size={18} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h4 className="font-bold text-[#0e6493] text-sm sm:text-base truncate">{sede.nombre}</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm truncate">{sede.direccion}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-4 sm:mt-6 flex justify-center">
                                <button
                                    onClick={closeModal}
                                    className="px-4 sm:px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );
}