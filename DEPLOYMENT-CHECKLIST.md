# 🚀 DEPLOYMENT CHECKLIST

## Step-by-Step Guide to Get Your Website Live

### ✅ Phase 1: GitHub Setup (10 minutes)
- [ ] Create GitHub account (if you don't have one)
- [ ] Create new repository called "doubleAsolutions"
- [ ] Make it Public
- [ ] Upload `index.html` and `logo.svg`
- [ ] Go to Settings → Pages
- [ ] Set Source to "main" branch
- [ ] Wait 5 minutes
- [ ] Visit: https://YOUR-USERNAME.github.io/doubleAsolutions/

**Your site is now LIVE!** ✨

---

### ✅ Phase 2: Custom Domain (Optional, 1 day)
- [ ] Log into your domain registrar (where you bought aalbertsberg.us)
- [ ] Find DNS settings
- [ ] Add A Records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] Add CNAME: `www` → `YOUR-USERNAME.github.io`
- [ ] In GitHub Settings → Pages, add custom domain: `aalbertsberg.us`
- [ ] Rename `CNAME.example` to `CNAME` and upload to GitHub
- [ ] Wait 24-48 hours for DNS

**Now accessible at: aalbertsberg.us** 🌐

---

### ✅ Phase 3: Email Setup (30 minutes + waiting)
- [ ] Log into Squarespace (your domain registrar)
- [ ] Go to Email section
- [ ] Sign up for Google Workspace
- [ ] First year FREE (if eligible)
- [ ] Create: contact@aalbertsberg.us
- [ ] Squarespace auto-configures DNS
- [ ] Wait 24 hours for email to activate

**Professional email ready!** 📧

---

### ✅ Phase 4: Contact Form (15 minutes)
Choose one option:

**Option A: Formspree (Easiest)**
1. Go to https://formspree.io
2. Sign up (free tier: 50 submissions/month)
3. Create new form
4. Copy the form endpoint URL
5. In `index.html`, find the `<form>` tag
6. Add: `action="YOUR-FORMSPREE-URL" method="POST"`
7. Remove the `onSubmit={handleSubmit}` part
8. Upload updated `index.html` to GitHub

**Option B: EmailJS**
1. Go to https://emailjs.com
2. Free tier: 200 emails/month
3. Follow their React integration guide

**Forms now send to your email!** 📬

---

### ✅ Phase 5: Polish (Optional)
- [ ] Add Google Analytics tracking code
- [ ] Create business cards with logo
- [ ] Create email signature
- [ ] Add site to Google Search Console
- [ ] Create social media profiles with logo
- [ ] LinkedIn business page

---

## 🎯 Quick Reference

**GitHub Pages URL Pattern:**
```
https://YOUR-USERNAME.github.io/REPO-NAME/
```

**Custom Domain URL:**
```
https://aalbertsberg.us
```

**Email:**
```
contact@aalbertsberg.us
```

---

## 📞 Need Help?

**GitHub Pages Issues:**
- Wait 5-10 minutes after enabling
- Try incognito/private mode
- Check Settings → Pages is green

**Domain Not Working:**
- Wait 24-48 hours after DNS changes
- Use https://dnschecker.org to check propagation
- Make sure CNAME file uploaded to GitHub

**Email Not Working:**
- Wait 24 hours after Google Workspace setup
- Check Squarespace email settings
- MX records should be automatic

---

## ✨ You're Done!

Your professional IT consulting website is now live with:
- ✅ Modern, responsive design
- ✅ Professional logo
- ✅ 5 service offerings
- ✅ Contact form (once configured)
- ✅ Custom domain (once configured)
- ✅ Professional email (once configured)

**Share your new site:** https://aalbertsberg.us 🎉
