# The "Will It Snow?" Hype Meter - PRD

## 1. Executive Summary
A high-energy, visually striking dashboard that tells students/teachers exactly how hyped they should be for a snow day. It replaces boring weather forecasts with a single number: The Hype Score (0-100).

## 2. Team Roles & Assignments (4 Contributors)
To effectively balance 3 experienced devs and 1 junior dev:

### Contributor 1: The Core Architect (Experienced)
**Responsibility:** Application State, API Integration, Architecture.
**Tasks:**
- Setup Vite/React project & Directory structure.
- Create HypeContext or store for global state.
- Implement hypeEngine.js (The logic that takes weather data → Score).

### Contributor 2: The Vibe Specialist (Experienced)
**Responsibility:** Visuals, Animations, Tailwind Configuration.
**Tasks:**
- Implement "Glitch" text effects.
- Create the Snowflake Particle System.
- Design the "Hype Meter" gauge/progress bar.

### Contributor 3: The AI Engineer (Experienced)
**Responsibility:** LLM Integration, Prompt Engineering.
**Tasks:**
- Design the prompt: "Take this boring forecast and make it sound like an ESPN announcer."
- Mock API responses for development.
- Handle loading states & error boundaries for AI calls.

### Contributor 4: The Polish & QA (Junior/New)
**Responsibility:** UI Components, Copy, Testing.
**Tasks:**
- Build static components: Header, Footer, InfoCard.
- Learning Opportunity: Update the "School Closing Probability" hardcoded data.
- Learning Opportunity: style the "Share Button" (hover states, click events).
- Run manual tests (Is it mobile friendly?).

## 3. Core Features (MVP)
- **The Hype Gauge:** A large, animated number (0-100%) indicating snow probability.
- **The Verdict:** AI-generated text summary (e.g., "ABSOLUTE CHAOS INCOMING" or "Just rain, go to bed").
- **Visual Noise:** CRT screen effects, scanlines, falling heavy snow.

## 4. Technical Stack
- **Frontend:** React + Vite
- **Styling:** Tailwind CSS (Crucial: Use standard utility classes to avoid build errors).
- **Motion:** Framer Motion (for the meter animation).
