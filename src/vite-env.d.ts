/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_PORT: number | string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
