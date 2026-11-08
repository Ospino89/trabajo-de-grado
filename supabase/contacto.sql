-- Ejecuta este script UNA vez en Supabase > SQL Editor (añade el formulario de Contacto).
create table public.mensajes_contacto (
  id uuid primary key default gen_random_uuid(),
  creado timestamptz not null default now(),
  nombre text not null check (char_length(nombre) between 2 and 80),
  correo text not null check (char_length(correo) between 5 and 120),
  mensaje text not null check (char_length(mensaje) between 5 and 2000)
);
alter table public.mensajes_contacto enable row level security;
revoke all on public.mensajes_contacto from anon, authenticated;
grant insert (nombre, correo, mensaje) on public.mensajes_contacto to anon, authenticated;
create policy "enviar mensaje" on public.mensajes_contacto
  for insert to anon, authenticated with check (true);
-- Los mensajes los lees tú en Table Editor; desde la web nadie puede leerlos.
