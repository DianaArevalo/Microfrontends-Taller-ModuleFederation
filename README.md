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

**NUTRIA** es un laboratorio de desarrollo frontend orientado a la construcción de una aplicación de gestión de pensiones utilizando una arquitectura de **Microfrontends orientados al dominio**.

La solución divide el frontend en diferentes **zonas independientes**, donde cada zona representa una responsabilidad funcional específica del sistema.

La arquitectura utiliza un enfoque híbrido basado principalmente en:

- ⚛️ **Next.js 15**
- 🟦 **TypeScript**
- 🧭 **App Router**
- 🧩 **Multi-Zones**
- 🔗 **Module Federation**
- 🖥️ **Server Components**
- 🌐 **Client Components**
- 🔐 **RBAC — Role-Based Access Control**
- 🔌 **API REST** como capa de integración con el backend

> 🎯 **Objetivo:** construir un frontend modular, desacoplado y organizado por dominios, donde cada zona pueda evolucionar y desplegarse de manera independiente.

---

# 🏗️ Arquitectura

NUTRIA utiliza una arquitectura híbrida:

```text
                              🏛️ NUTRIA
                                  │
                                  ▼
                        ┌───────────────────┐
                        │   shell-nutria    │
                        │      🏠 HOST      │
                        │                   │
                        │ Layout            │
                        │ Auth              │
                        │ Dashboard         │
                        │ Gateway / Routing │
                        └─────────┬─────────┘
                                  │
                              Multi-Zones
                                  │
          ┌───────────────┬───────┼────────┬───────────────┐
          │               │       │        │               │
          ▼               ▼       ▼        ▼               ▼
     👤 Afiliados     💰 Aportes  📋 Hist.  🏦 Pensiones   🏢 Empresas
        MFE              MFE       Laboral      MFE           MFE
          │               │       │        │               │
          └───────────────┴───────┼────────┴───────────────┘
                                  │
                                  ▼
                              ⚙️ Admin
                                MFE


                 ┌────────────────────────────────┐
                 │     🔗 Module Federation       │
                 │                                │
                 │  🎨 design-system              │
                 │  🧭 shell-nav                  │
                 │  🔐 auth-widget                │
                 │                                │
                 │        CLIENT-ONLY             │
                 └────────────────────────────────┘
