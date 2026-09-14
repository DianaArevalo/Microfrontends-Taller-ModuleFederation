import Link from 'next/link';
import type { ReactNode } from 'react';
import { pensionesMock } from '@/lib/mocks';
import { Badge, Card, Progress } from '@/components/ds';

const estadoTone: Record<string, 'success' | 'pending' | 'danger'> = {
  causada: 'success',
  'en-tramite': 'pending',
  rechazada: 'danger',
};

export default function PensionesPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Pensiones</h1>
        <p className="nt-page-desc">
          Esqueleto del dominio de pensiones: evaluaciones, semanas cotizadas y trámites (zona bajo{' '}
          <code>/pensiones</code>).
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-pensiones</Badge>
          <Badge>Datos de prueba</Badge>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Trámites de pensión" note="Registros simulados">
          <div className="nt-cta-row">
            <Link href="/nuevo" className="nt-cta">
              Tramitar pensión
            </Link>
          </div>

          <div className="nt-grid" style={{ gridTemplateColumns: '1fr', display: 'grid' }}>
            {pensionesMock.map((pension) => (
              <Card key={pension.id} title={pension.afiliado} note={`${pension.modalidad} · ${pension.estado}`}>
                <Progress value={pension.semanasCotizadas} max={pension.requisitoSemanas} label={`${pension.semanasCotizadas} / ${pension.requisitoSemanas} semanas`} />
                <div>
                  <Badge tone={estadoTone[pension.estado]}>{pension.estado}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}