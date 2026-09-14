import type { ReactNode } from 'react';
import { Card, Button } from '@/components/ds';

export default function NuevaPensionPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Tramitar pensión</h1>
        <p className="nt-page-desc">Formulario placeholder. Se conectará con el backend cuando esté disponible.</p>
      </header>

      <div className="nt-section">
        <Card title="Solicitud" note="Interfaz preparada">
          <form className="nt-form">
            <label className="nt-field">
              <span>Afiliado</span>
              <input name="afiliado" placeholder="Documento del afiliado" />
            </label>
            <label className="nt-field">
              <span>Modalidad</span>
              <select name="modalidad">
                <option>vejez</option>
                <option>invalidez</option>
                <option>sobrevivientes</option>
              </select>
            </label>
          </form>
          <div className="nt-cta-row">
            <Button variant="primary">Guardar solicitud</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}