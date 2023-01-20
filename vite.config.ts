import { defineConfig, loadEnv } from 'vite';
import * as path from 'path';
import removeConsole from 'vite-plugin-remove-console';
import react from '@vitejs/plugin-react-swc';
import viteBuildConfiguration from './vite-build-configuration';

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
        build: viteBuildConfiguration(),
    });
};
