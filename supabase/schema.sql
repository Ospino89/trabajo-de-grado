-- Ejecuta este script completo en Supabase > SQL Editor.

-- 1) Visitas registradas (solo personas que dan su consentimiento) ----------
create table public.visitas (
  id uuid primary key default gen_random_uuid(),
  alias text not null check (char_length(alias) between 2 and 40),
  perfil text not null check (perfil in ('Estudiante', 'Docente', 'Comunidad', 'Entidad / empresa')),
  ciudad text not null check (char_length(ciudad) between 2 and 60),
  fecha timestamptz not null default now(),
  capitulos_leidos smallint[] not null default '{}'
    check (cardinality(capitulos_leidos) <= 8 and capitulos_leidos <@ array[1,2,3,4,5,6,7,8]::smallint[]),
  minutos smallint not null default 0 check (minutos between 0 and 600),
  valoracion smallint not null check (valoracion between 1 and 5),
  comentario text check (comentario is null or char_length(comentario) <= 500),
  consentimiento boolean not null check (consentimiento is true)
);
create index visitas_fecha_idx on public.visitas (fecha desc);
create index visitas_perfil_idx on public.visitas (perfil);

alter table public.visitas enable row level security;
revoke all on public.visitas from anon, authenticated;
grant select on public.visitas to anon, authenticated;
-- Solo estas columnas pueden escribirse desde el navegador (id y fecha las pone el servidor).
grant insert (alias, perfil, ciudad, capitulos_leidos, minutos, valoracion, comentario, consentimiento)
  on public.visitas to anon, authenticated;

create policy "insertar con consentimiento" on public.visitas
  for insert to anon, authenticated with check (consentimiento is true);
create policy "leer solo con consentimiento" on public.visitas
  for select to anon, authenticated using (consentimiento is true);
-- Sin politicas ni permisos de UPDATE o DELETE: desde el cliente no se puede editar ni borrar.

-- 2) Conteo anonimo de visitas (sin datos personales) ----------------------
create table public.conteo_visitas (dia date primary key, total integer not null default 0);
alter table public.conteo_visitas enable row level security;
revoke all on public.conteo_visitas from anon, authenticated;

create function public.registrar_visita() returns void
language sql security definer set search_path = public as $$
  insert into conteo_visitas (dia, total)
  values ((now() at time zone 'America/Bogota')::date, 1)
  on conflict (dia) do update set total = conteo_visitas.total + 1;
$$;

create function public.resumen_interacciones() returns json
language sql stable security definer set search_path = public as $$
  select json_build_object(
    'visitantes', coalesce((select sum(total) from conteo_visitas), 0),
    'hoy', coalesce((select total from conteo_visitas where dia = (now() at time zone 'America/Bogota')::date), 0),
    'registrados', (select count(*) from visitas),
    'comentarios', (select count(*) from visitas where comentario is not null and comentario <> '')
  );
$$;
revoke all on function public.registrar_visita() from public;
revoke all on function public.resumen_interacciones() from public;
grant execute on function public.registrar_visita() to anon, authenticated;
grant execute on function public.resumen_interacciones() to anon, authenticated;

-- 3) Solicitudes de eliminacion (Ley 1581 de 2012): solo se pueden enviar, no leer --
create table public.solicitudes_eliminacion (
  id uuid primary key default gen_random_uuid(),
  creado timestamptz not null default now(),
  alias text not null check (char_length(alias) between 2 and 40),
  contacto text not null check (char_length(contacto) between 5 and 120),
  detalle text check (detalle is null or char_length(detalle) <= 500)
);
alter table public.solicitudes_eliminacion enable row level security;
revoke all on public.solicitudes_eliminacion from anon, authenticated;
grant insert (alias, contacto, detalle) on public.solicitudes_eliminacion to anon, authenticated;
create policy "enviar solicitud" on public.solicitudes_eliminacion
  for insert to anon, authenticated with check (true);
-- Tu revisas las solicitudes en Table Editor (con tu cuenta de Supabase) y borras el registro a mano.
