import type { ImageMetadata } from "astro";
import type { icons } from "@lucide/astro";

export interface Header {
  logoTitle: string;
}

export interface Footer {
  content: string;
}

interface IconLink {
  icon: keyof typeof icons;
  href: string;
}

export interface About {
  headLine: string;
  tagLine: string;
  profilePic: ImageMetadata;
  description: string;
  links: IconLink[];
  youtubeEmbedUrl: string;
}
export interface Evidencia {
  title: string;
  description: string;
  href?: string;
}