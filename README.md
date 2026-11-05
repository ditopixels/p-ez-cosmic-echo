# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/0878910b-f9b9-4862-8bf8-13ec35866b6f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/0878910b-f9b9-4862-8bf8-13ec35866b6f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/0878910b-f9b9-4862-8bf8-13ec35866b6f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Rediseño COMPATIBLES (nov 2026)

La home ahora es una página estática en `index.html` (HTML + CSS + un poco de JS, sin React), con sus archivos en `public/img`, `public/fonts` y `public/audio`. `npm run build` y `npm run deploy` siguen funcionando igual.

- Datos del lanzamiento: bloque `SITIO` al inicio del `<script>` en `index.html` (pre-save, fecha, EPK, comunicado). El formulario de cartas usa la misma función de Supabase de antes (`send-newsletter-welcome`) con las variables `VITE_SUPABASE_*` del `.env`.
- Sistema visual: `DESIGN.md`.
- El código React anterior (`src/`) ya no se usa en la home; se puede borrar cuando se confirme el cambio.
