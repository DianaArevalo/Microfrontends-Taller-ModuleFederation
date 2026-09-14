import type { ReactNode } from 'react';
import { Card } from '@/components/ds';

export default function AuditoriaPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Auditoría</h1>
        <p className="nt-page-desc">Placeholder del módulo de auditoría.</p>
      </header>
      <div className="nt-section">
        <Card title="Eventos de auditoría" note="Sin datos — pendiente de integración">
          <p className="nt-page-desc">Registro de eventos de las zonas por implementar.</p>
        </Card>
      </div>
    </div>
  );
}