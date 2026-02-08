import { defineConfig } from 'vite';
export default defineConfig({
    root: './',
    base: Process.env.VITE_BASE_PATH || "/vite-deploy",
    server: {
        open:true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            }
        }
    },
    build: {
        outDir: 'dist'
    }
})
    
//why    