import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "My Component Library",
      entry: path.resolve(__dirname, "src/index.tsx"),
      formats: ["umd", "es"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [react()],
});
