# MenCryToo Website

A minimalistic, modern e-commerce website selling authentic clothing for men. Built with React, Vite, and Tailwind CSS, optimized for Netlify deployment.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Netlify** - Static site hosting

## 📁 Project Structure

```
MenCryTooWeb/
├── public/               # Static assets
│   ├── products/         # Product images folder
│   └── hero-image.jpg    # Hero section background image (add your image here)
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Hero.jsx      # Hero section with background image
│   │   ├── Section.jsx   # Section wrapper component
│   │   ├── ProductCard.jsx # Product card component
│   │   ├── Card.jsx      # Card component
│   │   ├── CTA.jsx       # Call-to-action component
│   │   └── Footer.jsx    # Footer component
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles and Tailwind imports
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── netlify.toml          # Netlify deployment configuration
└── README.md             # This file
```

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

## 🎨 Design Features

- **Clean, modern aesthetic** with neutral color palette
- **Professional yet emotionally intelligent** design
- **Minimal color scheme** (neutral tones + indigo accent)
- **Smooth transitions and hover effects** for better UX
- **Fully responsive** - mobile-first approach
- **Optimized performance** for fast loading

## 🌐 Netlify Deployment

### Option 1: Deploy via Netlify CLI

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

### Option 2: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
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
- Redirect rules for single-page application routing

## 📝 Site Sections

1. **Hero Section** - Main landing area with hero image background, site title, and call-to-action buttons
2. **Products Section** - Showcases 4 clothing products (Tee, Hoodie, Crewneck, Long Sleeve)
3. **About / Story Section** - Information about the MenCryToo brand and mission
4. **Call-to-Action** - Encouraging users to shop the collection
5. **Footer** - Footer with links, contact information, and copyright

## 🖼️ Adding Images

### Hero Image

1. Place your hero image in the `public` folder
2. Name it: `hero-image.jpg` (or `.png`, `.webp`)
3. Recommended size: 1920x1080px or larger
4. The image will automatically appear as the hero background

### Product Images

1. Add product images to `public/products/` folder:
   - `tee-1.jpg` - Emotional Honesty Tee
   - `hoodie-1.jpg` - Strength in Vulnerability Hoodie
   - `crewneck-1.jpg` - Authentic Self Crewneck
   - `longsleeve-1.jpg` - Feel It All Long Sleeve
2. Recommended size: 800x800px (square format)
3. If images are not found, placeholders will be displayed

See `public/README-IMAGES.md` for detailed image setup instructions.

## 🔮 Future Improvements

Here are some suggestions for enhancing the e-commerce site:

- **Shopping Cart** - Add a shopping cart functionality
- **Payment Integration** - Integrate Stripe or PayPal for checkout
- **Product Pages** - Create individual product detail pages
- **Product Variants** - Add size and color options
- **Inventory Management** - Connect to a backend for stock tracking
- **Customer Reviews** - Add product reviews and ratings
- **Newsletter Signup** - Collect emails for product updates and promotions
- **User Accounts** - Add user registration and login
- **Order Tracking** - Implement order tracking functionality
- **Wishlist** - Allow users to save favorite products
- **Search & Filters** - Add product search and filtering
- **Analytics** - Integrate Google Analytics or Plausible Analytics
- **SEO Optimization** - Improve meta tags, Open Graph, and structured data
- **Performance** - Add image optimization and lazy loading
- **Accessibility** - Enhance ARIA labels and keyboard navigation

## 📄 License

This project is open source and available for personal or commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ for MenCryToo


