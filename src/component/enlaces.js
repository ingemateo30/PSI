"use client";
import { motion } from "framer-motion";

const partnerLogos = [
  {
    image: "/mintic2.png",
    title: "Min Tic",
    link: "https://www.mintic.gov.co/portal/inicio/"
  },
  {
    image: "/ciberpaz.png",
    title: "Ciber paz",
    link: "https://ciberpaz.gov.co/portal/"
  },
  {
    image: "/crc22.png",
    title: "CRC",
    link: "https://www.crcom.gov.co/es"
  },
  {
    image: "/e14.png",
    title: "Cai virtual",
    link: "https://caivirtual.policia.gov.co/"
  },
  {
    image: "/e15.png",
    title: "Te Protejo",
    link: "https://teprotejocolombia.org/"
  }
];

export default function PartnerLogos() {
  return (
    <div className="relative py-16 bg-gradient-to-b from-white to-blue-50">
    {/* Fondo sutil */}
    <div className="absolute inset-0">
      <div className="bg-gradient-to-b from-white to-blue-50 w-full h-full opacity-80"></div>
    </div>
    <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-20"></div>

    <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#0e6493] leading-tight">
          Enlaces de <span className="relative inline-block">
            interés
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e31e25]"></span>
          </span>
        </h2>
      </div>

      {/* Contenedor de Logos - Centered */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
      >
        {partnerLogos.map((logo, index) => (
          <motion.a 
            key={index}
            href={logo.link}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center group"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-md hover:shadow-lg border-2 border-gray-100 flex items-center justify-center transition-all duration-300">
              <img src={logo.image} alt={logo.title} className="w-full h-full object-contain p-2" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-base font-medium text-[#0e6493] group-hover:text-[#073a57] transition-colors">
                {logo.title}
              </h3>
              <div className="w-8 h-1 bg-[#e31e25] mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </div>
  );
}