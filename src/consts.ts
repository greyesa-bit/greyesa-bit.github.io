
// Coloca aquí los datos globales del sitio.
// Se pueden importar desde cualquier parte usando `import`.
import type { Header, Footer, About, Evidencia } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

export const SITE_URL: string = "https://greyesa-bit.github.io";

export const ENABLE_STARDUST_BG: boolean = false;

export const meta = {
  about: {
    // página principal
    title: "Gabriel Reyes Ariza",
    description: "Mi primer portafolio usando GitHub Pages y Astro",
  },
  evidencias: {
    title: "Evidencias | Gabriel Reyes Ariza",
    description:
      "Evidencias del curso de Bases de Datos 1: Modelado, Normalización, SQL y Proyecto.",
  },
};

export const header: Header = { logoTitle: "Gabo | Portafolio" };

export const footer: Footer = {
  content: "© " + new Date().getFullYear() + " Gabriel Reyes Ariza",
};

export const about: About = {
  // se interpreta como html
  headLine: "Soy <span class='fancy-highlight font-black'>Gabriel Reyes Ariza</span>",
  tagLine: "Estudiante de Ingeniería de Sistemas — Universidad El Bosque",
  profilePic: ProfilePic,
  description:
    "Estudio Ingeniería de Sistemas en la Universidad El Bosque. Mis hobbies son los videojuegos, escuchar música y el fútbol. Mi meta es graduarme y especializarme en Inteligencia Artificial o en Ciberseguridad, y sobre todo trabajar en lo que me gusta.",
  links: [
    // iconos de Lucide
    { icon: "Github", href: "https://github.com/greyesa-bit/" },
    { icon: "Mail", href: "mailto:greyesa@unbosque.edu.co" },
  ],
  // link de YouTube en formato embed (https://youtu.be/XXXX -> https://www.youtube.com/embed/XXXX)
  youtubeEmbedUrl: "https://www.youtube.com/embed/Hm-rrE_UWTM",
};

export const evidencias: Evidencia[] = [
  {
    title: "Modelado",
    description:
      "Diagramas entidad-relación y modelo conceptual/lógico de la base de datos.",
  },
  {
    title: "Normalización",
    description: "Proceso de normalización aplicado al modelo de datos (1FN, 2FN, 3FN).",
  },
  {
    title: "SQL",
    description: "Scripts de creación, consultas y manipulación de datos en SQL.",
  },
  {
    title: "Proyecto",
    description: "Entregas y avances del proyecto final del curso.",
  },
];