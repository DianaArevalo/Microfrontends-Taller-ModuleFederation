import type { ReactNode } from 'react';
import { Card, Button } from '@/components/ds';

export default function NuevoAportePage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Registrar período de aporte</h1>
        <p className="nt-page-desc">Formulario placeholder. Se conectará con el backend cuando esté disponible.</p>
      </header>

      <div className="nt-section">
        <Card title="Período" note="Interfaz preparada">
          <form className="nt-form">
            <label className="nt-field">
              <span>Período (año-mes)</span>
              <input name="periodo" placeholder="2026-09" />
            </label>
            <label className="nt-field">
              <span>Afiliado</span>
              <input name="afiliado" placeholder="Documento del afiliado" />
            </label>
            <label className="nt-field">
              <span>Empresa</span>
              <input name="empresa" placeholder="NIT de la empresa" />
            </label>
            <label className="nt-field">
              <span>Salario base</span>
              <input name="salarioBase" type="number" placeholder="2.150.000" />
            </label>
          </form>
          <div className="nt-cta-row">
            <Button variant="primary">Guardar aporte</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}