# 🏛️ NUTRIA — Arquitectura

Laboratorio frontend de **microfrontends orientados al dominio** sobre **Next.js 15 (App Router)**, con enfoque híbrido:

- **Multi-Zones** → separación principal de los dominios (cada dominio es una app Next.js independiente).
- **Module Federation** → componentes pequeños compartidos en tiempo de ejecución (CLIENT-ONLY).

```text
                            NUTRIA
                               │
                               ▼
                       ┌───────────────┐
                       │ shell-nutria  │   HOST · gateway de rutas · puerto 4100
                       └───────┬───────┘
                               │  rewrites (/<zona> → <zona>)
                       Multi-Zones
                               │
        ┌───────────┬───────┼───────────┬───────────┬───────────┐
        ▼           ▼       ▼           ▼           ▼           ▼
   afiliados     aportes  historial   pensiones    empresas    admin
   4101          4102     4103        4104         4105        4106
        │           │       │           │           │
        └───────────┴───────┼───────────┴───────────┘
                            │
                          admin
                           MFE

              Module Federation (CLIENT-ONLY)
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
 design-system    shell-nav   auth-widget
   (4111)          (4112)       (4113)
```

---

## 1. Zonas (Multi-Zones)

Cada zona es una **app Next.js completa** (layout, rutas y build propios). Todas usan **App Router**, nunca Pages Router.

| Zona | Paquete | basePath | Puerto dev | Responsabilidad |
|---|---|---|---|---|
| Shell HOST | `shell-nutria` | — (raíz) | 4100 | Dashboard, login, gateway de rutas |
| Afiliados | `mfe-afiliados` | `/afiliados` | 4101 | Registro y fichas de afiliados |
| Aportes | `mfe-aportes` | `/aportes` | 4102 | Historial de aportes |
| Historial laboral | `mfe-historial-laboral` | `/historial-laboral` | 4103 | Trayectoria laboral |
| Pensiones | `mfe-pensiones` | `/pensiones` | 4104 | Evaluaciones y trámites |
| Empresas | `mfe-empresas` | `/empresas` | 4105 | Registro patronal |
| Administración | `mfe-admin` | `/admin` | 4106 | Errores, auditoría, parámetros |

**Cómo funciona el enrutado:**

- Las zonas configuran `basePath` (p. ej. `mfe-aportes` con `basePath: '/aportes'`), de modo que todas sus URLs y activos (`/_next`) quedan bajo ese prefijo.
- `shell-nutria` actúa como **gateway**: en `next.config.ts` define `rewrites` que reenvían `/afiliados`, `/aportes`, `/historial-laboral`, `/pensiones`, `/empresas` y `/admin` al puerto/dominio de cada zona.
- Los URLs significantes deben ser únicos por zona: el shell no declara rutas `/afiliados`, etc.
- **En producción**, se sobrescriben las variables `ZONE_*` (ver §4) con los dominios desplegados de cada zona.

> Regla práctica para enlaces:
> - Enlaces **intra-zona** → `next/link` con ruta relativa (`/nuevo`), Next añade el `basePath`.
> - Enlaces **inter-zona** → `<a href="/aportes">` (ruta absoluta del dominio), el shell la reenvía.

---

## 2. Componentes compartidos (Module Federation — CLIENT-ONLY)

El plugin de Module Federation de Next.js oficialmente soporta **Pages Router**; para mantener **App Router**, los componentes compartidos se sirven como **remotos** independientes y se consumen en **tiempo de ejecución** desde el cliente.

| Remoto | Paquete | Container (MF) | Puerto dev | Expone |
|---|---|---|---|---|
| Design System | `@nutria/design-system` | `design_system` | 4111 | `Button`, `Badge`, `Card`, `Progress` |
| Nav del shell | `@nutria/shell-nav` | `shell_nav` | 4112 | `SidebarNav`, `Topbar` |
| Widget de auth | `@nutria/auth-widget` | `auth_widget` | 4113 | `AuthWidget`, `LoginForm` |

**Servidor de cada remoto:** los paquetes están construidos con **Rsbuild** (`@module-federation/rsbuild-plugin`) y sirven `remoteEntry.js` en su puerto. Incluyen una página de vista previa propia (`src/index.tsx`) para inspeccionar el remoto en el navegador.

**Consumo en las apps:** `src/lib/federation.tsx` (idéntico en cada app):

1. `init({ name, remotes })` registra la URL de cada remoto (URL base sobrescribible con `NEXT_PUBLIC_DS_URL`, `NEXT_PUBLIC_SHELL_NAV_URL`, `NEXT_PUBLIC_AUTH_WIDGET_URL`).
2. `useRemote(scope, moduleId)` carga el módulo con `loadRemote('scope/moduleId')` y lo cachea.
3. `makeRemote(...)` convierte el remoto en un componente con props tipadas; en el servidor solo se renderiza un fallback (sin SSR del remoto, sin errores de hidratación).

### ¿Por qué CLIENT-ONLY?

La documentación oficial de Module Federation para Next.js 15 indica soporte exclusivo de Pages Router. Este esqueleto adopta el patrón recomendado: **Multi-Zones como integración primaria** + **federación de componentes pequeños en el cliente**, evitando el SSR de remotos. Queda preparado para migrar a un bróker/SSR nativo cuando el ecosistema lo permita.

---

## 3. Estructura del repositorio

```text
nutria/
├── apps/
│   ├── shell-nutria/
│   ├── mfe-afiliados/
│   ├── mfe-aportes/
│   ├── mfe-historial-laboral/
│   ├── mfe-pensiones/
│   ├── mfe-empresas/
│   └── mfe-admin/
├── packages/            # Remotos Module Federation (Rsbuild)
│   ├── design-system/
│   ├── shell-nav/
│   └── auth-widget/
├── docs/
├── package.json         # workspace raíz (scripts orquestados; pnpm)
├── pnpm-workspace.yaml  # definición del workspace pnpm (apps/*, packages/*)
├── tsconfig.base.json
└── README.md
```

Cada app tiene su propio `tsconfig.json` (hereda de `tsconfig.base.json`), `next.config.ts`, `next-env.d.ts` y `src/` con:

```text
src/
├── app/            # App Router (layout + rutas del dominio)
├── components/
│   ├── chrome.tsx  # Wrappers cliente de shell-nav y auth-widget
│   └── ds.tsx      # Wrappers cliente del design-system
├── lib/
│   ├── federation.tsx  # init + useRemote + makeRemote
│   └── mocks.ts        # Datos de prueba (backend NO disponible aún)
└── types/               # Contratos de dominio (interfaces)
```

---

## 4. Variables de entorno

| Variable | Descripción | Por defecto |
|---|---|---|
| `NEXT_PUBLIC_DS_URL` | URL base del remoto design-system | `http://localhost:4111` |
| `NEXT_PUBLIC_SHELL_NAV_URL` | URL base del remoto shell-nav | `http://localhost:4112` |
| `NEXT_PUBLIC_AUTH_WIDGET_URL` | URL base del remoto auth-widget | `http://localhost:4113` |
| `ZONE_AFILIADOS` … `ZONE_ADMIN` | Dominios de las zonas (solo shell) | `http://localhost:300N` |

Cada app incluye un `.env.example`. Los valores por defecto funcionan en desarrollo local sin configuración.

---

## 5. Comandos

> Este monorepo usa **pnpm** como gestor de paquetes (definido en `pnpm-workspace.yaml` y en `packageManager`).
> No uses `npm install` / `npm run`. El lockfile versionado es `pnpm-lock.yaml`.

```bash
pnpm install            # instala todos los workspaces (pnpm 10: node_modules enlazados por store)

pnpm dev                # 10 procesos: 7 apps Next + 3 remotos Rsbuild
pnpm dev:apps           # solo las 7 apps Next.js
pnpm dev:remotes        # solo los 3 remotos Rsbuild
pnpm dev:shell          # solo el shell (requiere zonas/remotos encendidos para ver todo)

pnpm build              # next build en apps + rsbuild build en packages
pnpm build:apps         # build solo de las 7 apps Next.js
pnpm build:remotes      # build solo de los 3 remotos Rsbuild
pnpm typecheck          # tsc --noEmit en todos los workspaces

# Levantar cada pieza en un puerto propio
pnpm dev:afiliados      # -> http://localhost:4101/afiliados
pnpm dev:aportes        # -> http://localhost:4102/aportes
pnpm dev:design-system  # -> http://localhost:4111 (vista previa remoto)
```

**Flujo de verificación manual:** con `pnpm dev` abre `http://localhost:4100`. La navegación del shell enruta a cada zona; la barra lateral y los badges provienen de los remotos federados.

---

## 6. Alcance actual (esqueleto)

- [x] Monorepo pnpm workspaces (`pnpm-workspace.yaml`) con apps y packages.
- [x] 7 apps Next.js 15 (App Router) con layout, rutas y mocks mínimos por dominio.
- [x] Gateway de rutas Multi-Zones en el shell (`rewrites` + `basePath`).
- [x] 3 remotos de Module Federation (Rsbuild) consumidos en tiempo de ejecución.
- [x] Interfaz y placeholders: `auth-widget`, formularios y listados sin backend.

**Pendiente (fuera de alcance de esta tarea):**

- Integración real con backend (API REST), Oracle, Java/.NET.
- Autenticación real (JWT/SSO), RBAC completo.
- Testing (unit/e2e), CI/CD y despliegue (Vercel/kubernetes).
- SSR de remotos (sujeto a capacidad futura del ecosistema).