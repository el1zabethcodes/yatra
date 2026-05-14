# Yatra — Personal Oasis for Tech Careers

**Yatra** (Sanskrit for "journey") is an AI-powered career development platform for tech students and young professionals. It helps users close the gap between where they are and where they want to be — through honest skill analysis, adaptive roadmaps, and a personal AI mentor.

Built during **BluePrint 2026 Hackathon**.

---

## What it does

- **Tentacle Grab** — import your GitHub/LinkedIn profile or paste your resume; Kavi (the AI) distills your digital footprint into a real skill map
- **Skill Radar** — visualizes your technical profile across Frontend, Backend, Logic, Design, and Soft Skills
- **Resume Analyser** — deep AI analysis of your CV: hard/soft skills, strengths, weaknesses, gaps, and quick wins
- **AI Mentor Chat** — real-time career guidance powered by Groq (llama-3.3-70b)
- **Adaptive Roadmaps** — personalised 30-day learning plans generated from your goal
- **Personal Oasis Dashboard** — your private space with account management, progress tracking, and small wins

---

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+ (backend, optional)

### 1. Clone
```bash
git clone https://github.com/el1zabethcodes/yatra.git
cd yatra
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Environment
Copy `.env.local.example` to `.env.local` and fill in your Groq API key:
```
GROQ_API_KEY=gsk_...
```

### 4. Backend (optional)
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 18, Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| AI | Groq SDK (llama-3.3-70b-versatile) |
| Auth | Client-side context + localStorage |
| Backend | FastAPI + Python 3.11 |

---

## Project Structure

```
yatra/
├── frontend/
│   ├── app/
│   │   ├── page.jsx              # Landing page
│   │   ├── login/                # Auth page
│   │   ├── dashboard/            # Personal Oasis
│   │   ├── features/
│   │   ├── pricing/
│   │   └── api/groq/             # AI API routes
│   │       ├── chat/             # Mentor chat
│   │       ├── roadmap/          # Roadmap generator
│   │       └── resume/           # Resume analyser
│   ├── components/
│   │   ├── shared/               # Header, Footer
│   │   └── dashboard/            # All dashboard tabs
│   ├── lib/
│   │   ├── AuthContext.jsx       # Auth state
│   │   └── users.js              # Test accounts
│   └── public/assets/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── docs/
│   ├── documentation.md          # Full technical docs
│   ├── test-accounts.md          # Demo credentials
│   ├── pitch.md
│   └── AGENT.md                  # Code style guide
│
└── README.md
```

---

## Test Accounts

See [`docs/test-accounts.md`](docs/test-accounts.md) for demo credentials, or click any account on the login page to auto-fill.

| Name | Email | Plan |
|---|---|---|
| Arjun Sharma | arjun.sharma@gmail.com | Explorer |
| Priya Nair | priya.nair@gmail.com | Navigator |
| Rohan Mehta | rohan.mehta@gmail.com | Captain |

---

## Team

- Yelyzaveta Pavlova
- Oleg Orel

---

## License

MIT
