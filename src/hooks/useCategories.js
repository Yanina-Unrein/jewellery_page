// src/hooks/useCategories.js
export const useCategories = (translations) => {
  const categories = translations.catalogue.categories;
  const descriptions = translations.catalogue.descriptions;

  const categoryMappings = {
    'anillos': { imageKey: 'anillos', descKey: 'ring' },
    'collares y dijes': { imageKey: 'collares y dijes', descKey: 'necklaces_charms' },
    'pulseras': { imageKey: 'pulseras', descKey: 'wristbands' },
    'aretes': { imageKey: 'aretes', descKey: 'hoops' },
    'rings': { imageKey: 'rings', descKey: 'ring' },
    'necklaces and charms': { imageKey: 'necklaces and charms', descKey: 'necklaces_charms' },
    'bracelets': { imageKey: 'bracelets', descKey: 'wristbands' },
    'earrings': { imageKey: 'earrings', descKey: 'hoops' }
  };

  const getCategoryData = (category) => {
    const lowerCaseCategory = category.toLowerCase();
    return categoryMappings[lowerCaseCategory] || { 
      imageKey: lowerCaseCategory, 
      descKey: '' 
    };
  };

  return {
    categories,
    descriptions,
    getCategoryData
  };
};