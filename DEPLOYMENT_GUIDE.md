# 🚀 HF Nexus Website - GitHub Pages Deployment Guide

## Step-by-Step Guide to Make Your Website LIVE on the Internet

### ✅ Prerequisites (Do These First):

1. **GitHub Account** - Create free account at https://github.com
2. **Git Installed** - Download from https://git-scm.com/download/win
3. **Your Website Files** - Already ready! ✓

---

## 📋 STEP 1: Create a GitHub Repository

### Option A: Using GitHub Website (Easiest)

1. Go to https://github.com and login
2. Click **"+"** icon (top right) → **"New repository"**
3. Fill in:
   - **Repository name**: `hf-nexus-website` (or any name)
   - **Description**: "HF Nexus - Where Education Meets Technology"
   - **Public** (so anyone can see it)
   - Check **"Add a README file"**
4. Click **"Create repository"**

---

## 🔧 STEP 2: Upload Your Website Files

### Option A: Using GitHub Website Upload (Easiest - No Git needed!)

1. Go to your new repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop ALL these files/folders:
   ```
   - index.html
   - about.html
   - e-learning.html
   - it-services.html
   - digital-marketing.html
   - academic-services.html
   - contact.html
   - css/ (folder with style.css)
   - js/ (folder with script.js)
   - assets/ (folder with logo.png)
   ```
4. Scroll down and click **"Commit changes"**

**IMPORTANT**: Make sure ALL files are uploaded in their correct folders!

---

### Option B: Using Git (If you have Git installed)

Open PowerShell in your hf-nexus-website folder and run:

```powershell
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - HF Nexus Website"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/hf-nexus-website.git

# Push to GitHub (first time)
git branch -M main
git push -u origin main
```

When asked for password, use your GitHub **Personal Access Token** (create at: https://github.com/settings/tokens)

---

## 🌐 STEP 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top right)
3. Left sidebar → **"Pages"**
4. Under "Source":
   - Select **"Deploy from a branch"**
   - Branch: **"main"** (or "master")
   - Folder: **"/ (root)"**
5. Click **"Save"**
6. **Wait 1-2 minutes** for deployment

---

## ✨ STEP 4: Get Your Live Website Link

After deployment completes:

1. Go back to **Settings** → **Pages**
2. Look for the message: **"Your site is live at: https://USERNAME.github.io/hf-nexus-website"**

**That's your website link!** 🎉

---

## 📱 Your Live Website Link Format:

```
https://USERNAME.github.io/hf-nexus-website
```

**Replace USERNAME with your GitHub username**

### Example:
- If your username is `hazeefa`
- Your site will be: `https://hazeefa.github.io/hf-nexus-website`

---

## 🔗 Share Your Website!

Once live, anyone can visit:
- **Home**: https://USERNAME.github.io/hf-nexus-website/
- **E-Learning**: https://USERNAME.github.io/hf-nexus-website/e-learning.html
- **Contact**: https://USERNAME.github.io/hf-nexus-website/contact.html
- All other pages work too!

---

## ⚙️ Make Changes Later

If you want to update your website:

1. **Edit files locally** on your computer
2. **Upload to GitHub** (same upload process)
3. **Wait 30-60 seconds** - GitHub Pages automatically updates!

---

## 🆘 Troubleshooting

### "404 Not Found" Error
- Check file names (case-sensitive: `index.html` not `Index.html`)
- Make sure all files uploaded correctly
- Wait 2-3 minutes for GitHub Pages to rebuild

### Links not working
- Make sure file names match exactly
- Use lowercase file names
- Path format: `e-learning.html` (not `E-Learning.html`)

### Logo not showing
- Make sure `logo.png` is in the `assets/` folder
- Check case sensitivity

### Styling looks broken
- Hard refresh browser: `Ctrl+Shift+R` (Windows)
- Clear browser cache
- Wait 1-2 minutes for GitHub to rebuild

---

## 💡 Pro Tips

1. **Custom Domain** (Optional):
   - Buy domain from GoDaddy, Namecheap, etc.
   - Point it to GitHub Pages (guide in Settings → Pages)

2. **SSL Certificate** (FREE):
   - GitHub Pages gives FREE HTTPS automatically ✓

3. **Email in Forms** (Optional):
   - Use Formspree: https://formspree.io
   - Update contact form action to your Formspree endpoint

4. **Analytics** (Optional):
   - Add Google Analytics to track visitors
   - Guide: https://support.google.com/analytics

---

## 📞 Your Website is Ready!

Once deployed to GitHub Pages:
- ✅ **Live 24/7** on the internet
- ✅ **Free hosting** (GitHub Pages is free!)
- ✅ **HTTPS secure** automatically
- ✅ **Fast load times** (CDN powered)
- ✅ **Shareable link** anyone can visit

---

## 🎯 Quick Checklist

- [ ] GitHub account created
- [ ] Repository created
- [ ] All files uploaded (check folder structure)
- [ ] GitHub Pages enabled
- [ ] Website is live!
- [ ] Share link with friends/clients ✓

---

**Your website will be live and accessible to the entire world!** 🌍🚀

Need help? Ask me anytime!
