import { Project } from "@/lib";

export const projects: Project[] = [
  {
    kind: "website",
    image: "/volvo-used-equipment.jpeg",
    name: "Volvo Used Equipment",
    tech: [
      "Next.js 16",
      "TypeScript",
      "REST",
      "Tailwind CSS",
      "SWR",
      "Claude Code",
    ],
    description:
      "A global marketplace for pre-owned Volvo construction equipment, built from the ground up. It is server rendered, and was designed with SEO as a first-class concern. I was the sole frontend developer, working closely with the client and backend team. The launch went smoothly, with zero reported issues. \n\n We leaned heavily on agentic development: from ticket management, to pull requests. While helping a lot, it performed well only because of my constant oversight, well managed skill sets and thorough planning of the entire project.",
    href: "https://used.volvoce.com/en",
  },
  {
    kind: "app",
    image: "/thomas-concrete.png",
    name: "Thomas Concrete MyConcrete",
    tech: ["React Native", "Expo", "Tanstack Query", "Zod"],
    description:
      "I led the React Native work on MyConcrete: standing up the Expo toolchain, an OTA update workflow, and the path to publishing on the App Stores. I partnered with the existing REST backend and the design team to tune flows and UI for people on-site with phones in hand.\n\nThe client’s priorities were frictionless cross-platform delivery, integration with services they already ran, and fast, dependable releases. We beat those expectations—quickly shipping a sharp, snappy app that delivers clear business value. My scope ran from feature planning and expectation-setting with the client to ongoing coordination with backend and design, plus hands-on UI implementation.",
    href: "https://thomasconcretegroup.com/our-offer/digital-services/myconcrete/",
  },
  {
    kind: "website",
    image: "/new-tonality.jpeg",
    name: "New Tonality",
    tech: [
      "SvelteKit",
      "Next.js 16",
      "TypeScript",
      "XState",
      "Tailwind CSS",
      "Web Audio API",
      "InstantDB",
      "Clerk",
    ],
    description:
      "New Tonality is a long-running side project where I research and build tools for microtonal musicians. I also use interactive web apps to teach and widen interest in the field.\n\nThose apps demand deep, unconventional interfaces—browser-based synthesizers, graphical data modules, survey-style flows. I run the backend on InstantDB with Clerk for auth, and use the Web Audio API where sound is the medium. Psychoacoustic experiments lean on XState so complex interaction state stays understandable as the UI grows.",
    href: "https://newtonality.net/",
    links: [
      {
        label: "See on GitHub",
        href: "https://github.com/new-tonality-project",
      },
    ],
  },
];
