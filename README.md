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
   (4101)           (4102)   laboral   (4104)          (4105)
                            (4103)
        │               │       │        │               │
        ├───────────────┴───────┼────────┴───────────────┘
        │                       ▼
        │                   admin (4106)
        ▼
   Module Federation · CLIENT-ONLY
        │
   ┌────┴─────┬─────────┐
   ▼          ▼         ▼
design-system shell-nav auth-widget
   (4111)      (4112)    (4113)
```

Cada zona se sirve bajo un `basePath` (`/afiliados`, `/aportes`, `/historial-laboral`, `/pensiones`, `/empresas`,
`/admin`) y el shell enruta hacia ellas. Componentes como la barra de navegación, el topbar, los badges y botones se
cargan en tiempo de ejecución desde los remotos federados.

> Detalle completo: [docs/arquitectura.md](docs/arquitectura.md)

---

## 🗂️ Microfrontends por dominio

| 🧩 Zona | 🏷️ Dominio | 🌐 Base path | Puerto dev |
|---|---|---|---|
| `shell-nutria` | Transversal | `/` | 4100 |
| `mfe-afiliados` | Afiliados | `/afiliados` | 4101 |
| `mfe-aportes` | Aportes | `/aportes` | 4102 |
| `mfe-historial-laboral` | Historial laboral | `/historial-laboral` | 4103 |
| `mfe-pensiones` | Pensiones | `/pensiones` | 4104 |
| `mfe-empresas` | Empresas | `/empresas` | 4105 |
| `mfe-admin` | Administración | `/admin` | 4106 |

---

## 🚀 Inicio rápido

**Requisitos:**
- Node.js ≥ 18.18 (recomendado 20/22)
- [pnpm](https://pnpm.io/) ≥ 9 (el proyecto fija `pnpm@10.28.0` vía `packageManager`)

> ⚠️ Este monorepo usa **pnpm** como gestor de paquetes (workspaces vía `pnpm-workspace.yaml`).
> No uses `npm install` / `npm run`; el lockfile que se versiona es `pnpm-lock.yaml`.

```bash
pnpm install
pnpm dev              # 7 apps Next.js + 3 remotos Module Federation
```

Abre **http://localhost:4100** (shell). La barra lateral navega a cada dominio y los componentes compartidos se cargan
desde los remotos (4111–4113).

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