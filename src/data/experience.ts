export type Experience = {
  period: string;
  company: string;
  role: string;
  description: string;
  highlights: readonly string[];
};

export const experience: readonly Experience[] = [
  {
    period: "2020 — Present",
    company: "Rayan Bourse",
    role: "Senior Frontend Engineer",
    description:
      "Building financial-data applications and complex enterprise interfaces used for working with structured financial information.",
    highlights: [
      "Designed and evolved frontend architecture for complex data-driven applications.",
      "Built dynamic financial interfaces and reusable UI systems.",
      "Worked extensively with Angular, TypeScript and large structured datasets.",
      "Focused on rendering performance, maintainability and reliability.",
    ],
  },
  {
    period: "Previous",
    company: "Codal / Visual Statement Studio",
    role: "Frontend Engineer",
    description:
      "Worked on a metadata-driven financial form platform capable of generating complex forms and tables from structured definitions.",
    highlights: [
      "Developed dynamic form and table generation workflows.",
      "Worked across frontend and backend boundaries with Angular and C#.",
      "Improved complex data-entry workflows and user interactions.",
      "Worked with Excel-driven metadata and financial statement structures.",
    ],
  },
  {
    period: "Open Source",
    company: "React Insight",
    role: "Creator / Maintainer",
    description:
      "An open-source TypeScript-first toolkit for inspecting and debugging React applications at runtime.",
    highlights: [
      "Designed a plugin-based runtime architecture.",
      "Built the core package with TypeScript and automated testing.",
      "Implemented component discovery and runtime synchronization.",
      "Established CI, type safety and high test-coverage standards.",
    ],
  },
];