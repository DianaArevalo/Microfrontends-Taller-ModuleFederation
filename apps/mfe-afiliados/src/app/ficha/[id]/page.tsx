import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { afiliadosMock } from '@/lib/mocks';
import { Badge, Button, Card, Progress } from '@/components/ds';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AfiliadoFichaPage({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const afiliado = afiliadosMock.find((item) => item.id === id);

  if (!afiliado) notFound();

  return (
    <div>
      <header className="nt-page-head">
        <div className="nt-chip-row">
          <Link href="/" className="nt-cta nt-cta--quiet">
            ← Volver al listado
          </Link>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Ficha del afiliado" note="Vista de detalle simulada">
          <p className="nt-page-title" style={{ fontSize: 24, margin: 0 }}>
            {afiliado.nombres} {afiliado.apellidos}
          </p>
          <p className="nt-page-desc" style={{ margin: '6px 0 14px' }}>
            <span className="nt-mono">{afiliado.tipoDocumento} {afiliado.documento}</span> · Afiliado desde{' '}
            <span className="nt-mono">{afiliado.fechaAfiliacion}</span>
          </p>
          <div className="nt-chip-row">
            <Badge tone={afiliado.estado === 'activo' ? 'success' : afiliado.estado === 'inactivo' ? 'pending' : 'danger'}>
              {afiliado.estado}
            </Badge>
          </div>
          <div className="nt-cta-row">
            <Button variant="primary">Editar afiliado</Button>
            <Button variant="outline">Ver historial laboral</Button>
          </div>
        </Card>
      </div>

      <div className="nt-section">
        <Progress
          value={afiliado.semanasCotizadas}
          max={1250}
          label={`${afiliado.semanasCotizadas} / 1.250 semanas cotizadas`}
          note="Requisito vigente 2026"
        />
      </div>
    </div>
  );
}