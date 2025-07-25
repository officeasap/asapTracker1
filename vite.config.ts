import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // IPv6 support
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));


