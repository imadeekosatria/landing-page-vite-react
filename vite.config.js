import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/landing-page-vite-react/",
  plugins: [react()],
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          'vendor':['react', 'react-dom'],
          'evergreen-ui':['evergreen-ui'],
          'apexcharts':['apexcharts'],
          'react-apexcharts':['react-apexcharts'],
          'rechart': ['recharts'],
          'fontawesome':['@fortawesome/fontawesome-svg-core','@fortawesome/free-brands-svg-icons','@fortawesome/free-regular-svg-icons','@fortawesome/free-solid-svg-icons','@fortawesome/react-fontawesome'],
        }
      }
    }
  }
})
