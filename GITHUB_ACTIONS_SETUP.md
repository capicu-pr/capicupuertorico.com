# Enabling GitHub Actions for Your Repository

If you're seeing the error: "Actions is currently unavailable for your repository", follow these steps:

## Step 1: Enable GitHub Actions

1. Go to your repository on GitHub
2. Click on **Settings** (in the repository, not your account settings)
3. Scroll down to **Actions** → **General**
4. Under **Actions permissions**, select:
   - ✅ **Allow all actions and reusable workflows**
   - OR
   - ✅ **Allow local actions and reusable workflows**
5. Scroll down to **Workflow permissions** and select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
6. Click **Save**

## Step 2: Configure GitHub Pages to Use GitHub Actions

1. Still in **Settings**, go to **Pages**
2. Under **Source**, select:
   - **Source**: `GitHub Actions` (NOT "Deploy from a branch")
3. If you see "Jekyll" mentioned anywhere, ignore it - the `.nojekyll` file will prevent Jekyll from processing

## Step 3: Verify the Workflow File

Make sure the `.github/workflows/deploy.yml` file exists in your repository. If you haven't pushed it yet:

```bash
git add .github/workflows/deploy.yml
git add public/.nojekyll
git commit -m "Add GitHub Actions workflow and disable Jekyll"
git push origin main
```

## Step 4: Check Actions Tab

1. Go to the **Actions** tab in your repository
2. You should see the workflow appear
3. If it doesn't run automatically, you can manually trigger it by:
   - Going to **Actions** tab
   - Selecting the "Deploy to GitHub Pages" workflow
   - Clicking **Run workflow**

## Troubleshooting

### If Actions still don't work:

1. **Check repository visibility**: Make sure your repository isn't archived or restricted
2. **Check organization settings**: If this is an organization repo, the org admin may need to enable Actions
3. **Check billing**: Free accounts have Actions limits, but basic usage should work
4. **Try pushing a new commit**: Sometimes GitHub needs a new push to recognize the workflow

### If you see Jekyll errors:

- The `.nojekyll` file in the `public/` folder will prevent Jekyll from processing
- Make sure it's committed and pushed to your repository
- GitHub Pages will serve static files directly instead of processing them with Jekyll

## Quick Fix Commands

If you need to add the `.nojekyll` file and push everything:

```bash
# Make sure .nojekyll is in public folder (already created)
git add public/.nojekyll
git add .github/workflows/deploy.yml
git add .gitignore
git commit -m "Setup GitHub Actions deployment"
git push origin main
```

After pushing, go to **Settings** → **Pages** and select **GitHub Actions** as the source.

