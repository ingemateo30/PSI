import {
  Trophy,
  Baby,
  Clapperboard,
  Newspaper,
  Compass,
  Landmark,
} from "lucide-react";

export const sedes = [
  {
    id: "campoalagre",
    ciudad: "Campoalagre",
    direccion: "Calle 23 No. 8-64",
    whatsapp: "573165602425",
    whatsappDisplay: "316 560 2425",
    tvPrice: "$28.000",
    plans: [
      { megas: "200", price: "$49.900" },
      { megas: "300", price: "$59.900" },
      { megas: "400", price: "$69.900" },
      { megas: "500", price: "$79.900" },
    ],
  },
  {
    id: "sangil",
    ciudad: "San Gil",
    direccion: "Carrera 9 # 9-94",
    whatsapp: "573184550936",
    whatsappDisplay: "318 455 0936",
    horario: "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM - 12:00 PM",
    tvPrice: "$46.900",
    plans: [
      { megas: "50", price: "$59.900" },
      { megas: "100", price: "$69.900" },
      { megas: "500", price: "$79.900" },
      { megas: "Super Giga", price: "$89.900" },
    ],
  },
  {
    id: "socorro",
    ciudad: "Socorro",
    direccion: "Carrera 14 # 13-41, Felipe Plaza local 101",
    whatsapp: "573188237392",
    whatsappDisplay: "318 823 7392",
    horario: "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM - 12:00 PM",
    tvPrice: "$46.900",
    plans: [
      { megas: "50", price: "$59.900" },
      { megas: "100", price: "$69.900" },
      { megas: "500", price: "$79.900" },
      { megas: "Super Giga", price: "$89.900" },
    ],
  },
  {
    id: "piedecuesta",
    ciudad: "Piedecuesta",
    direccion: "Carrera 7 # 4-63",
    whatsapp: "573187305239",
    whatsappDisplay: "318 730 5239",
    horario: "Lunes a Viernes: 8:00 AM - 6:00 PM / Sábados: 8:00 AM - 12:00 PM",
    tvPrice: "$46.900",
    plans: [
      { megas: "50", price: "$59.900" },
      { megas: "100", price: "$69.900" },
      { megas: "500", price: "$79.900" },
      { megas: "Super Giga", price: "$89.900" },
    ],
  },
];

export const sedeCampoalegre = sedes.filter((s) => s.id === "campoalagre");
export const sedesSantander = sedes.filter((s) =>
  ["sangil", "socorro", "piedecuesta"].includes(s.id)
);

export const canalesDestacados = [
  {
    categoria: "Deportes",
    icon: Trophy,
    canales: ["ESPN", "ESPN 2", "ESPN 3", "ESPN 4", "ESPN 5", "ESPN 6", "ESPN 7", "Turbo"],
  },
  {
    categoria: "Infantiles",
    icon: Baby,
    canales: ["Disney Channel", "Disney Junior", "Discovery Kids", "Cartoon Network"],
  },
  {
    categoria: "Entretenimiento y películas",
    icon: Clapperboard,
    canales: ["TNT", "FX", "Space", "Universal Channel", "Cinecanal", "Studio Universal"],
  },
  {
    categoria: "Nacionales",
    icon: Compass,
    canales: ["Caracol", "Canal RCN", "City TV", "Telecafé", "Canal Trece"],
  },
  {
    categoria: "Noticias",
    icon: Newspaper,
    canales: ["CNN", "Telesur"],
  },
  {
    categoria: "Cultura y documentales",
    icon: Landmark,
    canales: ["Discovery Channel", "National Geographic", "TLC", "History"],
  },
];
