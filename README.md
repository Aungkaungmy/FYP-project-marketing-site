# Secure File Sharing and Recovery System

## Project Description

This repository contains the official project website for `FYP-26-S2-31`, titled **Secure File Sharing and Recovery System**. The website presents the project overview, objectives, features, technical direction, team details, supervisor, and assessor information for the final year project.

## Project Type

This is a plain **HTML/CSS/JavaScript** website.

## Project Structure

- `index.html` - homepage entry point
- `styles.css` - site styling
- `script.js` - client-side interactions
- `logo.svg` - project logo

## Team Members

- Darren How Weng Kit (Team Leader)
- Valerie Lim Xin Ying
- Dave Rajesh Dadlani
- Cheng Hong Chuan
- Aung Kaung Myat
- Calvin Goh Jing Han (Wu Junhan)

## Supervisor

- Mr Japit Sionggo

## Assessor

- Dr Loo Poh Kok

## Local Development

Open `index.html` directly in a browser, or serve the project locally:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## Deployment Instructions

### Netlify

1. Push this repository to GitHub.
2. Log in to Netlify.
3. Choose **Add new project** > **Import an existing project**.
4. Select GitHub and choose this repository.
5. Use these settings:
   - Build command: leave empty
   - Publish directory: `.`
6. Deploy the site.

### GitHub Pages

1. Push this repository to GitHub.
2. Open the repository settings.
3. Go to **Pages**.
4. Set the source branch to `main`.
5. Set the folder to `/ (root)`.
6. Save and wait for the site to publish.

## Automatic Updates

When Netlify is connected to the GitHub repository, every new commit pushed to the `main` branch will trigger an automatic deployment.

