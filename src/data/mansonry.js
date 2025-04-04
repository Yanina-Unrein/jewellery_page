export const masonryGallery = {
    // Imágenes principales (de tu carpeta mansonry)
    primary: Array.from({ length: 13 }, (_, i) => ({
      src: `/mansonry/image-${i + 1}.svg`,
      alt: `Imagen decorativa ${i + 1}`,
      weight: 'high' // Para prioridad de visualización
    })),
  
    // Imágenes secundarias (de otras carpetas)
    secondary: [
      {
        src: "/otra-carpeta/foto1.jpg",
        alt: "Descripción foto 1",
        weight: 'medium'
      },
      {
        src: "/otra-carpeta/foto2.png",
        alt: "Descripción foto 2",
        weight: 'medium'
      },
      // Puedes agregar más...
    ],
  
    // Imágenes especiales (con diferentes proporciones)
    featured: [
      {
        src: "/especiales/wide-image.jpg",
        alt: "Imagen panorámica",
        weight: 'high',
        wide: true
      }
    ]
  };
  
  // Función para mezclar todas las imágenes según tu lógica
  export const getAllMasonryImages = () => {
    return [
      ...masonryGallery.primary,
      ...masonryGallery.secondary,
      ...masonryGallery.featured
    ].sort((a, b) => {
      // Ordenar por peso (high primero)
      if (a.weight === 'high') return -1;
      if (b.weight === 'high') return 1;
      return 0;
    });
  };