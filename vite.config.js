import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow access from any network interface
    port: 5174,        // You can specify a different port if needed
    open: true,        // This will automatically open the app in the browser (optional)
  },
})
