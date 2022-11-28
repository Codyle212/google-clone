namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        JWT_SECRET: string;
        GOOGLE_SEARCH_API_KEY: string;
        GOOGLE_SEARCH_CONTEXT_KEY: string;
    }
}
