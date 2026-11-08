import { createClient } from '@supabase/supabase-js';

const url = String(import.meta.env.PUBLIC_SUPABASE_URL || '').trim();
const key = String(import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '').trim();

// Si las variables faltan o están mal escritas, el sitio NO se rompe: Interacciones muestra un aviso.
let cliente: ReturnType<typeof createClient> | null = null;
try {
  if (/^https?:\/\//.test(url) && key) cliente = createClient(url, key, { auth: { persistSession: false } });
  else if (url || key) console.warn('Supabase: revisa PUBLIC_SUPABASE_URL (debe empezar por https://) y la clave en .env');
} catch (e) {
  console.error('Supabase: no se pudo crear el cliente', e);
}

export const supabase = cliente;
