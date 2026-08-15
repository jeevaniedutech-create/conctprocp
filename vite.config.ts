import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Base path for GitHub Pages deployment to `/conctprocp/`.
// On other static hosts (Netlify, Cloudflare Pages, Firebase) the base is overridable
// via the BASE env var, defaulting to `/` when not building for GitHub Pages.
const base = process.env.VITE_BASE ?? "/conctprocp/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
