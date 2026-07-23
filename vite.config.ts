import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Copia ficheiros ocultos (ex.: .htaccess) de public/ para dist/
// — Vite ignora dot-files por defeito ao processar public/.
const copyDotfiles = (): Plugin => ({
  name: "copy-public-dotfiles",
  apply: "build",
  closeBundle() {
    const publicDir = path.resolve(__dirname, "public");
    const outDir = path.resolve(__dirname, "dist");
    if (!fs.existsSync(publicDir) || !fs.existsSync(outDir)) return;
    for (const file of fs.readdirSync(publicDir)) {
      if (!file.startsWith(".")) continue;
      const src = path.join(publicDir, file);
      const dest = path.join(outDir, file);
      if (fs.statSync(src).isFile()) fs.copyFileSync(src, dest);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "./" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      "/__l5e/assets-v1": {
        target: `https://${process.env.LOVABLE_PREVIEW_HOST || "id-preview--88a12a93-8625-4151-a23b-3ea20736cdee.lovable.app"}`,
        changeOrigin: true,
        secure: true,
      },
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), copyDotfiles()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
