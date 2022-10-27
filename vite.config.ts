import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
export default defineConfig({
  build: {
    lib: {
      entry: "./src/components/index.ts",
      name: "MothUI",
      fileName: (format) => `moth-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
