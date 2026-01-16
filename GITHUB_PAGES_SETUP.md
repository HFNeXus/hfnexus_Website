# GitHub Pages Configuration for HF Nexus Website

This file documents the setup for deploying HF Nexus website on GitHub Pages.

## Deployment Steps

### 1. Create a GitHub Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: HF Nexus website"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/hf-nexus-website.git

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

Your site will be published at:
```
https://YOUR_USERNAME.github.io/hf-nexus-website
```

### 3. Custom Domain (Optional)

To use a custom domain:

1. Go to **Settings → Pages**
2. Under **Custom domain**, enter your domain
3. Add DNS records to your domain provider:
   - Type A: `185.199.108.153`
   - Type A: `185.199.109.153`
   - Type A: `185.199.110.153`
   - Type A: `185.199.111.153`
   - Type CNAME: `YOUR_USERNAME.github.io`

## Project Structure for GitHub Pages

```
hf-nexus-website/
├── index.html
├── about.html
├── e-learning.html
├── it-services.html
├── digital-marketing.html
├── academic-services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── logo.png
├── README.md
└── .gitignore (optional)
```

## .gitignore (Optional)

Create a `.gitignore` file to exclude unnecessary files:

```
# IDE
.vscode/
.idea/
*.sublime-project

# OS
.DS_Store
Thumbs.db

# Node (if using any build tools)
node_modules/
npm-debug.log

# Local testing
*.log
```

## Important Notes

1. **No Build Step Required** - This is a static website, no build process needed
2. **All Files Needed** - Ensure all HTML, CSS, JS, and assets are committed
3. **File Structure** - Keep the folder structure as provided
4. **Logo Path** - Update logo path if changed: `assets/logo.png`
5. **Relative URLs** - All internal links use relative paths (already configured)

## Troubleshooting

### Site Not Showing

- Wait 5-10 minutes after pushing
- Clear browser cache
- Check GitHub Pages is enabled in Settings
- Verify branch is set to main/master

### Styling Not Loading

- Clear cache: Ctrl+Shift+Del (Windows) or Cmd+Shift+Del (Mac)
- Hard refresh: Ctrl+F5 or Cmd+Shift+R
- Check CSS file path in HTML

### Images Not Showing

- Verify image files are committed to git
- Check file names match (case-sensitive)
- Use relative paths: `assets/logo.png`

### Form Not Working

- Forms on static GitHub Pages don't submit directly
- Use services like:
  - Formspree (https://formspree.io)
  - Netlify Forms (https://www.netlify.com)
  - Basin (https://www.basinforms.com)
  - jotform (https://www.jotform.com)

## Adding Form Submission

### Using Formspree

1. Go to https://formspree.io
2. Sign up and create a new form
3. Update the form action in `contact.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

## Version Control Tips

```bash
# Clone the repository locally
git clone https://github.com/YOUR_USERNAME/hf-nexus-website.git

# Create a feature branch
git checkout -b feature/your-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/your-feature

# Create a Pull Request on GitHub
```

## Continuous Updates

To keep your website updated:

```bash
# Pull latest changes
git pull origin main

# Make your changes
# Edit files as needed

# Stage changes
git add .

# Commit changes
git commit -m "Update: description of changes"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically deploy your changes within a few seconds.

## Monitoring Performance

Use these free tools to optimize your website:

1. **Google PageSpeed Insights** - https://pagespeed.web.dev
2. **GTmetrix** - https://gtmetrix.com
3. **Lighthouse** - Built into Chrome DevTools
4. **SEO Checker** - https://www.seobility.net

## Analytics (Optional)

Add Google Analytics to track visitors:

1. Go to https://analytics.google.com
2. Create a new property
3. Get your Measurement ID
4. Add to all HTML files before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Useful GitHub Pages Documentation

- https://docs.github.com/en/pages
- https://docs.github.com/en/pages/getting-started
- https://docs.github.com/en/pages/configuring-a-custom-domain

---

**Ready to Deploy!** Your HF Nexus website is fully prepared for GitHub Pages. 🚀
