import type { ReactNode } from 'react';
import { Card, Button } from '@/components/ds';

export default function NuevoRegistroPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Agregar registro laboral</h1>
        <p className="nt-page-desc">Formulario placeholder. Se conectará con el backend cuando esté disponible.</p>
      </header>

      <div className="nt-section">
        <Card title="Registro" note="Interfaz preparada">
          <form className="nt-form">
            <label className="nt-field">
              <span>Afiliado</span>
              <input name="afiliado" placeholder="Documento del afiliado" />
            </label>
            <label className="nt-field">
              <span>Empresa</span>
              <input name="empresa" placeholder="NIT de la empresa" />
            </label>
            <label className="nt-field">
              <span>Cargo</span>
              <input name="cargo" placeholder="Analista de nómina" />
            </label>
            <label className="nt-field">
              <span>Tipo de contrato</span>
              <select name="tipoContrato">
                <option>indefinido</option>
                <option>termino-fijo</option>
                <option>obra</option>
                <option>prestacion-servicios</option>
              </select>
            </label>
          </form>
          <div className="nt-cta-row">
            <Button variant="primary">Guardar registro</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}