# 🏛️ NUTRIA — Frontend Microfrontends

<p align="center">
  <strong>Laboratorio de Microfrontends orientados al dominio</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js 15">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Architecture-Microfrontends-purple" alt="Microfrontends">
  <img src="https://img.shields.io/badge/Multi--Zones-Next.js-blueviolet" alt="Multi-Zones">
  <img src="https://img.shields.io/badge/Module%20Federation-Hybrid-orange" alt="Module Federation">
  <img src="https://img.shields.io/badge/Status-In%20Development-yellow" alt="Status">
</p>

---

## 📖 Descripción

**NUTRIA** es un laboratorio de desarrollo frontend orientado a la construcción de una aplicación de gestión de
pensiones utilizando una arquitectura de **Microfrontends orientados al dominio**.

La solución divide el frontend en **zonas independientes** (cada una es una app Next.js propia) y comparte componentes
pequeños en **tiempo de ejecución** mediante Module Federation.

- ⚛️ Next.js 15 · 🟦 TypeScript · 🧭 App Router
- 🧩 Multi-Zones → separación principal de los dominios
- 🔗 Module Federation → componentes compartidos en runtime (CLIENT-ONLY)
- ▫️ Sin Pages Router · ▫️ Backend NO disponible (datos simulados)

> Este repositorio contiene el **esqueleto arquitectónico inicial**: aplicaciones, rutas, estructura de carpetas y
> configuración base. Las funcionalidades de cada dominio se construirán posteriormente.

---

## 🏗️ Arquitectura

```text
                                NUTRIA
                                   │
                                   ▼
                         ┌───────────────────┐
                         │   shell-nutria    │   HOST · gateway /<dominio> → zona
                         │      / dashboard  │
                         └─────────┬─────────┘
                                   │ Multi-Zones (rewrites)
        ┌───────────────┬───────┼────────┬───────────────┐
        ▼               ▼       ▼        ▼               ▼
   afiliados        aportes  historial pensiones      empresas
                            laboral
        │               │       │        │               │
        ├───────────────┴───────┼────────┴───────────────┘
        │                       ▼
        │                       admin
        ▼
   Module Federation · CLIENT-ONLY
        │
   ┌────┴─────┬─────────┐
   ▼          ▼         ▼
design-system shell-nav auth-widget
```

Cada zona se sirve bajo un `basePath` (`/afiliados`, `/aportes`, `/historial-laboral`, `/pensiones`, `/empresas`,
`/admin`) y el shell enruta hacia ellas. Componentes como la barra de navegación, el topbar, los badges y botones se
cargan en tiempo de ejecución desde los remotos federados.

> Detalle completo: [docs/arquitectura.md](docs/arquitectura.md)

---

## 🗂️ Microfrontends por dominio

| 🧩 Zona | 🏷️ Dominio | 🌐 Base path |
|---|---|---|
| `shell-nutria` | Transversal | `/` |
| `mfe-afiliados` | Afiliados | `/afiliados` |
| `mfe-aportes` | Aportes | `/aportes` |
| `mfe-historial-laboral` | Historial laboral | `/historial-laboral` |
| `mfe-pensiones` | Pensiones | `/pensiones` |
| `mfe-empresas` | Empresas | `/empresas` |
| `mfe-admin` | Administración | `/admin` |

---

## 🚀 Inicio rápido

**Requisitos:**
- Node.js ≥ 18.18 (recomendado 20/22)
- [pnpm](https://pnpm.io/) ≥ 9 (el proyecto fija `pnpm@10.28.0` vía `packageManager`)

> ⚠️ Este monorepo usa **pnpm** como gestor de paquetes (workspaces vía `pnpm-workspace.yaml`).
> No uses `npm install` / `npm run`; el lockfile que se versiona es `pnpm-lock.yaml`.

### Variables de entorno

Las URLs de los remotos de Module Federation (`design_system`, `shell_nav`, `auth_widget`) **no están hardcodeadas**
en el código: se leen de variables `NEXT_PUBLIC_*` (`NEXT_PUBLIC_DS_URL`, `NEXT_PUBLIC_SHELL_NAV_URL`,
`NEXT_PUBLIC_AUTH_WIDGET_URL`).

Para preparar tu entorno local:

1. Copia la plantilla `.env.example` a `.env.local` en **cada app** y mantén los valores por defecto:
   ```bash
   cp apps/shell-nutria/.env.example apps/shell-nutria/.env.local
   cp apps/mfe-afiliados/.env.example apps/mfe-afiliados/.env.local
   cp apps/mfe-aportes/.env.example  apps/mfe-aportes/.env.local
   cp apps/mfe-historial-laboral/.env.example apps/mfe-historial-laboral/.env.local
   cp apps/mfe-pensiones/.env.example apps/mfe-pensiones/.env.local
   cp apps/mfe-empresas/.env.example apps/mfe-empresas/.env.local
   cp apps/mfe-admin/.env.example apps/mfe-admin/.env.local
   ```
2. Para otros ambientes (QA/prod), define las variables en el entorno de despliegue de cada app.
3. **No subas `.env.local` a Git**: está ignorado vía `.gitignore` (`.env.local`, `.env*.local`).
   `.env.example` sí se versiona como plantilla (sin secretos; valores solo de desarrollo local).
4. Si falta alguna variable, las apps lanzan un error claro en el cliente al inicializar Module Federation:
   el remoto correspondiente no se carga hasta definirla.

> Las `NEXT_PUBLIC_*` son **necesariamente públicas** para el navegador (CLIENT-ONLY): no son secretos, solo
> centralizan la configuración por ambiente fuera del código fuente.

```bash
pnpm install
pnpm dev              # 7 apps Next.js + 3 remotos Module Federation
```

Abre la URL local del shell (el puerto lo asigna la configuración del entorno). La barra lateral navega a cada dominio
y los componentes compartidos se cargan desde los remotos federados.

```bash
pnpm dev:apps         # solo apps (Next.js)
pnpm dev:remotes      # solo remotos (Rsbuild)
pnpm build            # build de todo el monorepo
pnpm typecheck        # typecheck de todos los workspaces
```

---

## 📁 Estructura del repositorio

```text
├── 📦 apps/
│   ├── 🏠 shell-nutria/
│   ├── 👤 mfe-afiliados/
│   ├── 💰 mfe-aportes/
│   ├── 📋 mfe-historial-laboral/
│   ├── 🏦 mfe-pensiones/
│   ├── 🏢 mfe-empresas/
│   └── ⚙️ mfe-admin/
├── 🔗 packages/          # Remotos Module Federation (Rsbuild)
│   ├── 🎨 design-system/
│   ├── 🧭 shell-nav/
│   └── 🔐 auth-widget/
├── 📚 docs/
├── 📄 package.json       # pnpm workspace raíz + scripts orquestados
├── 📄 pnpm-workspace.yaml
└── 📄 tsconfig.base.json
```

---

## 🛣️ Roadmap

1. **Esqueleto arquitectónico** (estado actual) — apps, rutas, mocks y configuración.
2. **Dominios** — desarrollar funcionalidad de cada MFE sobre el esqueleto.
3. **Backend** — integrar API REST (Oracle/Java/.NET) cuando esté disponible.
4. **Auth & RBAC** — autenticación real (JWT/SSO) y control de acceso por rol.
5. **Calidad** — tests, CI/CD y despliegue independiente por zona.