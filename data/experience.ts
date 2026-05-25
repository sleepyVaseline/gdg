export interface Experience {
  id: string;
  company: string;
  role: string;
  dateRange: string;
  bullets: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "hackathon-1",
    company: "Bengaluru Inter-College Hackathon",
    role: "Team Lead · Builder",
    dateRange: "2025",
    bullets: [
      "Shipped a working prototype in under 36 hours with a small cross-functional team.",
      "Handled ideation, rough system design, and last-mile integration when timelines got tight.",
      "Picked up unfamiliar tools on the fly and kept the demo path stable for judging.",
    ],
  },
  {
    id: "hackathon-2",
    company: "Campus Tech Fest — Bengaluru",
    role: "Participant · Hack Track",
    dateRange: "2024",
    bullets: [
      "Contributed to a full-stack build focused on a real-world problem statement.",
      "Split ownership across frontend flow, basic API wiring, and presentation narrative.",
      "Learned to scope ruthlessly — what to build, what to fake, and what to skip before demo day.",
    ],
  },
  {
    id: "hackathon-3",
    company: "24-Hour College Hackathon",
    role: "Developer",
    dateRange: "2024",
    bullets: [
      "Stayed in the loop from pitch to prototype — classic Bengaluru overnight build energy.",
      "Helped debug integration issues and polish the user-facing flow before judging.",
      "Came away with a better sense of how fast teams move when the deadline is real.",
    ],
  },
  {
    id: "literary-society",
    company: "College Literary Society · Bengaluru",
    role: "Core Committee · Events & Coordination",
    dateRange: "2023 — Present",
    current: true,
    bullets: [
      "Helped plan and run literary events — readings, competitions, and guest sessions on campus.",
      "Coordinated with faculty, volunteers, and venues across the city when events spilled off-campus.",
      "Handled outreach, reminders, and on-the-day logistics when plans shifted last minute.",
      "Kept communication clear across WhatsApp groups, notice boards, and informal follow-ups.",
    ],
  },
  {
    id: "literary-editorial",
    company: "Literary Society — Editorial Wing",
    role: "Content & Publications",
    dateRange: "2023 — 2024",
    bullets: [
      "Supported newsletter and anthology-style outputs — collecting pieces, light edits, layout handoff.",
      "Worked with writers across English and bilingual submissions; made contributing feel approachable.",
      "Balanced deadlines with quality enough to put something worth sharing in front of an audience.",
    ],
  },
];
