import type { ReactNode } from 'react';
import { AfiliadoForm } from '@/components/afiliados/afiliado-form';
import { Card } from '@/components/remote/design-system';

export default function CrearAfiliadoPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Registrar afiliado</h1>
        <p className="nt-page-desc">
          Formulario preparado. Se conectará con el backend (SP_ADD_AFILIADO) cuando exista el contrato API.
        </p>
      </header>

      <div className="nt-section">
        <Card title="Datos básicos" note="Interfaz preparada">
          <AfiliadoForm submitLabel="Guardar afiliado" />
        </Card>
      </div>
    </div>
  );
}