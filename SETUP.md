# Setup Guide - MenCryToo Website

## ⚠️ Prerequisites Required

Node.js is not currently installed on your system. Follow these steps to get started:

## Step 1: Install Node.js

### Windows Installation

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Click on the **LTS (Long Term Support)** version (recommended)
   - This will download an `.msi` installer file

2. **Run the Installer:**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - **Important:** Make sure "Add to PATH" is checked (it should be by default)
   - Accept the license agreement and click "Next" through the installation
   - Click "Finish" when done

3. **Verify Installation:**
   - **Close and reopen your PowerShell/Terminal** (this is important!)
   - Run these commands to verify:
     ```powershell
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., `v20.10.0` and `10.2.3`)

## Step 2: Install Project Dependencies

Once Node.js is installed:

1. **Navigate to the project directory** (if not already there):
   ```powershell
   cd C:\Users\jplwi\OneDrive\Documents\MenCryTooWeb
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```
   This will install all required packages (React, Vite, Tailwind CSS, etc.)

3. **Wait for installation to complete** - this may take 1-2 minutes

## Step 3: Run the Development Server

After installation completes:

```powershell
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

4. **Open your browser** and navigate to `http://localhost:5173/`

## Troubleshooting

### If `node` or `npm` still not recognized after installation:

1. **Restart your computer** (sometimes required for PATH changes)
2. **Or manually add to PATH:**
   - Search "Environment Variables" in Windows
   - Edit "Path" in User variables
   - Add: `C:\Program Files\nodejs\`
   - Restart PowerShell

### If npm install fails:

- Make sure you're in the project directory
- Check your internet connection
- Try: `npm install --legacy-peer-deps` if there are dependency conflicts

## Available Commands

After setup, you can use:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Need Help?

If you encounter any issues during setup, check:
- Node.js installation: https://nodejs.org/
- Vite documentation: https://vitejs.dev/
- Tailwind CSS docs: https://tailwindcss.com/

---

**Next:** Once you have Node.js installed and the dev server running, you can start customizing the website!


