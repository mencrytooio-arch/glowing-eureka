# Video Hosting Setup for Netlify

The brand video (`brand-video.mp4`) is **53MB**, which exceeds Netlify's 10MB limit for static files. It needs to be hosted externally.

## Recommended Solution: Cloudinary (Free)

### Step 1: Create Cloudinary Account
1. Go to [Cloudinary.com](https://cloudinary.com/users/register/free)
2. Sign up for free account (25GB storage, 25GB bandwidth/month)
3. Note your **Cloud Name** from the dashboard

### Step 2: Upload Video
1. In Cloudinary dashboard, click **Media Library**
2. Click **Upload** → Select your `brand-video.mp4` file
3. Wait for upload to complete
4. Click on the uploaded video
5. Copy the **URL** (looks like: `https://res.cloudinary.com/YOUR-CLOUD-NAME/video/upload/v1234567890/brand-video.mp4`)

### Step 3: Configure Environment Variable
1. In Netlify dashboard, go to **Site settings** → **Environment variables**
2. Add new variable:
   - **Key**: `VITE_BRAND_VIDEO_URL`
   - **Value**: Your Cloudinary video URL
3. **Save**

### Step 4: Redeploy
- Push any code change, or trigger a redeploy from Netlify dashboard
- The video will now load from Cloudinary on production

### Local Development
- The video will still work locally from `/public/brand-video.mp4`
- Environment variable only used in production builds

---

## Alternative Solutions

### Option 2: Vimeo (Free)
1. Upload video to Vimeo
2. Get embed code
3. Replace `<video>` element with Vimeo iframe (requires code changes)

### Option 3: YouTube (Free, but shows branding)
1. Upload as unlisted video
2. Get embed URL
3. Replace with iframe (not recommended - shows YouTube branding)

### Option 4: Compress Video (Quick Fix)
Use a tool like [HandBrake](https://handbrake.fr/) to compress the video to under 10MB:
1. Download HandBrake
2. Open `brand-video.mp4`
3. Use "Fast 1080p30" preset
4. Adjust quality slider to reduce file size
5. Export and replace file

**Note**: Compression may reduce video quality.

---

## Current Status
- ✅ Code updated to support external video URL via `VITE_BRAND_VIDEO_URL`
- ✅ Video file added to `.gitignore` (won't be pushed to git)
- ✅ Falls back to local file for development
- ⚠️ **Action Required**: Upload video to Cloudinary and set environment variable
