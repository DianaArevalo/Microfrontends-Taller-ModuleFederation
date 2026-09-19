import type { ReactNode } from 'react';
import { ParametrosPensionTable } from '@/components/parametros-pension/parametros-table';
import { Card } from '@/components/remote/design-system';
import { parametrosPensionMock } from '@/features/admin/parametros-pension/services/mocks';

export default function ParametrosPensionPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Parámetros de pensión</h1>
        <p className="nt-page-desc">
          Dominio PARAMETRO_PENSION. Datos simulados hasta integrar el backend.
        </p>
      </header>

      <div className="nt-section">
        <Card title="Parámetros del sistema" note={`${parametrosPensionMock.length} registros simulados`}>
          <ParametrosPensionTable parametros={parametrosPensionMock} />
        </Card>
      </div>
    </div>
  );
}