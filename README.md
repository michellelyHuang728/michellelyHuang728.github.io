# Michelle Huang — Personal website

A responsive, dependency-free static portfolio. No build step or paid hosting needed.

## Preview

Open `index.html` in your browser, or run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.

## Before sharing with recruiters

1. Your email, GitHub, LinkedIn, and résumé are already configured in `profile.js`. Add individual public project links if desired; empty project links remain hidden.
2. The supplied résumé is included as `resume.pdf`. Replace it with your latest version when needed.
3. Review the experience descriptions and dates in `index.html` against your latest résumé. Research is described as ongoing; no unverified performance metrics are included.

## Deploy to GitHub Pages

1. Create a public repository called `YOUR_USERNAME.github.io` for a personal homepage, or any repository name for a project site.
2. Upload the **contents** of this folder to the root of the repository, including `index.html`, `styles.css`, `profile.js`, `script.js`, `favicon.svg`, `resume.pdf`, and `.nojekyll`. Do not upload the ZIP itself.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, select your default branch and **/(root)**, then save.
4. Wait for deployment to complete. Your homepage will be `https://YOUR_USERNAME.github.io/`; a project site will be `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`.

All asset paths are relative, so both URL formats work. This ZIP does not create or deploy a GitHub repository automatically.

## Customize

- Text and project descriptions: `index.html`
- Colors, spacing and responsive layout: `styles.css`
- Contact and project URLs: `profile.js`
- Link setup and footer year: `script.js`

The site uses system fonts, plain text sections, and makes no requests to external scripts or analytics. All primary contact and résumé links work without JavaScript. Optional project links can be configured in profile.js.
