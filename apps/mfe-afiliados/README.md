# 👤 mfe-afiliados — Afiliados

<p align="center">
  <strong>Zona de afiliados del ecosistema NUTRIA</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Multi--Zones-Next.js-blueviolet" alt="Multi-Zones">
  <img src="https://img.shields.io/badge/Module%20Federation-Hybrid-orange" alt="Module Federation">
  <img src="https://img.shields.io/badge/basePath-%2Fafiliados-yellow" alt="basePath /afiliados">
</p>

---

## 📖 Descripción

Zona de dominio de afiliados de **NUTRIA** (PKG_AFILIADOS). Se sirve como zona Multi-Zone bajo `/afiliados` y consume
componentes compartidos en **tiempo de ejecución** (CLIENT-ONLY) desde los remotos de Module Federation:
`design_system`, `shell_nav` y `auth_widget`.

---

## 🏗️ Estructura de carpetas

```text
mfe-afiliados/
│
├── app/
│   ├── afiliados/
│   │   ├── page.tsx
│   │   ├── crear/
│   │   │   └── page.tsx
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── editar/
│   │           └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── remote/
│   │   ├── shell-nav.tsx
│   │   ├── design-system.tsx
│   │   ├── auth-widget.tsx
│   │   └── makeRemote.ts
│   └── afiliados/
│       ├── afiliado-detail.tsx
│       ├── afiliado-form.tsx
│       ├── afiliado-status.tsx
│       └── afiliado-table.tsx
│
├── features/
│   └── afiliados/
│       ├── services/
│       ├── types/
│       └── validations/
│
├── hooks/
│   └── useRemote.ts
│
├── lib/
│   └── federation/
│       ├── config.ts
│       ├── runtime.ts
│       └── types.ts
│
└── next.config.ts
```

---

## 🗂️ Responsabilidades

### `app/`

Contiene las rutas y páginas de Next.js.

**`app/afiliados/page.tsx`**
- Listado de afiliados con `AfiliadoTable`.
- Página raíz `app/page.tsx` redirige a `/afiliados`.

**`app/afiliados/crear/page.tsx`**
- Registro de un afiliado nuevo con `AfiliadoForm` (SP_ADD_AFILIADO pendiente).

**`app/afiliados/[id]/page.tsx`**
- Ficha/detalle del afiliado con `AfiliadoDetail`.

**`app/afiliados/[id]/editar/page.tsx`**
- Edición con `AfiliadoForm` usando valores iniciales del afiliado (SP_UPDATE_AFILIADO pendiente).

### `components/remote/`

Contiene los componentes concretos consumidos mediante Module Federation.

**`components/remote/shell-nav.tsx`**
- Consume componentes del remoto `shell_nav`.
- Incluye componentes como `SidebarNav` y `Topbar`.

**`components/remote/design-system.tsx`**
- Consume componentes del remoto `design_system`.
- Incluye componentes como `Button`, `Card`, `Badge` y `Progress`.

**`components/remote/auth-widget.tsx`**
- Consume componentes del remoto `auth_widget`.
- Incluye componentes como `AuthWidget` y `LoginForm`.

**`components/remote/makeRemote.ts`**
- Factory encargada de convertir un módulo remoto en un componente React.
- No es un hook.

### `components/afiliados/`

Componentes locales de UI de la zona de afiliados (dependen del remoto `design_system`).

- `afiliado-detail.tsx` → ficha del afiliado.
- `afiliado-form.tsx` → formulario cliente con validación (`validarAfiliadoForm`).
- `afiliado-status.tsx` → `Badge` según el estado (`activo`/`inactivo`/`pensionado`).
- `afiliado-table.tsx` → tabla del listado.

### `features/afiliados/`

Feature-slice del dominio de afiliados:

- `services/` → capa de datos: `mocks.ts` y `services/afiliados.ts` (contratos `SP_*` documentados en `TODO(api)`).
- `types/` → tipos del dominio (`Afiliado`, `AfiliadoNuevo`, estados).
- `validations/` → validación del formulario (`TIPO_DOCUMENTO`, `validarAfiliadoForm`).

### `hooks/`

**`hooks/useRemote.ts`**
- Hook React encargado de gestionar la carga de módulos remotos.
- Maneja estados como `loading`, `ready` y `error`.
- Utiliza el runtime de Federation para cargar los módulos.
- Aprovecha el cache para evitar cargas innecesarias.

### `lib/federation/`

Contiene la infraestructura de Module Federation.

**`lib/federation/config.ts`**
- Configura e inicializa Module Federation.
- Define/obtiene las URLs de los remotos.
- Utiliza:
  - `NEXT_PUBLIC_DS_URL`
  - `NEXT_PUBLIC_SHELL_NAV_URL`
  - `NEXT_PUBLIC_AUTH_WIDGET_URL`

**`lib/federation/runtime.ts`**
- Se encarga de cargar los módulos remotos.
- Gestiona el cache de los módulos cargados.

**`lib/federation/types.ts`**
- Contiene los tipos utilizados por la infraestructura de Module Federation.

---

## 🔀 Flujo de carga de un componente remoto

```text
Página
  ↓
components/remote/*
  ↓
makeRemote.ts
  ↓
useRemote.ts
  ↓
lib/federation/config.ts
  ↓
lib/federation/runtime.ts
  ↓
Module Federation
  ↓
Remote
  ↓
Componente remoto
```

Para seguir el recorrido de una funcionalidad que renderiza un componente remoto, empieza por la página (`app/`). La
página importa el componente concreto desde `components/remote/`, que fue creado por la factory `makeRemote.ts`. Esa
factory delega en el hook `useRemote.ts`, quien a su vez usa `lib/federation/config.ts` (inicialización de los remotos)
y `lib/federation/runtime.ts` (carga y cache) para obtener el módulo del remoto federado. Una vez cargado, el componente
remoto se resuelve y se renderiza. Ante errores de carga, `useRemote.ts` expone el estado `error` para que el componente
decida su fallback.

---

## 🧩 Separación de responsabilidades

- `app/` → rutas y páginas de Next.js.
- `components/remote/` → componentes concretos provenientes de otros remotos.
- `components/afiliados/` → UI local de la zona de afiliados.
- `hooks/` → lógica React relacionada con la carga de remotos.
- `lib/federation/` → infraestructura de Module Federation.
