import { defineConfig } from 'vite'
export default defineConfig({
    root: './'
    server: {
        open:true
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            }
        }
    }
    build: {
        outDir: 'dist'
    }
})
    
    