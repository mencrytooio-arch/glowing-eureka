# Logo Setup

## Logo File Placement

1. Place your logo file in the `public` folder
2. Supported formats: PNG, SVG, JPG
3. Recommended file name: `logo.png` or `logo.svg`

## Logo Requirements

- **Format**: PNG (recommended) or SVG
- **Transparency**: PNG with transparency preferred
- **Size**: Minimum 200px width, vector (SVG) preferred for scalability
- **Aspect Ratio**: The logo will maintain its aspect ratio automatically

## Logo Path

The logo is loaded from: `/logo.png` (falls back to `/logo.svg` if PNG doesn't exist)

The header component will:
- Display the logo image if found
- Automatically scale appropriately on mobile and desktop
- Fall back to text "MenCryToo" if the image is not found

## Current Implementation

The logo appears in:
- Main header/navigation (desktop and mobile)
- Height: 32px on mobile, 40px on desktop
- Scales cleanly across all breakpoints

