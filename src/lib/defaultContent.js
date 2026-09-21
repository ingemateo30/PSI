// Contenido por defecto del sitio. Es lo que se muestra mientras nadie haya guardado cambios
// desde el módulo de administración (/admin); una vez guardado, manda lo guardado (ver contentStore.js).
// Debe ser JSON puro (sin funciones ni componentes) porque viaja del servidor al navegador.

const HORARIO_SANTANDER = "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM - 12:00 PM";

const beneficios = (dispositivos) => [
  ...(dispositivos ? [dispositivos] : []),
  "Wifi 5G",
  "87 canales digitales",
  "7 canales radio",
];

export const defaultContent = {
  // Planes y precios. Un grupo = una lista de precios compartida por varias sedes.
  grupos: {
    santander: {
      nombre: "San Gil, Socorro y Piedecuesta",
      tvPrice: 46900,
      plans: [
        { megas: "50", price: 59900, destacado: false, beneficios: beneficios("Ideal para 2 dispositivos"), descarga: "50", subida: "50" },
        { megas: "100", price: 69900, destacado: false, beneficios: beneficios("Ideal para 3 dispositivos"), descarga: "100", subida: "100" },
        { megas: "500", price: 79900, destacado: false, beneficios: beneficios("Ideal para +5 dispositivos"), descarga: "", subida: "" },
        { megas: "Super Giga", price: 89900, destacado: true, beneficios: beneficios("Ideal para +5 dispositivos"), descarga: "", subida: "" },
      ],
    },
    campoalegre: {
      nombre: "Campoalegre",
      tvPrice: 28000,
      plans: [
        { megas: "200", price: 49900, destacado: false, beneficios: beneficios(), descarga: "", subida: "" },
        { megas: "300", price: 59900, destacado: false, beneficios: beneficios(), descarga: "", subida: "" },
        { megas: "400", price: 69900, destacado: false, beneficios: beneficios(), descarga: "", subida: "" },
        { megas: "500", price: 79900, destacado: true, beneficios: beneficios(), descarga: "", subida: "" },
      ],
    },
  },

  // Adicional que se cobra a las empresas sobre el precio del plan (0 = no se muestra).
  recargoEmpresa: 10000,

  // `principal`: aparece en el sitio principal (menú, botones de contratar, mapa, contacto).
  // Las demás sedes solo se ven en su propia página (/sedes/<id>).
  sedes: [
    {
      id: "sangil",
      ciudad: "San Gil",
      grupo: "santander",
      direccion: "Carrera 9 # 9-94",
      whatsapp: "573184550936",
      horario: HORARIO_SANTANDER,
      principal: true,
      descripcion: "Conectividad premium en San Gil.",
      imagen: "/sangil.jpeg",
      lat: 6.5536,
      lng: -73.1308,
    },
    {
      id: "socorro",
      ciudad: "Socorro",
      grupo: "santander",
      direccion: "Carrera 14 # 13-41, Felipe Plaza local 101",
      whatsapp: "573188237392",
      horario: HORARIO_SANTANDER,
      principal: true,
      descripcion: "Conectividad de última generación en Socorro.",
      imagen: "/Socorro.jpeg",
      lat: 6.4668,
      lng: -73.262,
    },
    {
      id: "piedecuesta",
      ciudad: "Piedecuesta",
      grupo: "santander",
      direccion: "Carrera 7 # 4-63",
      whatsapp: "573187305239",
      horario: HORARIO_SANTANDER,
      principal: true,
      descripcion: "Infraestructura de fibra óptica en Piedecuesta.",
      imagen: "/psi.jpeg",
      lat: 6.9895,
      lng: -73.0516,
    },
    {
      id: "campoalegre",
      ciudad: "Campoalegre",
      grupo: "campoalegre",
      direccion: "Calle 23 No. 8-64",
      whatsapp: "573165602425",
      horario: "",
      principal: false,
      descripcion: "Fibra óptica y televisión en Campoalegre.",
      imagen: "/logo.png",
      lat: null,
      lng: null,
    },
  ],

  inicio: {
    heroTitulo: "¡Velocidad y entretenimiento",
    heroResaltado: "al mejor precio!",
    heroTexto:
      "Disfruta fibra óptica de alta velocidad y TV premium sin costos ocultos. ¡Contrata hoy y aprovecha esta oferta exclusiva!",
    ofertaTitulo: "PACK FIBRA + TV PREMIUM",
    ofertaIncluye: [
      "Internet con fibra óptica ultraveloz",
      "87 canales digitales incluidos",
      "7 canales de radio",
    ],
  },
};
