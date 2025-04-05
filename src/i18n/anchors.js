export const anchors = {
        'es': {
          'home': 'inicio',
          'about': 'acerca',
          'gallery': 'catalogo',
          'contact': 'contacto'
        },
        'en': {
          'home': 'home',
          'about': 'about',
          'gallery': 'gallery',
          'contact': 'contact'
        }
};
  
export function getAnchor(lang, key) {
    return anchors[lang]?.[key] || key;
}