import Link from 'next/link';
import type { ReactNode } from 'react';
import { AfiliadoTable } from '@/components/afiliados/afiliado-table';
import { Badge, Card } from '@/components/remote/design-system';
import { getAfiliados } from '@/features/afiliados/services/afiliados';

export default async function AfiliadosPage(): Promise<ReactNode> {
  const afiliados = await getAfiliados();

  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Afiliados</h1>
        <p className="nt-page-desc">
          Dominio de afiliados (PKG_AFILIADOS). Esta zona se sirve como Microfrontend independiente bajo{' '}
          <code>/afiliados</code> (Multi-Zones); la integración con el backend se conectará cuando exista el contrato
          API REST.
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-afiliados</Badge>
          <Badge>Datos de prueba</Badge>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Listado de afiliados" note={`${afiliados.length} registros simulados`}>
          <div className="nt-cta-row">
            <Link href="/afiliados/crear" className="nt-cta">
              Registrar afiliado
            </Link>
          </div>
          <AfiliadoTable afiliados={afiliados} />
        </Card>
      </div>
    </div>
  );
}