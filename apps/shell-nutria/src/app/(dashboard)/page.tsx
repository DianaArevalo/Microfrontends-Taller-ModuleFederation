import Link from 'next/link';
import type { ReactNode } from 'react';

const DOMAINS: Array<{ href: string; cls: string; icon: string; title: string; desc: string; path: string }> = [
  {
    href: '/afiliados',
    cls: 'nd-d-afiliados',
    icon: 'Af',
    title: 'Afiliados',
    desc: 'Alta, consulta y estado de los afiliados al sistema.',
    path: '/afiliados',
  },
  {
    href: '/aportes',
    cls: 'nd-d-aportes',
    icon: 'Ap',
    title: 'Aportes',
    desc: 'Registro y seguimiento de aportes por período.',
    path: '/aportes',
  },
  {
    href: '/historial-laboral',
    cls: 'nd-d-historial',
    icon: 'Hl',
    title: 'Historial laboral',
    desc: 'Trayectoria laboral asociada a cada afiliado.',
    path: '/historial-laboral',
  },
  {
    href: '/pensiones',
    cls: 'nd-d-pensiones',
    icon: 'Pe',
    title: 'Pensiones',
    desc: 'Solicitudes, requisitos y pensiones otorgadas.',
    path: '/pensiones',
  },
  {
    href: '/empresas',
    cls: 'nd-d-empresas',
    icon: 'Em',
    title: 'Empresas',
    desc: 'Empresas aportantes y su estado de deuda.',
    path: '/empresas',
  },
  {
    href: '/admin',
    cls: 'nd-d-admin',
    icon: 'Ad',
    title: 'Administración',
    desc: 'Seguridad, errores, auditoría y parámetros.',
    path: '/admin',
  },
];

export default function DashboardPage(): ReactNode {
  return (
    <>
      <div className="nd-nav">
        <div className="nd-nav-inner">
          <div className="nd-wordmark">
            NUTRIA<span>.</span>
          </div>
          <div className="nd-nav-links">
            <a href="#about">Qué es</a>
            <a href="#arquitectura">Arquitectura</a>
            <a href="#dominios">Dominios</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <Link href="/login" className="nd-btn nd-btn-primary">
            Iniciar sesión
          </Link>
        </div>
      </div>

      <div className="wrap">
        <div className="nd-hero">
          <span className="nd-eyebrow">Laboratorio de microfrontends orientados al dominio</span>
          <h1>Sistema de pensiones NUTRIA</h1>
          <p className="nd-lead">
            Gestión moderna de información pensional — construida como taller académico de arquitectura frontend con
            microfrontends, no como un producto real de pensiones.
          </p>
          <div className="nd-hero-cta">
            <Link href="/login" className="nd-btn nd-btn-primary">
              Iniciar sesión
            </Link>
            <a href="#about" className="nd-link">
              ¿Qué es este proyecto? ↓
            </a>
          </div>
          <div className="nd-badge-row">
            <span className="nd-badge nd-c1">Next.js 15</span>
            <span className="nd-badge nd-c2">TypeScript 5.x</span>
            <span className="nd-badge nd-c3">Multi-Zones</span>
            <span className="nd-badge nd-c4">Module Federation · Híbrido</span>
            <span className="nd-badge nd-c5">pnpm workspaces</span>
            <span className="nd-badge nd-status">En desarrollo</span>
          </div>
        </div>
      </div>

      <div className="nd-about" id="about">
        <div className="wrap">
          <div className="nd-section-head">
            <span className="nd-tag">¿Quiénes somos?</span>
            <h2>Un taller, no un producto</h2>
            <p>
              NUTRIA es un laboratorio de desarrollo frontend orientado a construir una aplicación de gestión de
              pensiones usando una arquitectura de microfrontends orientados al dominio.
            </p>
          </div>
          <div className="nd-about-grid">
            <div className="nd-about-card">
              <span className="nd-num">¿Qué hacemos?</span>
              <h3>Practicar arquitectura, no resolver pensiones</h3>
              <p>
                El objetivo es aprender a dividir un frontend en zonas independientes por dominio — Afiliados, Aportes,
                Historial Laboral, Pensiones, Empresas y Administración — cada una como su propia aplicación Next.js.
              </p>
            </div>
            <div className="nd-about-card">
              <span className="nd-num">Estado actual</span>
              <h3>Esqueleto arquitectónico</h3>
              <p>
                Este repositorio contiene la base: apps, rutas, estructura de carpetas y configuración. Las
                funcionalidades de cada dominio y el backend real todavía están por construirse.
              </p>
            </div>
          </div>
          <div className="nd-disclaimer">
            <strong>Nota del taller:</strong> el backend aún no está disponible — los datos que verás en cada zona son
            simulados. Esta pantalla es un ejercicio de diseño de arquitectura frontend, no una entidad prestadora de
            pensiones.
          </div>
        </div>
      </div>

      <div className="wrap">
        <section id="arquitectura">
          <div className="nd-section-head">
            <span className="nd-tag">Cómo está construido</span>
            <h2>Multi-Zones + Module Federation, híbrido</h2>
            <p>Dos mecanismos distintos, cada uno resolviendo un problema distinto.</p>
          </div>
          <div className="nd-arch-grid">
            <div className="nd-arch-card nd-a">
              <h3>Multi-Zones</h3>
              <span className="nd-sub">separación principal</span>
              <ul>
                <li>Cada dominio es una aplicación Next.js 15 completa e independiente.</li>
                <li>
                  shell-nutria enruta por <code>basePath</code> hacia cada zona.
                </li>
                <li>Soporte completo de App Router, SSR y RSC.</li>
              </ul>
            </div>
            <div className="nd-arch-card nd-b">
              <h3>Module Federation</h3>
              <span className="nd-sub">componentes compartidos · client-only</span>
              <ul>
                <li>design-system, shell-nav y auth-widget se cargan en tiempo de ejecución.</li>
                <li>Se limita a piezas pequeñas de cliente, nunca páginas completas.</li>
                <li>Servidos como remotos independientes vía Rsbuild.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="nd-domains" id="dominios">
        <div className="wrap" style={{ padding: '64px 0' }}>
          <div className="nd-section-head">
            <span className="nd-tag">Gestión de afiliados y más</span>
            <h2>Seis zonas, un dominio cada una</h2>
          </div>
          <div className="nd-domain-grid">
            {DOMAINS.map((d) => (
              <Link key={d.href} href={d.href} className={`nd-domain-card ${d.cls}`}>
                <div className="nd-icon">{d.icon}</div>
                <h4>{d.title}</h4>
                <p>{d.desc}</p>
                <span className="nd-path">{d.path}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <section id="roadmap">
          <div className="nd-section-head">
            <span className="nd-tag">Hacia dónde va el taller</span>
            <h2>Roadmap</h2>
          </div>
          <div className="nd-roadmap">
            <div className="nd-roadmap-track">
              <div className="nd-roadmap-step nd-current">
                <span className="nd-n">01</span>
                <h4>Esqueleto</h4>
                <p>Apps, rutas, mocks y configuración.</p>
              </div>
              <div className="nd-roadmap-step">
                <span className="nd-n">02</span>
                <h4>Dominios</h4>
                <p>Funcionalidad real por MFE.</p>
              </div>
              <div className="nd-roadmap-step">
                <span className="nd-n">03</span>
                <h4>Backend</h4>
                <p>Integración con API REST (Oracle/Java/.NET).</p>
              </div>
              <div className="nd-roadmap-step">
                <span className="nd-n">04</span>
                <h4>Auth &amp; RBAC</h4>
                <p>Sesión real y control de acceso por rol.</p>
              </div>
              <div className="nd-roadmap-step">
                <span className="nd-n">05</span>
                <h4>Calidad</h4>
                <p>Tests, CI/CD y despliegue por zona.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="nd-footer">
        <div className="wrap">
          <div className="nd-footer-inner">
            <div className="nd-footer-links">
              <Link href="/aportes">Aportes</Link>
              <span>·</span>
              <Link href="/historial-laboral">Historial laboral</Link>
              <span>·</span>
              <Link href="/pensiones">Pensiones</Link>
              <span>·</span>
              <Link href="/empresas">Empresas</Link>
            </div>
            <div className="nd-footer-note">shell-nutria · taller de microfrontends</div>
          </div>
        </div>
      </footer>
    </>
  );
}