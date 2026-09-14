import Link from 'next/link';
import { Badge } from '@/components/ds';
import type { ReactNode } from 'react';

const ZONES: Array<{ href: string; title: string; desc: string }> = [
  { href: '/afiliados', title: 'Afiliados', desc: 'Registro, fichas y estado de afiliados.' },
  { href: '/aportes', title: 'Aportes', desc: 'Historial de aportes y períodos cotizados.' },
  { href: '/historial-laboral', title: 'Historial laboral', desc: 'Trayectoria laboral e historial de empresas.' },
  { href: '/pensiones', title: 'Pensiones', desc: 'Evaluación, semanas cotizadas y trámites de pensión.' },
  { href: '/empresas', title: 'Empresas', desc: 'Registro patronal y gestión de empresas.' },
  { href: '/admin', title: 'Administración', desc: 'Errores, auditoría y parámetros del sistema.' },
];

function ZoneCard({ zone }: { zone: (typeof ZONES)[number] }): ReactNode {
  return (
    <Link href={zone.href} className="nt-link-card">
      <span className="nt-link-card-title">{zone.title}</span>
      <span className="nt-link-card-desc">{zone.desc}</span>
      <span>
        <Badge tone="success">Zona</Badge>
      </span>
    </Link>
  );
}

export default function HomePage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Panel de control</h1>
        <p className="nt-page-desc">
          NUTRIA es un laboratorio frontend de microfrontends orientados al dominio. Cada tarjeta enruta a una zona
          independiente desplegada como Microfrontend (Multi-Zones); los componentes compartidos se cargan en tiempo de
          ejecución vía Module Federation.
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">Next.js 15 · App Router</Badge>
          <Badge>Multi-Zones</Badge>
          <Badge>Module Federation · CLIENT-ONLY</Badge>
          <Badge>TypeScript</Badge>
        </div>
      </header>

      <div className="nt-grid">
        {ZONES.map((zone) => (
          <ZoneCard key={zone.href} zone={zone} />
        ))}
      </div>
    </div>
  );
}