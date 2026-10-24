# Aron Singel – Portfolio

A static portfolio site (no build step, no dependencies).

## Structure

```
portfolio-site/
├── index.html      page structure and text (hero, about, skills, projects, contact, footer)
├── css/styles.css  all styling and animations
├── js/script.js    interactivity, scene animations, skills/projects data
└── images/         project images (.webp)
```

## Where to edit things

| What | Where |
|---|---|
| Hero text, About text, contact info, footer | `index.html` |
| Skill names, levels, and categories | `skills` array in `js/script.js` |
| Design projects (title, description, tags, image) | `designs` array in `js/script.js` |
| Website projects (title, description, tags, image, link) | `projects` array in `js/script.js` |
| Project image files | `images/` and the `IMG` object in `js/script.js` |
| Colors and fonts | CSS variables at the top of `css/styles.css` |
| Email that receives contact-form messages | the `mailto:` address in the form handler in `js/script.js` |

## Run locally

Just open `index.html` in a browser (or use a tool like VS Code's Live Server).

## Publish with GitHub Pages

1. Create a new repository on GitHub and upload the contents of this folder
   (keep `index.html` at the top level of the repo).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then save.
4. After a minute your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Notes

- The contact form opens the visitor's email app with the message pre-filled
  (it uses `mailto:`). To have messages delivered automatically, connect a form
  service such as Formspree or Web3Forms and point the form at it.
- Fonts (Space Grotesk and Jost) load from Google Fonts. Futura is used for
  headings on devices that have it installed.
