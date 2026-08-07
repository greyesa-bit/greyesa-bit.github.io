// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import FlashifyImage from "./assets/projects/flashify.png";
import WeatherifyImage from "./assets/projects/weatherify.png";
import BriefImage from "./assets/projects/brief.svg";
import DefuseImage from "./assets/projects/defuse.svg";
import LipiImage from "./assets/projects/lipi.svg";
import ExchangeImage from "./assets/projects/exchange.svg";
import PlaceholderImage from "./assets/projects/placeholder.svg";

export const SITE_URL: string = "https://greyesa-bit.github.io";

export const ENABLE_STARDUST_BG: boolean = false;

export const meta = {
  about: {
    // index page
    title: "Gabriel Reyes Ariza",
    description:
      "Mi primer portafolio usando github pages y astro",
  },
  projects: {
    title: "Projects | Shone Binu",
    description:
      "Here are some of my projects — things I’ve built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Shone Binu",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I’m learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "Mi portafolio" };

export const about: About = {
  // parses html
  headLine:
    "Soy <span class='fancy-highlight font-black'>Gabriel Reyes Ariza</span>",
  tagLine: "Estudiante de ingenieria de sistemas",
  profilePic: ProfilePic,
  // parses html
  description:
    "Sobre mi, Estudio en la universidad el bosque ingenieria de sistemas, mis hobbies son los videojuegos, escuchar musica y el futbol, entre mis intereses esta poderme graduar y especializarme en IA o en ciberseguridad y sobre todo trabajar en lo que me gusta, lo cual es esto",
  links: [
    // Lucide icons
    { icon: "Github", href: "https://github.com/greyesa-bit/" }
  ],
  Presentación: [
    {
      title: "Video en el que cuento un poco acerca de mi",
      description:
        "Enlace del video en youtube: https://youtu.be/Hm-rrE_UWTM",
    },
  ],
  // parses html
  Ponte en contaco:
    "Mandame un email a <a class='primary-underline'>greyesa@unbosque.edu.co</a> or connect with me on one of my socials.",
};

export const projects: Project[] = [
  {
    logoImage: BriefImage,
    title: "Brief",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Brief lets you browse community-maintained command line help pages. It uses tldr-pages as the data source.",
    sourceHref: "https://github.com/shonebinu/Brief",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Brief",
  },
  {
    logoImage: LipiImage,
    title: "Lipi",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Lipi is for installing and managing fonts from Google Fonts repo contaning thousands of fonts.",
    sourceHref: "https://github.com/shonebinu/Lipi",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Glyph",
  },
  {
    logoImage: DefuseImage,
    title: "Defuse",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Defuse lets you remove image backgrounds locally. Processing is performed using the ISNet-general model through ONNX Runtime.",
    sourceHref: "https://github.com/shonebinu/Defuse",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Defuse",
  },
  {
    logoImage: ExchangeImage,
    title: "Exchange",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Exchange does conversion between the XML and Blueprint GTK UI definition formats. It uses blueprint-compiler under the hood.",
    sourceHref: "https://github.com/shonebinu/Exchange",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Exchange",
  },
  {
    logoImage: PlaceholderImage,
    title: "Zed React Snippets",
    techs: ["Javascript"],
    description:
      "Zed extension with converted React/Redux/React-Native snippets from the popular 'ES7+ React/Redux/React-Native snippets' VSCode extension. ",
    sourceHref: "https://github.com/shonebinu/zed-react-snippets",
    liveHref: "https://zed.dev/extensions/react-snippets-es7",
  },
  {
    logoImage: PenweaveImage,
    title: "Penweave",
    techs: ["React", "Supabase", "daisyUI"],
    description:
      "Penweave is a CodePen‑like tool that lets users run their HTML/CSS/JS in a browser environment with secure preview and sharing.",
    sourceHref: "https://github.com/shonebinu/penweave/",
    liveHref: "https://penweave.pages.dev",
  },
  {
    logoImage: MGUScraperImage,
    title: "MGU Scraper",
    techs: ["Python", "Streamlit", "Beautiful Soup"],
    description:
      "MGU Scraper is a tool designed to simplify the extraction and analysis of bulk student exam results from MGU Kottayam University.",
    sourceHref: "https://github.com/shonebinu/MGUScraper",
    liveHref: "https://mguscraper.streamlit.app/",
  },
  {
    logoImage: FlashifyImage,
    title: "Flashify",
    techs: ["PHP", "MySQL", "LAMP"],
    description:
      "Flashify is a minimal, beautiful, and responsive web-based flashcard application built using the LAMP stack.",
    sourceHref: "https://github.com/shonebinu/flashify",
    liveHref: "https://flashify.shonebinu.com/",
  },
  {
    logoImage: WeatherifyImage,
    title: "Weatherify",
    techs: ["Javascript", "Webpack"],
    description:
      "Weather app featuring glassmorphism design, powered by weatherapi.com.",
    sourceHref: "https://github.com/shonebinu/weatherify",
    liveHref: "https://shonebinu.github.io/weatherify/",
  },
];

// add blog articles in /src/content/blog
