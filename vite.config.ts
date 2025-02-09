import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
    return {
        base: '/jain/',
        plugins: [react(), tsconfigPaths()],
        server: {
            port: 3000,
        },
        // You could add more custom config as needed
        define: {
            __APP_MODE__: JSON.stringify(mode),
        },
    };
});
