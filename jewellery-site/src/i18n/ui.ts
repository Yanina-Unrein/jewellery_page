export const languages = {
    en: "English",
    es: "Español",
};
  
export const defaultLang = "es";
  
export const ui: Record<string, any> = {
    en: await import("../translations/en.json").then((m) => m.default),
    es: await import("../translations/es.json").then((m) => m.default),
};
  
export function loadTranslations(lang: string | undefined) {
    return ui[lang ?? defaultLang] || ui[defaultLang]; 
  }
  
export function getLocalizedURL(path: string, lang: string) {
    return lang === defaultLang ? path : `/${lang}${path}`;
}