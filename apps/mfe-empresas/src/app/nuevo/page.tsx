import type { ReactNode } from 'react';
import { Card, Button } from '@/components/ds';

export default function NuevaEmpresaPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Registrar empresa</h1>
        <p className="nt-page-desc">Formulario placeholder. Se conectará con el backend cuando esté disponible.</p>
      </header>

      <div className="nt-section">
        <Card title="Datos de la empresa" note="Interfaz preparada">
          <form className="nt-form">
            <label className="nt-field">
              <span>NIT</span>
              <input name="nit" placeholder="900.812.334" />
            </label>
            <label className="nt-field">
              <span>Razón social</span>
              <input name="razonSocial" placeholder="Textiles del Cauca S.A.S." />
            </label>
            <label className="nt-field">
              <span>Actividad</span>
              <input name="actividad" placeholder="Fabricación de textiles" />
            </label>
          </form>
          <div className="nt-cta-row">
            <Button variant="primary">Guardar empresa</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}