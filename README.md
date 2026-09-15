# Build with Bridge Landing Page

A sleek, AMOLED-styled landing page for Bridge using Next.js and Tailwind CSS.

## Features

- Dark AMOLED-style design
- Responsive layout
- Custom fonts (OCR-A for titles, JetBrains Mono for body text)
- Optimized for performance

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/buildwithbridge.git
   cd buildwithbridge
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Font Files
   - Place the OCR-A.ttf file in the `public/fonts` directory
   - Place the JetBrainsMono-Regular.ttf file in the `public/fonts` directory
   - Place the bridge.svg logo in the `public/images` directory

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
```

### Starting Production Server

```bash
npm start
```

## Environment Variables

The contact form and demo booking form require EmailJS configuration. Set these environment variables in your Vercel dashboard (or `.env.local` for local development):

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Your EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Your EmailJS public key |

Without these variables, the contact and demo forms will display a user-friendly message directing visitors to GitHub instead.

To set up EmailJS:
1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an email service (e.g., Gmail, Outlook)
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key to your environment

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add the EmailJS environment variables in Settings → Environment Variables
4. Deploy

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. 