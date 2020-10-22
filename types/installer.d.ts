import Config from './config';
declare global {
    interface Window {
        _: any;
    }
}
export default function (config: typeof Config): {
    options: typeof Config;
    store(Store: any): void;
    locale(locale: any): void;
    config(config: any): void;
    applyExtensions(): void;
    initI18n(): void;
    initComponents(): void;
    install(appOrVue: any, options?: any): void;
};
