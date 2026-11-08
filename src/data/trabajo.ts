// Todo el contenido del Inicio sale de este archivo.
const autoresLista = ['Andrés Felipe Tuta Mateus', 'Héctor José Saraza Cabana'];

export const trabajo = {
  tituloCorto: 'Ecos de un Legado Muisca',
  titulo: 'Ecos de un Legado Muisca: Fotografía Documental, Memoria e Identidad en el Espacio Público de Sogamoso, Boyacá',
  frase: 'Cómo el Monumento al Sol de Sogamoso representa el legado muisca y cómo la fotografía documental puede registrarlo para darlo a conocer.',
  autoresLista,
  autores: autoresLista.join(' y '),
  autoresApa: 'Tuta Mateus, A. F., & Saraza Cabana, H. J.',
  autoresBib: 'Tuta Mateus, Andrés Felipe and Saraza Cabana, Héctor José',
  director: 'Sandra Carolina Patiño Ospina',
  universidad: 'Universidad de Pamplona',
  programa: 'Comunicación Social · Facultad de Artes y Humanidades',
  anio: '2026',
  licencia: 'CC BY 4.0',
  pdf: '#',
  // Imágenes del carrusel (están en public/imagenes/). Completa el crédito fotográfico.
  imagenes: [
    { src: '/imagenes/pieza-1.webp', alt: 'Pieza «Ecos de un legado Muisca»: el Monumento al Sol de Sogamoso con una estrella solar sobre una columna, la plaza y la iglesia al fondo, junto a textos sobre su origen.', pie: 'Ecos de un legado Muisca: el Monumento al Sol', credito: '[Crédito fotográfico]' },
    { src: '/imagenes/pieza-2.webp', alt: 'Pieza fotográfica con las esculturas del Monumento a la Raza y una columna del Monumento al Sol, con textos sobre su autoría y su historia.', pie: 'El Monumento a la Raza y el Monumento al Sol', credito: '[Crédito fotográfico]' },
  ],
  resumen60: [
    { p: '¿Qué problema?', t: 'El Monumento al Sol de Sogamoso evoca el legado muisca, pero muchas personas no conocen su origen ni lo que representa.', d: 'Es una representación artística moderna, no una estructura prehispánica. Si esa diferencia no se comunica con claridad, se le puede atribuir un origen y un significado que no tiene.', cap: '/capitulos/1-problema' },
    { p: '¿Qué objetivo?', t: 'Resaltar el monumento con fotografía documental para interpretar y divulgar su valor histórico, simbólico y cultural.', d: 'Documentar sus antecedentes, analizar sus características visuales, materiales y simbólicas, y producir un fotodocumental.', cap: '/capitulos/1-problema' },
    { p: '¿Cómo se hizo?', t: 'Enfoque cualitativo: revisión documental, observación directa, registro fotográfico, encuestas y entrevistas, solo sobre el Monumento al Sol.', d: 'Alcance descriptivo-interpretativo que contrasta la información histórica con las percepciones de la comunidad.', cap: '/capitulos/4-tecnicas-de-recoleccion-y-analisis' },
    { p: '¿Qué se propone?', t: 'Un fotodocumental con catálogo fotográfico y una exposición titulada «Ecos de un Legado Muisca».', d: 'Los productos registran las características formales, materiales, espaciales y simbólicas del monumento y comunican su relación con la memoria patrimonial de Sogamoso.', cap: '/capitulos/3-propuesta-de-produccion' },
    { p: '¿Qué significa?', t: 'Aporta al reconocimiento y la valoración del legado muisca en el espacio público de Sogamoso desde la Comunicación Social.', d: 'Muestra cómo la fotografía puede servir como herramienta de documentación, interpretación y divulgación del patrimonio cultural.', cap: '/capitulos/2-marco-teorico' },
  ],
  perfiles: {
    Estudiante: { capitulo: '2. Marco teórico', dato: 'Memoria colectiva, patrimonio y fotografía documental', recurso: 'Referencias bibliográficas' },
    Docente: { capitulo: '4. Técnicas de recolección y análisis de datos', dato: 'Enfoque cualitativo y triangulación de la información', recurso: 'Metodología (capítulo 1)' },
    Comunidad: { capitulo: '1. Problema', dato: 'El Monumento al Sol es una representación moderna inspirada en el pasado muisca', recurso: 'Galería fotográfica del Inicio' },
    'Entidad / empresa': { capitulo: '3. Propuesta de producción', dato: 'Catálogo fotográfico y exposición itinerante', recurso: 'Contacto' },
  } as Record<string, { capitulo: string; dato: string; recurso: string }>,
  capitulos: ['Problema', 'Marco teórico', 'Propuesta de producción', 'Técnicas de recolección y análisis'],
};
