# Kappa Theta Pi Virginia Tech Website

This is the official website for the Kappa Theta Pi chapter at Virginia Tech, built with Next.js, React, Tailwind CSS, and TypeScript.

## Table of Contents
- [Overview](#overview)
- [Frameworks & Libraries](#frameworks--libraries)
- [Project Structure](#project-structure)
- [Setup & Development](#setup--development)
- [Deployment](#deployment)
- [License](#license)

## Overview
This site provides information about Kappa Theta Pi at Virginia Tech, including our mission, members, philanthropy, and contact information. It is a modern, responsive web app using the latest web technologies.

## Frameworks & Libraries
- **Next.js**: React-based framework for server-side rendering, static site generation, and routing.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **TypeScript**: Typed superset of JavaScript for type safety.
- **PostCSS**: CSS processing tool (used by Tailwind).
- **ESLint**: Linting for code quality and consistency.


## Setup & Development

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the development server:**
	```bash
	npm run dev
	```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

This site is designed for deployment on platforms like Netlify or Vercel.

- For static export, use:
  ```bash
  npm run build && npm run export
  ```
  and set the publish directory to `out/`.
- For SSR and dynamic routes, use the official Netlify Next.js plugin or deploy to Vercel.


## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ktp-nextjs

# Install dependencies
npm install

# Start development server
npm run build
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Design System

### Colors
- Primary Blue: `#2B4D89`
- Accent Green: `#3CB371`
- Background: `#f4f8fb`

### Components
- **Sidebar**: Responsive navigation with mobile menu
- **Social Icons**: Fixed position social media links
- **Cards**: Content containers with consistent styling
- **Buttons**: Interactive elements with hover states

## Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom color configuration matching the original design.

### shadcn/ui
Components are installed as needed using:
```bash
npx shadcn@latest add <component-name>
```

## Deployment

### Netlify
1. Connect your GitHub repository to Netlify Project
2. Deploy automatically on push to main branch


## For Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request