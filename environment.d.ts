declare namespace NodeJs {
    export interface ProcessEnv {
        POSTGRES_HOST: string;
        POSTGRES_PORT: string;
        POSTGRES_USER: string;
        POSTGRES_PASSWORD: string;
        POSTGRES_DATABASE: string;
        PORT?: string;
        MODE: Mode;
        RUN_MIGRATIONS: boolean;
        DISCORD_CLIENT_ID: string;
        DISCORD_CLIENT_SECRET: string;
        DISCORD_CALLBACK_URL: string;
    }
    export type Mode = 'DEV' | 'PROD'
}
