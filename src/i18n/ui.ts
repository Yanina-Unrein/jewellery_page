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
  
  // Nueva función para manejar anchors específicamente
  export function getLocalizedAnchor(anchorKey: string, targetLang: string = defaultLang): string {
    // Asegurarse de que targetLang tenga un valor válido
    const lang = Object.keys(anchors).includes(targetLang) ? targetLang : defaultLang;
    
    // Buscar el anchor en el idioma especificado
    const anchor = anchors[lang]?.[anchorKey];
    
    // Si no se encuentra, devolver el key como fallback
    return anchor || anchorKey;
  }
  
  // Función mejorada para URLs que considera el idioma por defecto
  export function getLocalizedURL(path: string, targetLang: string, currentHash?: string): string {
    // Limpiar la ruta de posibles prefijos de idioma
    const cleanPath = path.replace(new RegExp(`^/(${Object.keys(languages).join('|')})`), '');
  
    // Construir la ruta base
    let localizedPath = targetLang === defaultLang ? cleanPath : `/${targetLang}${cleanPath}`;
  
    // Manejar el hash/anchor si existe
    if (currentHash) {
      const hashWithoutPrefix = currentHash.startsWith('#') ? currentHash.substring(1) : currentHash;
      
      // Buscar el anchor key correspondiente en cualquier idioma
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
  
      // Obtener el anchor en el idioma destino
      const localizedAnchor = anchorKey ? getLocalizedAnchor(anchorKey, targetLang) : hashWithoutPrefix;
      localizedPath += `#${localizedAnchor}`;
    }
  
    return localizedPath || '/';
  }