# Deployment Guide for capicupuertorico.com

This guide will help you deploy this project to GitHub Pages with your custom domain.

## Prerequisites

1. A GitHub account
2. Your domain `capicupuertorico.com` registered and accessible
3. Git installed locally

## Step 1: Create GitHub Repository

1. Go to GitHub and create a new repository named `capicupuertorico.com` (or any name you prefer)
2. **DO NOT** initialize it with a README, .gitignore, or license (if you want to push your existing code)

## Step 2: Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/capicupuertorico.com.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. The workflow will automatically deploy when you push to the `main` branch

## Step 4: Configure Your Custom Domain

### Option A: Using GitHub's Domain Settings (Recommended)

1. In your repository, go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `capicupuertorico.com`
3. Check **Enforce HTTPS** (this will be available after DNS is configured)
4. GitHub will automatically create/update the `CNAME` file

### Option B: Manual CNAME File (Already Created)

The `public/CNAME` file is already created with `capicupuertorico.com`. This will be automatically included in your build.

## Step 5: Configure DNS Records

You need to configure DNS records with your domain registrar. Add the following records:

### For Apex Domain (capicupuertorico.com):

Add **A records** pointing to GitHub Pages IPs:
```
Type: A
Name: @ (or capicupuertorico.com)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or capicupuertorico.com)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or capicupuertorico.com)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or capicupuertorico.com)
Value: 185.199.111.153
TTL: 3600 (or default)
```

### For www Subdomain (www.capicupuertorico.com):

Add a **CNAME record**:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600 (or default)
```

**Note**: Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 6: Wait for DNS Propagation

- DNS changes can take anywhere from a few minutes to 48 hours to propagate
- You can check DNS propagation using tools like:
  - https://dnschecker.org
  - https://www.whatsmydns.net

## Step 7: Verify Deployment

1. After DNS propagates, visit `https://capicupuertorico.com`
2. GitHub will automatically provision an SSL certificate (this may take a few minutes to a few hours)
3. Once SSL is active, you can enable **Enforce HTTPS** in GitHub Pages settings

## Troubleshooting

### If the site doesn't load:

1. **Check DNS**: Verify your DNS records are correct using `dig capicupuertorico.com` or online DNS checkers
2. **Check GitHub Actions**: Go to the **Actions** tab in your repository to see if the deployment succeeded
3. **Check GitHub Pages Settings**: Ensure the custom domain is set correctly
4. **Wait for SSL**: SSL certificate provisioning can take up to 24 hours

### If assets don't load:

- Make sure the `base` in `vite.config.ts` is set to `/` (which it is)
- Clear your browser cache
- Check browser console for 404 errors

### Common Issues:

1. **404 on refresh**: This is normal for SPAs. GitHub Pages will serve `index.html` for all routes if configured correctly
2. **Mixed content warnings**: Ensure all assets use HTTPS
3. **CNAME file conflicts**: If you manually edit the CNAME file, make sure it only contains `capicupuertorico.com` (no www, no trailing slash)

## Updating Your Site

After making changes:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The GitHub Actions workflow will automatically build and deploy your site.

## Additional Notes

- The workflow builds your site and deploys it automatically on every push to `main`
- The build output goes to the `dist` folder (configured in `vite.config.ts`)
- Your custom domain is configured via the `public/CNAME` file
- GitHub Pages will serve your site over HTTPS once DNS is configured

