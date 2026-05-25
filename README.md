# Personal Portfolio

A minimal, dark-themed developer portfolio built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- next-themes (light/dark toggle)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

1. **Personal info** — Edit `lib/constants.ts` (name, bio, email, social links).
2. **Projects** — Edit `data/projects.ts`.
3. **Experience** — Edit `data/experience.ts`.
4. **Skills** — Edit `data/skills.ts`.
5. **Colors** — Edit CSS variables in `app/globals.css` (`--accent` burnt orange, `--accent-2` olive, `--accent-3` mustard).
6. **Avatar** — Replace `public/avatar.jpg` with your photo.

## Contact Form

The API route at `app/api/contact/route.ts` logs submissions to the console. Connect [Resend](https://resend.com), EmailJS, or Nodemailer to send real emails.

## Build

```bash
npm run build
npm start
```
