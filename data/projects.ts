export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
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
    longDescription:
      "Built for literary society and campus events in the city: create events, track sign-ups, assign volunteers, and send reminders. Keeps organisers out of endless WhatsApp threads and last-minute spreadsheet chaos.",
    tags: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
    image: "https://images.unsplash.com/photo-1540575467061-178a50c2df87?w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "medivault",
    title: "MediVault",
    description:
      "Scan Indian medical reports and prescriptions — OCR plus AI summaries in plain English.",
    longDescription:
      "Upload lab reports and discharge summaries from local clinics and hospitals, extract text via OCR, then summarise findings in readable language. Built with privacy in mind and clear disclaimers that it is not a substitute for professional medical advice.",
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
    longDescription:
      "A first dive into OpenCV and pre-trained models: capture video, draw bounding boxes on detected objects, and tune confidence thresholds. Started as a learning project between hackathons in Bengaluru.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
