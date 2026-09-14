import type { ReactNode } from 'react';
import { Card } from '@/components/ds';

export default function ParametrosPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Parámetros</h1>
        <p className="nt-page-desc">Placeholder del módulo de parámetros.</p>
      </header>
      <div className="nt-section">
        <Card title="Parámetros del sistema" note="Sin datos — pendiente de integración">
          <p className="nt-page-desc">Configuración global (p. ej. requisito de semanas) por implementar.</p>
        </Card>
      </div>
    </div>
  );
}