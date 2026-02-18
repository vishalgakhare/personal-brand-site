# Vishal Gakhare Personal Site

Modern personal branding website with built-in blog support, created for professional use.

## Stack
- Astro (static site generation)
- Markdown blog content (`src/content/blog`)
- GitHub Pages deployment via GitHub Actions

## Quick Start
```bash
npm install
npm run dev
```

## Update Profile Content
- Edit hero/about text in `src/pages/index.astro`
- Edit links in `src/components/Header.astro` and `src/components/Footer.astro`

## Add a New Blog Post
1. Create a new file in `src/content/blog/` named `yyyy-mm-dd-topic.md`
2. Use this frontmatter:

```md
---
title: "Your Post Title"
description: "One line summary"
pubDate: 2026-02-18
tags: ["engineering", "leadership"]
---

Post content here.
```

## Build and Publish
- Push to `main`
- GitHub Action in `.github/workflows/deploy.yml` builds and deploys to GitHub Pages

## GitHub Pages Repo Settings
- Enable Pages for this repo
- Source: `GitHub Actions`

## Notes
- `astro.config.mjs` auto-detects GitHub repository name during CI and sets the correct Pages `base` path.
- For local dev, routes run from `/`.
