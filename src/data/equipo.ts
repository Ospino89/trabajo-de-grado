// Equipo del trabajo. "enlace" puede ser mailto:correo, un perfil de ORCID, LinkedIn, etc.
import { trabajo } from './trabajo';

const detalleAutor = `Comunicación Social, ${trabajo.universidad}`;

export const equipo = [
  { grupo: 'Autor(es)', personas: [
    { nombre: 'Héctor José Saraza Cabana', detalle: detalleAutor, enlace: '#' },
    { nombre: 'Andrés Felipe Tuta Mateus', detalle: detalleAutor, enlace: '#' },
  ] },
  { grupo: 'Director o asesor', personas: [
    { nombre: trabajo.director, detalle: `Directora del trabajo de grado, ${trabajo.universidad}`, enlace: '#' },
  ] },
  { grupo: 'Jurados', personas: [
    { nombre: '[Nombre del jurado 1]', detalle: '[Cargo, institución]', enlace: '#' },
    { nombre: '[Nombre del jurado 2]', detalle: '[Cargo, institución]', enlace: '#' },
  ] },
];
