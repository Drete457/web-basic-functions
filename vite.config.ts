import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import removeConsole from 'vite-plugin-remove-console';
import * as path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const portToUseString: string = process.env.VITE_APP_PORT || '3000';
    const portToUserNumber: number = parseInt(portToUseString, 10);

    return defineConfig({
        plugins: [react(), removeConsole()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            port: portToUserNumber,
        },
        build: {
            lib: {
                // Could also be a dictionary or array of multiple entry points
                entry: path.resolve(__dirname, 'src/lib/index.js'),
                name: 'web-basic-functions',
                // the proper extensions will be added
                fileName: 'web-basic-functions',
            },
            chunkSizeWarningLimit: 350,
            minify: 'esbuild',
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
        },
    });
};
