import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{js,jsx}",  // Permite JSX en archivos .js y .jsx
  })],
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    }
  },
  esbuild: {
    loader: 'jsx',  // Permite JSX en archivos .js
    include: /.*\.jsx?$/  // Aplica a archivos .js y .jsx
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'  // Trata archivos .js como JSX
      }
    }
  }
});
