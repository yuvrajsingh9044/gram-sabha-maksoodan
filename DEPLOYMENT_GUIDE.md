# 🚀 Deployment Guide - Gram Sabha Maksoodan Website

This guide will help you deploy your website to GitHub and then make it live using Vercel or Netlify.

## 📋 Prerequisites

Before you begin, make sure you have:
- [ ] Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- [ ] A GitHub account ([Sign up](https://github.com/signup))
- [ ] A Vercel account ([Sign up](https://vercel.com/signup)) OR Netlify account ([Sign up](https://netlify.com/signup))

---

## 🔧 Step 1: Initialize Git Repository

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit: Gram Sabha Maksoodan website"
```

---

## 📤 Step 2: Push to GitHub

### Option A: Using GitHub Desktop (Easier)

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "File" → "Add Local Repository"
4. Select your project folder
5. Click "Publish repository"
6. Choose repository name: `gram-sabha-maksoodan`
7. Add description: "Official website for Gram Sabha Maksoodan"
8. Uncheck "Keep this code private" (or keep it private if you prefer)
9. Click "Publish Repository"

### Option B: Using Command Line

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon (top right) → "New repository"
3. Repository name: `gram-sabha-maksoodan`
4. Description: "Official website for Gram Sabha Maksoodan"
5. Choose Public or Private
6. DO NOT initialize with README (we already have one)
7. Click "Create repository"

8. In your terminal, run these commands (replace YOUR_USERNAME with your GitHub username):

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/gram-sabha-maksoodan.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**✅ Your code is now on GitHub!**

---

## 🌐 Step 3: Deploy to Vercel (Recommended)

### Why Vercel?
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments on git push
- ✅ Easy custom domain setup

### Deployment Steps:

1. **Go to [Vercel](https://vercel.com)**

2. **Sign up/Login**
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"
   - Authorize Vercel to access your GitHub

3. **Import Project**
   - Click "Add New..." → "Project"
   - Find your `gram-sabha-maksoodan` repository
   - Click "Import"

4. **Configure Project**
   - Project Name: `gram-sabha-maksoodan` (or your preferred name)
   - Framework Preset: Select "Other" (it's a static site)
   - Root Directory: `./` (leave as default)
   - Build Command: Leave empty
   - Output Directory: Leave empty
   - Install Command: Leave empty

5. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - 🎉 Your site is live!

6. **Get Your URL**
   - After deployment, you'll see: `https://gram-sabha-maksoodan.vercel.app`
   - Click "Visit" to see your live website

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `maksoodan.in`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

---

## 🌐 Alternative: Deploy to Netlify

### Why Netlify?
- ✅ Free for personal projects
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Form handling built-in
- ✅ Easy custom domain setup

### Deployment Steps:

1. **Go to [Netlify](https://netlify.com)**

2. **Sign up/Login**
   - Click "Sign Up" or "Log In"
   - Choose "GitHub" to sign in
   - Authorize Netlify

3. **Add New Site**
   - Click "Add new site" → "Import an existing project"
   - Click "GitHub"
   - Authorize Netlify (if first time)
   - Find and select `gram-sabha-maksoodan` repository

4. **Configure Build Settings**
   - Branch to deploy: `main`
   - Build command: Leave empty
   - Publish directory: `./` (or leave empty)
   - Click "Deploy site"

5. **Wait for Deployment**
   - Deployment takes 1-2 minutes
   - 🎉 Your site is live!

6. **Get Your URL**
   - You'll get a URL like: `https://random-name-123456.netlify.app`
   - Click on it to view your site

7. **Change Site Name (Optional)**
   - Go to "Site settings" → "Site details"
   - Click "Change site name"
   - Enter: `gram-sabha-maksoodan`
   - Your URL becomes: `https://gram-sabha-maksoodan.netlify.app`

### Custom Domain (Optional)

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `maksoodan.in`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation

---

## 🔄 Updating Your Website

After making changes to your website:

### Using GitHub Desktop:
1. Open GitHub Desktop
2. You'll see your changes listed
3. Add a commit message (e.g., "Updated contact information")
4. Click "Commit to main"
5. Click "Push origin"
6. Vercel/Netlify will automatically redeploy (2-3 minutes)

### Using Command Line:
```bash
# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

**✅ Your website will automatically update on Vercel/Netlify!**

---

## 🎯 Quick Comparison

| Feature | Vercel | Netlify |
|---------|--------|---------|
| Free Tier | ✅ Yes | ✅ Yes |
| Custom Domain | ✅ Yes | ✅ Yes |
| HTTPS | ✅ Auto | ✅ Auto |
| Auto Deploy | ✅ Yes | ✅ Yes |
| Build Time | Fast | Fast |
| Form Handling | ❌ No | ✅ Yes |
| Analytics | ✅ Paid | ✅ Free Basic |
| Best For | Modern sites | All sites |

**Recommendation:** Use Vercel for simplicity, or Netlify if you need form handling.

---

## 🐛 Troubleshooting

### Issue: Git not recognized
**Solution:** Install Git from [git-scm.com](https://git-scm.com/downloads)

### Issue: Permission denied (GitHub)
**Solution:** 
1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to GitHub: Settings → SSH Keys → New SSH Key
3. Use SSH URL instead: `git@github.com:YOUR_USERNAME/gram-sabha-maksoodan.git`

### Issue: Images not showing on live site
**Solution:** 
- Check image paths are relative (e.g., `../images/emblem.png`)
- Ensure images are committed to git
- Check file names match exactly (case-sensitive)

### Issue: 404 errors on page refresh
**Solution:** Already configured in `vercel.json` and `netlify.toml`

### Issue: Deployment failed
**Solution:**
- Check build logs in Vercel/Netlify dashboard
- Ensure all files are committed to GitHub
- Verify no syntax errors in HTML/CSS/JS

---

## 📞 Need Help?

### Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Documentation](https://docs.github.com)
- [Git Tutorial](https://www.atlassian.com/git/tutorials)

### Contact:
- Gram Sachiv: Pawan Kumar Chaurasia
- Phone: +91-6306462522
- Email: maksoodan@up.gov.in

---

## ✅ Checklist

Before going live, verify:

- [ ] All pages load correctly
- [ ] All images display properly
- [ ] All links work (internal and external)
- [ ] Mobile responsive design works
- [ ] Contact information is correct
- [ ] No placeholder text remains
- [ ] All forms work (if applicable)
- [ ] HTTPS is enabled
- [ ] Custom domain configured (if applicable)

---

## 🎉 Success!

Your website is now live and accessible to the world!

**Share your website:**
- Vercel: `https://gram-sabha-maksoodan.vercel.app`
- Netlify: `https://gram-sabha-maksoodan.netlify.app`
- Custom Domain: `https://your-domain.com`

**Next Steps:**
1. Share the URL with village residents
2. Add to government directories
3. Submit to search engines (Google, Bing)
4. Monitor website analytics
5. Keep content updated regularly

---

**Last Updated:** February 2026
**Version:** 1.0
