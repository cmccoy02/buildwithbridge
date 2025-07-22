# context.local.md

## Overview

**Bridge** is a software-as-a-service (SaaS) platform designed to quantify, visualize, and proactively manage technical debt within software companies. The core goal is to bridge the communication gap between technical (developers, engineers) and non-technical stakeholders (product managers, executives).

## Problem

- Technical debt is an enormous and rapidly escalating problem, exacerbated by AI-driven rapid software development.
- Technical debt remains abstract, misunderstood, and poorly communicated between development teams and business stakeholders.
- Ineffective communication and visibility around technical debt leads to increased friction, inefficiencies, developer burnout, and financial loss.

## Core Solution

Bridge addresses these issues by providing a platform that:

1. **Visualizes Technical Debt:** Intuitive dashboards clearly display technical debt metrics, visualizations, and trends.
2. **Quantifies Debt Impact:** Assigns clear numeric scores and financial impact estimations to various parts of a software project or repository.
3. **Enhances Developer Productivity:** Provides insights that help project managers understand developer productivity and performance clearly, aiding in effective performance reviews and team management (akin to basketball +/- scores).

## Product Vision & Use Cases

### Primary Use Cases:
- **Technical Debt Management:** Real-time visibility into codebase health, actionable insights for proactively managing debt.
- **Project Management:** Helps managers and leaders visualize dev contributions and debt incurred by individuals or teams.
- **Performance Reviews:** Provide objective data around developer impact, enabling fair, data-driven assessments.

## Frontend MVP Requirements

### Technical Requirements:
- **Stack:** React (Next.js recommended), Tailwind CSS for UI
- **Visualization Libraries:** Recharts, Chart.js, or similar libraries for clear and appealing data visualization.

### Pages & Components

#### Dashboard Page
- **Debt Score Visualization:** Numeric technical debt score clearly displayed (0-100 scale).
- **Debt Breakdown Graphs:** Interactive graphs showing debt trends over time.
- **Heatmaps & Charts:** Heatmaps for visualizing areas of high technical debt and developer productivity.

#### Developer Performance Page
- **Individual Developer Metrics:** Clearly showing +/- scores indicating speed vs. technical debt incurred.
- **Leaderboard Table:** A sortable table ranking developers based on debt and productivity scores.
- **Trend Visualization:** Line/bar charts clearly showing individual/team contributions over time.

#### Project Overview Page
- **Repository Health Summary:** A summary view clearly showing repositories/projects and their corresponding technical debt scores.
- **Interactive Elements:** Clickable items to drill down into more detailed metrics for specific repositories or teams.

### UI/UX Expectations
- **Clean and Minimalist:** Focus on clarity, usability, and intuitiveness.
- **Fast Performance:** Ensure rapid rendering and responsiveness, using efficient state management and API interactions.
- **Accessibility and Responsiveness:** Fully responsive design for use on desktops, laptops, tablets, and phones. Accessible color schemes and typography (Gruvbox-inspired color palette, JetBrains Mono or similar mono fonts for code metrics, OCR-A for distinctive headings).

## User Flows

### MVP User Flow
1. User logs into Bridge.
2. Immediately presented with the dashboard page showing overall health scores and debt metrics.
3. User clicks to view the Developer Performance page for detailed productivity insights.
4. User navigates to Project Overview to inspect specific projects/repos.

## Data and API Considerations
- API will be built with FastAPI (Python), exposing RESTful endpoints.
- Initially, dummy JSON data can be used for front-end development until backend APIs are fully functional.
- Clearly document expected JSON schema (debt scores, developer metrics, timestamps) in the frontend code to ease integration.

## Questions for Codex to Clarify and Assist With:
- Suggest best practices or boilerplate for Next.js frontend setup (API handling, state management, routing).
- Provide reusable React components for common visualization elements (charts, tables, heatmaps).
- Assistance with responsive design best practices in Tailwind CSS, including recommended utility classes.
- Optimal approach to structure React component files and state management patterns.

---

Please clearly ask if additional clarity or detail is required!