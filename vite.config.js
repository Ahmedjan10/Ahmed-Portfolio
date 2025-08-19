import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // The base option should remain commented out unless deploying to a subdirectory.
  // base: '/Ahmed-Portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Set to true if you need source maps in production
    emptyOutDir: true,
  },
  server: {
    open: true, // Automatically open browser on dev
    port: 5173, // Default Vite port, change if needed
  },
})