import {
  Trophy,
  Baby,
  Clapperboard,
  Newspaper,
  Compass,
  Landmark,
} from "lucide-react";

// Las sedes y los planes viven en el contenido editable (defaultContent.js / módulo /admin).

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
