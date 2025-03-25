"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function CoberturaSection() {
    const sedes = [
        {
            ciudad: "San Gil",
            descripcion: "Conectividad premium en San Gil.",
            imagen: "/sangil.jpeg", 
            alt: "Sede de San Gil",
        },
        {
            ciudad: "Socorro",
            descripcion: "Conectividad de última generación en Socorro.",
            imagen: "/socorro.jpeg", 
            alt: "Sede de Socorro",
        },
        {
            ciudad: "Piedecuesta",
            descripcion: "Infraestructura de fibra óptica en Piedecuesta.",
            imagen: "/piedecuesta.jpeg",
            alt: "Sede de Bucaramanga",
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-r from-[#0e6493] to-[#073a57] py-20 text-white overflow-hidden"
        >
            <div className="relative container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold mb-6"
                >
                    ¡Cobertura de PSI Fibra/TV!
                </motion.h2>
                <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto opacity-90">
                    Conéctate a la mejor red de fibra óptica en las siguientes ciudades:
                </p>

                <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
                    {sedes.map((sede, index) => (
                        <motion.div
                            key={sede.ciudad}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-white/10 p-6 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-xs"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 bg-white/20 rounded-full mb-4">
                                    <MapPin size={28} />
                                </div>
                            </div>

                            <div className="w-full h-48 mb-4 overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={sede.imagen}
                                    alt={sede.alt}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-center">{sede.ciudad}</h3>
                            <p className="text-gray-100 text-center">{sede.descripcion}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}
