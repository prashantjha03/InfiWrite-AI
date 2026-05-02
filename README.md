🚀 InfiWrite-AI

✍️ AI-powered content generation — fast, scalable, and intelligent.

🧠 Overview

InfiWrite-AI is a modern AI content generation platform built using Next.js and powered by the Google Gemini API.
It enables users to generate high-quality content for blogs, social media, marketing, and code in real time.

✨ Features
🧠 Generate AI-powered content instantly
✍️ Supports blogs, captions, marketing copy, and code
⚡ Fast performance using Next.js App Router
🎯 Custom prompts for flexible generation
📱 Fully responsive UI
🔐 Secure API handling with environment variables

🛠️ Tech Stack
Frontend: Next.js, React, Tailwind CSS
Backend: Next.js API Routes / Server Actions
AI Integration: Google Gemini

📂 Project Structure
InfiWrite-AI/
│── app/                # App Router pages
│── components/         # Reusable UI components
│── lib/                # API + utility logic
│── public/             # Static assets
│── styles/             # Global styles
│── .env.local          # Environment variables

🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/InfiWrite-AI.git
cd InfiWrite-AI

3. Install dependencies
# npm install
 or
# yarn install
 or
# pnpm install
 or
# bun install

3. Configure Environment Variables

Create a .env.local file in the root directory:

GEMINI_API_KEY=your_api_key_here

4. Run the development server
npm run dev

Open 👉 http://localhost:3000

⚙️ How It Works
User enters a prompt
Frontend sends request to backend
Backend calls Gemini API
AI processes and generates content
Response is displayed in UI


🔐 Environment Variables
Variable	Description
GEMINI_API_KEY	API key for Gemini AI

📚 Learn More
Next.js Docs: https://nextjs.org/docs
Google Gemini Docs: https://ai.google.dev



💡 Future Improvements
🔐 Authentication system (JWT / OAuth)
📂 Content history & saving
🎨 Multiple AI templates
📄 Export to PDF / DOCX
💳 SaaS billing integration
