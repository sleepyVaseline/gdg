export interface Project {
  id: string;
  title: string;
  description: string;
  /** One-line hook shown on the hover panel */
  summary: string;
  /** Key points — shown as bullets on hover */
  highlights: string[];
  /** e.g. Society tool, Health-tech, Learning */
  category: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "eventflow",
    title: "EventFlow",
    description:
      "Event management for Bengaluru college societies — registrations, schedules, and day-of coordination.",
    summary: "Stop losing sign-ups in WhatsApp chaos.",
    category: "Campus · Events",
    highlights: [
      "Create events, cap registrations, and assign volunteers in one place",
      "Built for literary society readings, fests, and off-campus venues in Bengaluru",
      "Reminder flow so organisers aren't chasing people the night before",
    ],
    tags: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
    image: "/projects/eventflow.svg",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "medivault",
    title: "MediVault",
    description:
      "Scan Indian medical reports and prescriptions — OCR plus AI summaries in plain English.",
    summary: "Lab reports you can actually understand.",
    category: "Health-tech · AI",
    highlights: [
      "Upload photos of prescriptions and discharge summaries from local clinics",
      "OCR extracts text; an LLM summarises results in plain language",
      "Privacy-first design with clear disclaimers — not a replacement for a doctor",
    ],
    tags: ["Python", "OpenAI", "OCR", "React", "FastAPI"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "vision-lab",
    title: "Vision Lab",
    description:
      "Beginner computer vision project — real-time object detection with a webcam feed.",
    summary: "My first steps into seeing through code.",
    category: "Computer vision · Learning",
    highlights: [
      "Live webcam feed with bounding boxes from a pre-trained detection model",
      "Tweak confidence thresholds and see what breaks — on purpose",
      "Started between hackathons in Bengaluru as a low-stakes learning build",
    ],
    tags: ["Python", "OpenCV", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
