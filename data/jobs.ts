import { Tabs } from "@/components/Tabs";

export const jobs: Tabs[] = [
  {
    placeOfWork: "iO Nordics",
    position: "Senior Frontend Developer",
    period: "2021 – Present (Junior 2021 → Senior 2024)",
    description:
      "Leading European digital agency (formerly Stendahls). Senior frontend delivery across Next.js, React Native, and large-scale enterprise UIs—collaborating in distributed teams, mentoring juniors, and sharing knowledge internally.",
    responsibilities: [
      {
        title: "Web & mobile delivery",
        description:
          "Owned and shipped large Next.js surfaces (multi-language, high-volume listings, strong performance, Cypress coverage) and led React Native products end-to-end with Expo, Azure DevOps, and store releases.",
      },
      {
        title: "Enterprise & platforms",
        description:
          "Built component libraries, compliance-heavy portals, and real-time Node.js services. Did the design system and integration work for long-running client programs.",
      },
      {
        title: "Collaboration & leadership",
        description:
          "Worked in distributed teams across Europe and beyond (Git, Scrum, Azure DevOps, async communication). Closely worked with clients, POs, UX, and backend. Mentored junior talents and ran company-wide knowledge sharing sessions.",
      },
    ],
    href: "https://www.ionordics.com",
  },
  {
    placeOfWork: "Self-employed",
    position: "Freelance audio engineer / editor",
    period: "2020 – 2021",
    description:
      "Self-employed audio engineering and editing while shifting focus to software development and completing a full-stack development bootcamp.",
    responsibilities: [
      {
        title: "Client production work",
        description:
          "Delivered engineering and editing services for varied productions, balancing quality and deadlines in a solo practice.",
      },
      {
        title: "Career transition",
        description:
          "Used the period to build foundations for a move into professional software development.",
      },
    ],
  },
  {
    placeOfWork: "Russian Academy of Science",
    position: "Researcher",
    period: "2013 – 2020 (Engineer Researcher 2013 → Researcher 2016)",
    description:
      "Research on electrical properties of semimetals and semiconductors near absolute zero, building analytical and problem-solving depth for complex technical work.",
    responsibilities: [
      {
        title: "Experimental research",
        description:
          "Ran experiments, wrote papers, and made conference talks in low-temperature condensed matter physics.",
      },
    ],
    href: "https://www.ras.ru",
  },
];
