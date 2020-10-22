interface Config {
    vue?: number;
    extensions?: object[];
    themes?: object;
    theme?: string;
    languages?: object;
    language?: string;
    elements?: object;
    components?: object;
    rules?: object;
    labels?: boolean;
    columns?: object;
    validateOn?: string;
    method?: string;
    endpoints?: {
        process?: string;
        validators?: object;
        elements?: object;
    };
    services?: object;
    i18n?: any;
    locale?: string;
}
declare const config: Config;
export default config;
