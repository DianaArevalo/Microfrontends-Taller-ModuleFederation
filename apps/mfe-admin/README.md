# ⚙️ mfe-admin — Administración

<p align="center">
  <strong>Zona transversal de administración del ecosistema NUTRIA</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Multi--Zones-Next.js-blueviolet" alt="Multi-Zones">
  <img src="https://img.shields.io/badge/Module%20Federation-Hybrid-orange" alt="Module Federation">
  <img src="https://img.shields.io/badge/basePath-%2Fadmin-yellow" alt="basePath /admin">
</p>

---

## 📖 Descripción

Zona transversal de administración de **NUTRIA**. Se sirve como zona Multi-Zone bajo `/admin` y consume componentes
compartidos en **tiempo de ejecución** (CLIENT-ONLY) desde los remotos de Module Federation:
`design_system`, `shell_nav` y `auth_widget`.

---

## 🏗️ Estructura de carpetas

```text
mfe-admin/
│
├── app/
│   ├── errores/
│   │   └── page.tsx
│   ├── auditoria/
│   │   └── page.tsx
│   ├── parametros-pension/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── remote/
│   │   ├── shell-nav.tsx
│   │   ├── design-system.tsx
│   │   ├── auth-widget.tsx
│   │   └── makeRemote.ts
│   ├── seguridad/
│   ├── errores/
│   ├── auditoria/
│   └── parametros-pension/
│
├── features/
│   └── admin/
│       ├── seguridad/
│       │   ├── accesos/
│       │   ├── roles/
│       │   └── permisos/
│       ├── errores/
│       ├── auditoria/
│       └── parametros-pension/
│           ├── services/
│           ├── types/
│           ├── validations/
│           └── components/
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
├── types/
└── validations/
```

---

## 🗂️ Responsabilidades

### `app/`

Contiene las rutas y páginas de Next.js.

**`app/admin/page.tsx`**
- Punto de entrada de la página de Admin.
- Utiliza los componentes necesarios para construir la interfaz.

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
- `hooks/` → lógica React relacionada con la carga de remotos.
- `lib/federation/` → infraestructura de Module Federation.