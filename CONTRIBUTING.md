# Contributing to the Snow Hype Meter

Welcome to the team! This guide will help us (all 4 of us) collaborate without breaking things.

## Documentation
Before you start, please read:
- [PRD (Product Requirements)](docs/PRD.md)
- [Implementation Plan](docs/IMPLEMENTATION_PLAN.md)
- [Walkthrough](docs/WALKTHROUGH.md)

## Team Roles

| Role | Who | Responsibilities |
|------|-----|------------------|
| **Core Architect** | Contributor A | State, API, Structure |
| **Vibe Specialist**| Contributor B | Animations, CSS, Glitch Effects |
| **AI Engineer** | Contributor C | OpenAI Integration, Prompts |
| **Polish & QA** | Contributor D | Static UI, Copy, Testing |

## Getting Started

1. **Clone the repo**:
    ```bash
    git clone <repo-url>
    cd snow-hype-meter
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the dev server**:
    ```bash
    npm run dev
    ```

## Project Structure
* `src/components/core`: Functional logic (Architect)
* `src/components/visuals`: Cool effects (Vibe Specialist)
* `src/lib/ai`: AI Logic (AI Engineer)
* `src/components/layout`: Header/Footer (Polish & QA)

## Important Rules
1. **Tailwind Only**: Do not write custom CSS unless absolutely necessary (for animations).
2. **Components**: Keep components small and focused.
3. **Commits**: Use descriptive messages. `git commit -m "Added glitch effect to header"` NOT `git commit -m "updates"`.

## Testing
Before pushing, please run:
```bash
npm run build
```
If it fails, fix the errors!
