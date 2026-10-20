# Fatima Ali — AI Developer Portfolio

A responsive React + Vite portfolio with a soft lavender visual system, custom CSS, Framer Motion animations, project filters, credential detail modals, and an in-page QR code.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build and test the production version

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Personalise before publishing

Open `src/App.jsx` and update the `PROFILE` object:

- `linkedin`: replace the placeholder with your actual LinkedIn profile URL.
- `email`: add a professional email address.
- `livePortfolio`: set this to the final public URL after deployment.

Also review the project cards and replace any general GitHub links with exact repository links. Add original certificate scans/PDFs or official verification URLs before claiming that a credential is verified. Keep only accurate skills and claims.

## Deploy to GitHub Pages

This starter uses Vite. For a repository named `fatima-ai-portfolio`, follow these steps:

1. Create a new GitHub repository named `fatima-ai-portfolio`.
2. In `vite.config.js`, change `base: '/'` to `base: '/fatima-ai-portfolio/'`.
3. In `PROFILE.livePortfolio`, set `https://YOUR-GITHUB-USERNAME.github.io/fatima-ai-portfolio/`.
4. Push the project to the repository.
5. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.
6. Add `.github/workflows/deploy.yml` from this project, commit, and push.
7. Wait for the Pages workflow to finish. Open the public URL and test the mobile layout, project links, certificate details, and QR code.
8. If you rename the repository or use a custom domain, update the Vite `base` value and `PROFILE.livePortfolio` accordingly.

## QR code

The contact section includes a QR modal generated from `PROFILE.livePortfolio`. It is only useful after the website is publicly deployed. Once the live URL is final, use the QR modal to scan-test it with another phone before printing it on a card or resume.

## Content integrity notes

- The FlyRank capstone summary reflects a human-review prioritisation use case. It does not claim causal findings or automatic content refresh.
- The reported Precision@20 / Precision@50 scores are evaluation results for the project split, not a promise of general performance.
- Stanford Code in Place and Harvard CS50x Puzzle Day are listed as user-provided achievements. Attach the real evidence/credential URL you have.
- Replace the LinkedIn, email, and project placeholders before sharing with recruiters.

## Project structure

```text
fatima-ai-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── .github/workflows/deploy.yml
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```


## Add your certificates and FlyRank documents

The credential gallery has image slots for Stanford Code in Place, Harvard CS50x Puzzle Day, FlyRank internship certificate, FlyRank recommendation letter, Meta Hacker Cup, and Calico’25.

Copy your real image files into `public/credentials/` and use the exact filenames listed in `public/credentials/README.md`. The gallery cards and their detail modal will display the images automatically. You do not need to edit the React code if you use those filenames. For a different filename or extension, change the relevant `image` property in `src/App.jsx`.

**Important:** no certificate is included or claimed as verified until you add your actual document. Before making a recommendation letter public, check it for private contact details or information the author did not intend for public sharing.
