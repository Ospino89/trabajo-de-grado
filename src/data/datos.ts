// Los 3 "datos clave" del Inicio. Cada uno tiene una cifra, una descripción y series por grupo.
// La serie 'Todos' es obligatoria; agrega las que quieras (por grupo o por año).
export const datosClave: { cifra: string; texto: string; etiquetas: string[]; series: Record<string, number[]> }[] = [
  { cifra: '[00 %]', texto: '[Descripción breve del dato 1]', etiquetas: ['[2022]', '[2023]', '[2024]'],
    series: { Todos: [12, 19, 28], '[Grupo A]': [8, 15, 22], '[Grupo B]': [16, 23, 34] } },
  { cifra: '[00 %]', texto: '[Descripción breve del dato 2]', etiquetas: ['[2022]', '[2023]', '[2024]'],
    series: { Todos: [30, 24, 18], '[Grupo A]': [35, 27, 20], '[Grupo B]': [25, 21, 16] } },
  { cifra: '[00 %]', texto: '[Descripción breve del dato 3]', etiquetas: ['[2022]', '[2023]', '[2024]'],
    series: { Todos: [5, 9, 14], '[Grupo A]': [4, 8, 11], '[Grupo B]': [6, 10, 17] } },
];
