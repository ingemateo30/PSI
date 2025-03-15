"use client";

const features = [
  {
    title: "Máxima velocidad",
    description: "Navega a velocidades de hasta 1 Gbps simétricos con nuestra tecnología de fibra óptica avanzada.",
    highlight: "HASTA 1 GBPS",
  },
  {
    title: "Televisión en HD",
    description: "Más de 100 canales en alta definición y contenido exclusivo para toda la familia.",
    highlight: "+100 CANALES HD",
  },
  {
    title: "Mejor precio",
    description: "Planes competitivos que se ajustan a tus necesidades y presupuesto sin costes ocultos.",
    highlight: "PRECIOS ACCESIBLES",
  },
];

export default function WhyChooseUs() {
  return (
    <div className="relative py-1 bg-gradient-to-b from-white to-blue-50">
      {/* Fondo sutil */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-b from-white to-blue-50 w-full h-full opacity-80"></div>
      </div>
      <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[url('/3.svg')] before:bg-cover before:bg-center before:opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0e6493] leading-tight">
            ¿Por qué elegir <span className="relative inline-block">
              PSI
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#e31e25]"></span>
            </span>?
          </h2>
          <p className="text-lg text-gray-700 mt-5 max-w-2xl mx-auto">
            Disfruta de una conexión estable, con la mejor tecnología en fibra óptica y el mejor entretenimiento.
          </p>
        </div>

        {/* Contenedor de Características */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border-l-4 border-[#0e6493] hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0e6493]">{feature.title}</h3>
                <div className="w-12 h-1 bg-[#e31e25] my-4"></div>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="text-sm font-bold text-[#0e6493]">
                  {feature.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Elemento corporativo final */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-3 border border-[#0e6493] text-[#0e6493] font-medium rounded">
            Internet de alta velocidad garantizado
          </div>
        </div>
      </div>
    </div>
  );
}