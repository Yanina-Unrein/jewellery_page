import { anchors } from "./anchors";

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
  
  
  export function getLocalizedAnchor(anchorKey: string, targetLang: string = defaultLang): string {
    const lang = Object.keys(anchors).includes(targetLang) ? targetLang : defaultLang;
    
    const anchor = anchors[lang]?.[anchorKey];
    
    return anchor || anchorKey;
  }
  
  export function getLocalizedURL(path: string, targetLang: string, currentHash?: string): string {
    // Manejar caso especial para 404
    if (path.endsWith('/404')) {
      return targetLang === defaultLang ? '/404' : `/${targetLang}/404`;
    }
  
    const cleanPath = path.replace(new RegExp(`^/(${Object.keys(languages).join('|')})`), '');
    let localizedPath = targetLang === defaultLang ? cleanPath : `/${targetLang}${cleanPath}`;
  
    if (currentHash) {
      const hashWithoutPrefix = currentHash.startsWith('#') ? currentHash.substring(1) : currentHash;
      let anchorKey: string | undefined;
      
      for (const lang of Object.keys(anchors)) {
        for (const [key, value] of Object.entries(anchors[lang])) {
          if (value === hashWithoutPrefix) {
            anchorKey = key;
            break;
          }
        }
        if (anchorKey) break;
      }
  
      const localizedAnchor = anchorKey ? getLocalizedAnchor(anchorKey, targetLang) : hashWithoutPrefix;
      localizedPath += `#${localizedAnchor}`;
    }
  
    return localizedPath || '/';
  }