# Yiho Chen - Portfolio

A modern, responsive, bilingual portfolio website built with **Astro** and **Tailwind CSS**. It presents professional experience, skills, projects, and contact information for Yiho Chen.

> **Fork notice:** This project was forked from [JavierDvlpr/portfolio](https://github.com/JavierDvlpr/javierdvlpr.github.io) and customized for Yiho Chen.

## Features

- **Bilingual support** - English and Japanese content with smooth language switching
- **Dark mode** - Light/dark theme toggle with localStorage persistence
- **Fully responsive** - Mobile-first layout with a hamburger menu for small screens
- **High performance** - Built with Astro for optimized static site generation
- **Modern design** - Tailwind CSS styling with custom animations and gradients
- **Rainbow animations** - Animated border effects on interactive elements
- **Accessible markup** - Semantic HTML and ARIA labels for better accessibility
- **Work timeline** - Professional experience with multilingual descriptions
- **Social integration** - Links for GitHub, LinkedIn, and email

## Project Structure

```text
portfolio/
├── src/
│   ├── components/
│   │   ├── Header.astro      # Navigation with language/theme toggles
│   │   └── Footer.astro      # Footer with tech stack
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with global scripts
│   ├── pages/
│   │   ├── index.astro       # Home page with profile
│   │   ├── work.astro        # Work experience timeline
│   │   ├── projects.astro    # Project showcase
│   │   └── contact.astro     # Contact information
│   ├── assets/
│   │   ├── photo.jpeg        # Profile photo
│   │   ├── Astro_dark.svg    # Astro logo
│   │   ├── Astro_light.svg   # Astro logo for light theme
│   │   └── tailwindcss.svg   # Tailwind CSS logo
│   ├── data/                 # Portfolio and translation data
│   ├── project-descriptions/ # Project description markdown files
│   └── styles/
│       └── global.css        # Custom animations and utilities
├── public/
│   └── favicon.svg           # Site favicon
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SonaruIsuge/sonaruisuge.github.io.git
cd sonaruisuge.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser to view the portfolio.

## Technology Stack

**Frontend:**

- Astro
- React (optional, for dynamic components)
- TypeScript
- Tailwind CSS

**Features:**

- Mobile-first responsive design
- Dark mode support
- Multilingual content (i18n)
- Custom CSS animations

## Configuration

### Language System

The portfolio uses a custom language system with `data-en` and `data-jp` attributes. The selected language is stored in localStorage.

To add translations:

1. Add `data-en` and `data-jp` attributes to the relevant elements.
2. Use `updatePageContent()` to display the content for the current language.

### Theme System

The dark/light mode toggle is available in the header. The selected theme is stored in localStorage and restored on page load.

## Customization

### Update Personal Information

Edit these files to customize the portfolio:

- `src/pages/index.astro` - Profile, about section, and tech stack
- `src/pages/work.astro` - Work experience entries
- `src/pages/contact.astro` - Contact information and social links
- `src/components/Header.astro` - Navigation structure

### Modify Colors

Update the theme and utility classes in the source files. The current design uses:

- Background: `white` / `gray-950`
- Text: `gray-900` / `white` with dark-mode variants
- Accents: rainbow gradients and animation effects

### Update the Tech Stack Display

The technology ticker on the home page can be edited in `src/data/about.json`. Replace the technology array with your own tools and skills.

## Build and Deployment

### Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview the Production Build

```bash
npm run preview
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Connect this GitHub repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist/`.
4. Deploy the site.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the site for production |
| `npm run preview` | Preview the production build locally |
| `npm run astro add` | Add Astro integrations |
| `npm run astro check` | Run Astro checks and type validation |

## Contact

- **Email:** bread511206@gmail.com
- **GitHub:** [@SonaruIsuge](https://github.com/SonaruIsuge)
- **LinkedIn:** [Yiho Chen](https://www.linkedin.com/in/yiho-chen/)

## License

This project is open source and available under the MIT License.

## Acknowledgements

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- Original portfolio by [Javier Castillo](https://github.com/JavierDvlpr)

---

**Made with care by Yiho Chen | 2026**
