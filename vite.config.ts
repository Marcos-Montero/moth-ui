import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "/src/components/index.ts",
      name: "MothUI",
      fileName: "moth-ui",
    },
    rollupOptions: {
      externa: ["react"],
      output: {
        globals: "React",
      },
    },
  },
  plugins: [react()],
});
