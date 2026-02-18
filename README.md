# Double-A Solutions Website

Professional IT consulting website for Double-A Solutions.

## 🚀 Quick Setup for GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository name: `doubleAsolutions` (or whatever you want)
4. Make it **Public**
5. Click **"Create repository"**

### Step 2: Upload Files

**Option A: Upload via Website (Easiest)**
1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop these files:
   - `index.html`
   - `logo.svg`
   - `README.md`
3. Click **"Commit changes"**

**Option B: Using Git (if you know how)**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/doubleAsolutions.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **"Settings"** (top menu)
2. Click **"Pages"** (left sidebar)
3. Under "Source":
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
4. Click **"Save"**

### Step 4: Access Your Site

Your website will be live at:
```
https://YOUR-USERNAME.github.io/doubleAsolutions/
```

**⏰ Wait 2-5 minutes** for GitHub to build and deploy your site.

---

## 📁 Files Included

### `index.html`
- Main website file
- Complete standalone HTML (no build required)
- Includes all content, styling, and functionality

### `logo.svg`
- Hexagon badge logo
- Used in navigation and footer

### `README.md`
- This file with instructions

---

## 🎨 Customization

### Update Contact Email
Search for `contact@aalbertsberg.us` in `index.html` and replace with your actual email.

### Change Colors
In the `<style>` section of `index.html`, find these color values:
- **Cyan:** `#06b6d4`
- **Navy Blue:** `#1e3a8a`
- **Dark Background:** `#0a0e27`

### Edit Content
All text content is in `index.html`. Search for the section you want to edit:
- Services: Search for "Microsoft 365 Consulting"
- About: Search for "Real Experience"
- Stats: Search for "15+ Years"

---

## 🌐 Using a Custom Domain

### Option 1: aalbertsberg.us (Your Domain)

1. In GitHub repository → **Settings** → **Pages**
2. Under "Custom domain", enter: `aalbertsberg.us`
3. Click **"Save"**
4. In your domain registrar (where you bought aalbertsberg.us):
   - Add **A Records** pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add **CNAME Record**: `www` → `YOUR-USERNAME.github.io`

5. Wait 24-48 hours for DNS to update

### Option 2: Buy New Domain Through Squarespace
1. Buy domain through Squarespace
2. Set up DNS records as above
3. Your email (Google Workspace) and website can use the same domain

---

## 🔧 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check Settings → Pages shows green "Your site is published"
- Try incognito/private browsing

### Logo Not Showing?
- Make sure `logo.svg` is in the same folder as `index.html`
- Check file uploaded correctly to GitHub

### Form Not Working?
- The contact form shows an alert (no email sending yet)
- To make it actually send emails, you'll need a backend service like:
  - Formspree (free tier available)
  - EmailJS (free tier available)
  - Netlify Forms (if you switch to Netlify hosting)

---

## 📧 Next Steps

1. ✅ Upload files to GitHub
2. ✅ Enable GitHub Pages
3. ⏳ Set up Google Workspace email (contact@aalbertsberg.us)
4. ⏳ Connect custom domain
5. ⏳ Set up contact form to actually send emails
6. ⏳ Add Google Analytics (optional)
7. ⏳ Create business cards with your logo

---

## 🤝 Support

Need help? Issues with setup?
- Check GitHub Pages documentation: https://pages.github.com
- Or contact me through the site once it's live!

---

## 📝 License

© 2026 Double-A Solutions. All rights reserved.
