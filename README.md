# MenCryToo Website

A minimalistic, purpose-driven clothing brand website. Every purchase funds counselling sessions for men in need. Built with React, Vite, Tailwind CSS, and React Router, optimized for Netlify deployment.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Netlify** - Static site hosting

## 🎨 Design Philosophy

The website embraces minimalism with:
- **Extremely minimal layout** with generous white space
- **Neutral color palette** (black, white, soft greys)
- **Clean sans-serif typography** with light font weights
- **Subtle animations** and smooth transitions
- **Mobile-first, fully responsive** design
- **Calm, human, honest tone** - not corporate or charity-like

## 📁 Project Structure

```
MenCryTooWeb/
├── public/                  # Static assets
│   ├── logo.svg            # Logo file (add your logo here)
│   ├── hero.jpg            # Hero image for home page (or hero-image.avif)
│   └── products/           # Product images folder
│       ├── product-1.jpg
│       ├── product-2.jpg
│       └── ...
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx      # Navigation header with logo
│   │   └── Footer.jsx      # Minimal footer
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Home page with hero section
│   │   ├── Shop.jsx        # Shop page with product grid
│   │   ├── About.jsx       # About Us page
│   │   └── HowWeWork.jsx   # How We Work page
│   ├── App.jsx             # Main application with routing
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── netlify.toml            # Netlify deployment configuration
└── README.md               # This file
```

## 📄 Pages

1. **Home** - Hero section with image, headline, mission statement, and CTAs
2. **Shop** - Minimal product grid with clean product cards
3. **About** - Story-driven explanation of why MenCryToo exists
4. **How We Work** - Clear breakdown of how profits fund counselling sessions

## 🛠️ Local Development

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **View the site:**
   - Open your browser and navigate to `http://localhost:5173`
   - The site will automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🖼️ Adding Assets

### Logo

1. Place your logo file in the `public` folder
2. Name it: `logo.svg` (recommended) or `.png`, `.jpg`, `.webp`
3. The logo will appear in the header/navigation
4. If no logo is found, "MenCryToo" text will be displayed as fallback

### Hero Image

1. Place your hero image in the `public` folder
2. Name it: `hero.jpg` (or `.png`, `.webp`, or use existing `hero-image.avif`)
3. Recommended size: 1920x1080px or larger
4. The image appears as a subtle background on the home page hero section

### Product Images

1. Place product images in `public/products/` folder
2. Name them: `product-1.jpg`, `product-2.jpg`, etc.
3. Recommended size: 1200x1200px (square format)
4. If images are not found, placeholder backgrounds will be displayed

See `public/ASSETS-README.md` for detailed asset setup instructions.

## 🌐 Netlify Deployment

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Netlify will auto-detect the settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Automatic deployments:**
   - Every push to your main branch will trigger a new deployment
   - Netlify provides a preview URL for each pull request

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI globally:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Drag & Drop Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site will be live instantly!

### Netlify Configuration

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirect rules for single-page application routing (React Router)

## 🎯 Brand Concept

MenCryToo is a purpose-driven clothing company where **100% of profits fund counselling sessions for men in need**. The website embodies:

- **Quiet confidence** - Not loud or attention-seeking
- **Emotional honesty** - Authentic and genuine
- **Minimal but meaningful** - Every element has purpose
- **Safe space** - Not a sales funnel, but a welcoming environment

## 🔮 Future Enhancements

- Shopping cart and checkout functionality
- Product detail pages
- Blog or journal section
- Newsletter signup
- Impact stories/testimonials
- Quarterly impact reports
- Social media integration
- Analytics integration

## 📄 License

This project is open source and available for personal or commercial use.

---

Built with ❤️ for MenCryToo - Where every purchase funds a counselling session for a man in need.
