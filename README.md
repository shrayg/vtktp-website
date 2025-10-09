# Virginia Tech KTP Website

Official website for Virginia Tech's Kappa Theta Pi (KTP) chapter - a co-ed professional technology fraternity.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** TailwindCSS with custom animations
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router v6
- **3D Graphics:** Three.js
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form with Zod validation
- **Theme:** next-themes (dark/light mode support)

## Features

- 🎨 Modern, responsive design with dark/light mode toggle
- 🖼️ Interactive photo slideshow and member galleries
- 💼 Company logo showcase with animations
- 📱 Mobile-first responsive design
- ⚡ Optimized build with code splitting and lazy loading
- 🎯 Type-safe development with TypeScript
- 🎭 Accessible UI components built on Radix UI
- 🌐 Client-side routing with React Router

## Prerequisites

Ensure you have installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher (comes with Node.js)

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vtktp-website.git
   cd vtktp-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8080`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 8080 |
| `npm run build` | Build for production to `dist/` directory |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Deployment

This project is configured for deployment on **Netlify**.

### Netlify Configuration

The site is configured via `netlify.toml`:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Redirects:** All routes redirect to `index.html` for SPA routing

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Ensure the Next.js plugin is removed** (this is a Vite app, not Next.js)
3. **Deploy settings are auto-configured** via `netlify.toml`
4. **Push to main branch** to trigger automatic deployment

### Manual Deployment

```bash
npm run build
# Upload the dist/ directory to your hosting provider
```

## For Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/yourfeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/yourfeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Run `npm run lint` before committing
- Test responsive design on multiple screen sizes
- Ensure dark mode compatibility for new features

## License

This project is maintained by Virginia Tech Kappa Theta Pi.

---

**Built with ❤️ by VT KTP**
