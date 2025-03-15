"use client";
import { Wifi, Tv, Smartphone, ShoppingCart, Star } from "lucide-react";

const plans = [
  {
    name: "PAQUETE FULL",
    price: "$129.900",
    includes: [
      { icon: Wifi, text: "500 Megas" },
      { icon: Smartphone, text: "Ilimitado" },
      { icon: Tv, text: "TV" },
    ],
    featured: true,
  },
  {
    name: "PAQUETE FULL TIGO",
    price: "$99.900",
    includes: [
      { icon: Wifi, text: "500 Megas" },
      { icon: Smartphone, text: "Ilimitado" },
      { text: "Max", icon: Tv },
    ],
  },
  {
    name: "PAQUETE INTERNET + TV",
    price: "$99.200",
    includes: [
      { icon: Wifi, text: "500 Megas" },
      { icon: Tv, text: "TV" },
      { text: "", icon: null },
    ],
  },
  {
    name: "PAQUETE DE INTERNET",
    price: "$71.100",
    includes: [
      { icon: Wifi, text: "500 Megas" },
      { text: "", icon: null },
      { text: "", icon: null },
    ],
  },
];

export default function PlansSection() {
  return (
    <div className="relative py-5 bg-white overflow-hidden">
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-20"></div>
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 rounded-full opacity-70"></div>
      
      {/* Título con animación */}
      <div className="relative text-center mb-16 px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-[#0e6493] tracking-tight">
          Nuestros <span className="relative inline-block">
            Planes
            <span className="block w-24 h-2 bg-[#e31e25] mx-auto mt-3 rounded-full"></span>
          </span>
        </h2>
        <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
          Disfruta de la mejor conexión de internet y entretenimiento con nuestros planes diseñados para ti.
        </p>
      </div>

      {/* Contenedor de Planes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`group relative h-full flex flex-col justify-between p-8 rounded-3xl shadow-xl text-center transform transition-all duration-500 hover:translate-y-2 ${
              plan.featured
                ? "bg-gradient-to-br from-[#0e6493] to-[#073a57] text-white"
                : "bg-white border-2 border-gray-100"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 -right-3 bg-[#e31e25] text-white text-sm font-bold p-3 rounded-full shadow-lg flex items-center justify-center">
                <Star className="h-5 w-5 fill-white" />
              </div>
            )}
            
            {/* Header */}
            <div>
              <h3 className={`text-2xl font-extrabold ${plan.featured ? "text-white" : "text-[#0e6493]"} mb-4`}>
                {plan.name}
              </h3>
              <div className={`text-5xl font-bold ${plan.featured ? "text-white" : "text-[#e31e25]"} mb-1`}>
                {plan.price}
              </div>
              <p className={`text-sm ${plan.featured ? "text-gray-200" : "text-gray-600"} mb-8`}>
                IVA Incluido
              </p>

              {/* Divider */}
              <div className={`w-16 h-1 mx-auto ${plan.featured ? "bg-white/30" : "bg-[#0e6493]/20"} rounded-full mb-6`}></div>
            </div>

            {/* Lista de beneficios */}
            <div className="flex-grow">
              <ul className={`space-y-4 mb-8 ${plan.featured ? "text-gray-100" : "text-gray-700"}`}>
                {plan.includes.map((item, i) => (
                  <li key={i} className="flex justify-center items-center space-x-3">
                    {item.icon ? (
                      <div className={`flex items-center justify-center p-2 rounded-full ${plan.featured ? "bg-white/20" : "bg-[#0e6493]/10"}`}>
                        <item.icon className={`${plan.featured ? "text-white" : "text-[#0e6493]"} h-5 w-5`} />
                      </div>
                    ) : (
                      <div className="w-9"></div>
                    )}
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botón */}
            <button
              className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                plan.featured 
                  ? "bg-white text-[#0e6493] hover:bg-gray-100" 
                  : "bg-gradient-to-r from-[#0e6493] to-[#0a4f7a] text-white hover:from-[#0a4f7a] hover:to-[#073a57]"
              }`}
            >
              <ShoppingCart className={`${plan.featured ? "text-[#0e6493]" : "text-white"} h-5 w-5`} />
              <span>Solicitar cotizacion</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
