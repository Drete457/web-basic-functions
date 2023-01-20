import { BuildOptions } from 'vite';
import * as path from 'path';

const isDevelopment = process.env.NODE_ENV === 'development';

const viteBuildConfiguration = (): BuildOptions => {
    // library configuration
    if (isDevelopment)
        return {
            lib: {
                entry: path.resolve(__dirname, 'src/lib/index.ts'),
                name: 'web-basic-functions',
                fileName: format => `web-basic-functions.${format}.js`,
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
        };

    // website configuration
    return {
        chunkSizeWarningLimit: 350,
        minify: 'esbuild',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }

                    return null;
                },
            },
        },
    };
};

export default viteBuildConfiguration;
