📷 LensNoir - Visual Archives

A monochromatic, cinematic photography portfolio and image gallery landing page. Designed with a "Liquid Noir" aesthetic, featuring smooth interactions, infinite scrolling visuals, and a minimalist interface.

✨ Features

Cinematic Film Strip: An auto-scrolling, infinite vertical column of featured high-res images in the hero section.

Interactive Masonry Gallery: Images presented in a grid that transition from grayscale to full color upon interaction.

Liquid Noir Aesthetic: Deep black backgrounds with silver/white accents and glassmorphism effects.

Custom Cursor: A lag-free, magnetic cursor that blends seamlessly with the dark theme.

Scroll Animations: Elements fade and slide into view using a custom Intersection Observer hook.

Responsive Design: Fully adaptive layout for mobile, tablet, and desktop.

🛠️ Tech Stack

Core: React 18

Styling: Tailwind CSS

Icons: Lucide React (via inline SVGs for portability)

Build Tool: Vite

🚀 Getting Started

Follow these steps to run the project locally.

Prerequisites

Node.js (v16 or higher) installed.

Installation

Create a new Vite project:

npm create vite@latest lens-noir -- --template react
cd lens-noir


Install Tailwind CSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configure Tailwind:
Update tailwind.config.js:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'film-scroll': 'film-scroll 40s linear infinite',
      },
      keyframes: {
        'film-scroll': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-33.33%)' },
        }
      }
    },
  },
  plugins: [],
}


Setup CSS:
Replace the contents of src/index.css with:

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    background-color: #050505;
    color: #ffffff;
    overflow-x: hidden;
}

/* Hide default cursor to use custom one */
@media (min-width: 768px) {
  body {
    cursor: none;
  }
}


Add the Code:

Replace src/App.jsx with the provided code.

Run Development Server:

npm run dev


📂 Project Structure

src/
├── components/
│   ├── ui/
│   │   ├── Icons.jsx
│   │   ├── CustomCursor.jsx
│   │   └── ScrollReveal.jsx
│   ├── sections/
│   │   ├── Hero.jsx        # Contains the FilmStrip component
│   │   ├── Gallery.jsx     # Masonry grid
│   │   └── Navbar.jsx
│   └── Footer.jsx
├── App.jsx
└── main.jsx


🎨 Customization

Images: Update the images arrays in FilmStrip and Gallery components with your own URLs.

Colors: The project uses standard Tailwind colors (mostly black, white, gray-400). You can customize these in the classes or tailwind.config.js.

Speed: Adjust the 40s duration in the film-scroll animation style to change the speed of the hero strip.

📄 License

This project is open source and available under the MIT License.
