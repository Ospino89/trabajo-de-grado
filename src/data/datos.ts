// Los 3 "datos clave" del Inicio. Cada uno tiene una cifra, una descripción y series por grupo.
// La serie 'Todos' es obligatoria; agrega las que quieras (por grupo o por año).
// Resultados descriptivos transcritos del trabajo de campo (n = 18).
export const datosClave: { cifra: string; texto: string; etiquetas: string[]; series: Record<string, number[]> }[] = [
  { cifra: '77,8 %', texto: 'de las personas encuestadas ya conocían el Monumento al Sol (14 de 18).', etiquetas: ['Lo conocen', 'Primera visita'], series: { 'Personas (n=18)': [14, 4] } },
  { cifra: '50 %', texto: 'dijeron conocer mucho o algo de la historia; la otra mitad dijo conocer poco o nada.', etiquetas: ['Mucho o algo', 'Poco o nada'], series: { 'Personas (n=18)': [9, 9] } },
  { cifra: '88,9 %', texto: 'lo consideraron importante o muy importante para conservar la memoria e identidad de Sogamoso (16 de 18).', etiquetas: ['Importante o muy importante', 'Otras respuestas'], series: { 'Personas (n=18)': [16, 2] } },
  { cifra: '24', texto: 'fotografías documentales registradas en cuatro jornadas de trabajo de campo.', etiquetas: ['Plano entero', 'Plano general', 'Detalle', 'Plano medio'], series: { Fotografías: [9, 7, 7, 1] } },
];
