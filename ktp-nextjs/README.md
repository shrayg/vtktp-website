# KTP Website - Next.js Migration

This is the modernized version of the Kappa Theta Pi Virginia Tech website, migrated from static HTML to Next.js 15 with modern tooling.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Language**: TypeScript
- **Deployment**: Ready for Vercel

## 📁 Project Structure

```
ktp-nextjs/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── about/             # About page
│   │   ├── philanthropy/      # Philanthropy page
│   │   ├── members/           # Members page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── Sidebar.tsx       # Navigation sidebar
│   │   └── SocialIcons.tsx   # Social media links
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   ├── KTP_Logos_Letters_KTP_Logo.png
│   ├── Instagram_logo.png
│   ├── LinkedIn_logo_initials.png
│   └── group_photo.jpg
└── package.json
```

## 🛠️ Development

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
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- Primary Blue: `#2B4D89`
- Accent Green: `#3CB371`
- Background: `#f4f8fb`

### Components
- **Sidebar**: Responsive navigation with mobile menu
- **Social Icons**: Fixed position social media links
- **Cards**: Content containers with consistent styling
- **Buttons**: Interactive elements with hover states

## 📱 Features

### ✅ Implemented
- [x] Responsive design
- [x] Mobile navigation
- [x] Social media integration
- [x] Modern UI components
- [x] TypeScript support
- [x] SEO optimization
- [x] Image optimization

### 🚧 Planned Features
- [ ] Member authentication (Clerk)
- [ ] Database integration (Supabase)
- [ ] Member profiles
- [ ] Event management
- [ ] Blog/news section
- [ ] Contact forms

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom color configuration matching the original design.

### shadcn/ui
Components are installed as needed using:
```bash
npx shadcn@latest add <component-name>
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Migration Notes

### From Static HTML to Next.js
- **Routing**: File-based routing with App Router
- **Styling**: Migrated from custom CSS to Tailwind utility classes
- **Components**: Converted to React components with TypeScript
- **Images**: Optimized with Next.js Image component
- **Performance**: Automatic code splitting and optimization

### Benefits of Migration
- **Performance**: Server-side rendering and static generation
- **Developer Experience**: Hot reloading, TypeScript, better tooling
- **Maintainability**: Component-based architecture
- **Scalability**: Easy to add new features and pages
- **SEO**: Better search engine optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is for the Kappa Theta Pi Virginia Tech chapter.

## 🆘 Support

For questions about the migration or technical issues, please contact the development team.
