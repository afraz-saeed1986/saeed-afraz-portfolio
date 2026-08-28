
export type Project = {
  title: string;
  description: string;
  technologies: readonly string[];
  href?: string;
  category: string;
  year: string;
};

export const projects: readonly Project[] = [
  {
    title: "React Insight",
    description:
      "An open-source TypeScript-first toolkit for inspecting, debugging and understanding React applications at runtime.",
    technologies: ["React", "TypeScript", "Vite"],
    category: "Open Source",
    year: "2026",
    href: "https://github.com/",
  },
    {
    title: "Next-Organie",
    description:
      "A modern organic e-commerce application built with Next.js, focused on a clean product experience and scalable frontend architecture.",
    technologies: ["Next.js", "React", "TypeScript"],
    category: "E-commerce",
    year: "2026",
    href: "https://github.com/afraz-saeed1986/Next-Organie",
  },
  {
    title: "Visual Statement Studio",
    description:
      "A metadata-driven financial form platform for generating complex data-entry interfaces from structured financial definitions.",
    technologies: ["Angular", "TypeScript", "C#", "Excel"],
    category: "Fintech",
    year: "2025",
    href: undefined,
  },
  {
    title: "EcoVault",
    description:
      "A modern commerce platform built with Next.js and Supabase, focused on scalable frontend architecture and a clean product experience.",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    category: "Product",
    year: "2024",
    href: undefined,
  },

];

