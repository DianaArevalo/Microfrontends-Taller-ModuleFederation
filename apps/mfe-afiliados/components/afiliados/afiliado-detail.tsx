import Link from 'next/link';
import { Button, Card, Progress } from '@/components/remote/design-system';
import { AfiliadoStatus } from './afiliado-status';
import type { Afiliado } from '@/features/afiliados/types/afiliado';

interface AfiliadoDetailProps {
  afiliado: Afiliado;
}

export function AfiliadoDetail({ afiliado }: AfiliadoDetailProps) {
  return (
    <div>
      <header className="nt-page-head">
        <div className="nt-chip-row">
          <Link href="/afiliados" className="nt-cta nt-cta--quiet">
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
            <span className="nt-mono">
              {afiliado.tipoDocumento} {afiliado.documento}
            </span>{' '}
            · Afiliado desde <span className="nt-mono">{afiliado.fechaAfiliacion}</span>
          </p>
          <div className="nt-chip-row">
            <AfiliadoStatus estado={afiliado.estado} />
          </div>
          <div className="nt-cta-row">
            <Link href={`/afiliados/${afiliado.id}/editar`} className="nt-cta">
              Editar afiliado
            </Link>
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