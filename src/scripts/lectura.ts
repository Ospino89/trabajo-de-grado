// Registro local (solo en este navegador) de capítulos leídos y tiempo.
// Solo se envía a Supabase si la persona decide registrarse en Interacciones.
import { supabase } from '../lib/supabase';

type Lectura = { caps: number[]; seg: number };
const leer = (): Lectura => {
  try { return JSON.parse(localStorage.getItem('lectura') || '') as Lectura; } catch { return { caps: [], seg: 0 }; }
};
const guardar = (l: Lectura) => { try { localStorage.setItem('lectura', JSON.stringify(l)); } catch {} };

// Conteo anónimo: una vez por sesión del navegador, sin guardar datos personales.
try {
  if (supabase && !sessionStorage.getItem('contada')) {
    sessionStorage.setItem('contada', '1');
    supabase.rpc('registrar_visita').then(() => {});
  }
} catch {}

// Tiempo de lectura: suma 5 s mientras la pestaña está visible.
setInterval(() => {
  if (document.visibilityState !== 'visible') return;
  const l = leer();
  l.seg += 5;
  guardar(l);
}, 5000);

// Capítulo leído: cuando el final del capítulo entra en pantalla.
const art = document.querySelector<HTMLElement>('[data-capitulo]');
const fin = document.getElementById('fin-capitulo');
if (art && fin) {
  const n = Number(art.dataset.capitulo);
  if (n >= 1 && n <= 8) {
    new IntersectionObserver((es, io) => {
      if (!es.some((e) => e.isIntersecting)) return;
      const l = leer();
      if (!l.caps.includes(n)) { l.caps.push(n); l.caps.sort((a, b) => a - b); guardar(l); }
      io.disconnect();
    }).observe(fin);
  }
}
