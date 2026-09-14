import type { ReactNode } from 'react';
import { Card } from '@/components/ds';

export default function ErroresPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Errores</h1>
        <p className="nt-page-desc">Placeholder del módulo de errores.</p>
      </header>
      <div className="nt-section">
        <Card title="Bitácora de errores" note="Sin datos — pendiente de integración">
          <p className="nt-page-desc">Consumo centralizado de trazabilidad por implementar.</p>
        </Card>
      </div>
    </div>
  );
}