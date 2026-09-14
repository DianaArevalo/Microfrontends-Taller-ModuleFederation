import Link from 'next/link';
import type { ReactNode } from 'react';
import { Badge } from '@/components/ds';

const MODULES = [
  { href: '/errores', title: 'Errores', desc: 'Bitácora de errores y trazabilidad.' },
  { href: '/auditoria', title: 'Auditoría', desc: 'Eventos de auditoría de las zonas.' },
  { href: '/parametros', title: 'Parámetros', desc: 'Parámetros generales del sistema.' },
];

export default function AdminPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Administración</h1>
        <p className="nt-page-desc">
          Zona transversal de administración (zona bajo <code>/admin</code>). RBAC real pendiente de integración.
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-admin</Badge>
          <Badge>RBAC pendiente</Badge>
        </div>
      </header>

      <div className="nt-grid">
        {MODULES.map((mod) => (
          <Link key={mod.href} href={mod.href} className="nt-link-card">
            <span className="nt-link-card-title">{mod.title}</span>
            <span className="nt-link-card-desc">{mod.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}