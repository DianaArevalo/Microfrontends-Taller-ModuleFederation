import type { ReactNode } from 'react';
import { Card, Button } from '@/components/ds';

export default function NuevoAfiliadoPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Registrar afiliado</h1>
        <p className="nt-page-desc">Formulario placeholder. Se conectará con el backend cuando esté disponible.</p>
      </header>

      <div className="nt-section">
        <Card title="Datos básicos" note="Interfaz preparada">
          <form className="nt-form">
            <label className="nt-field">
              <span>Tipo de documento</span>
              <select name="tipoDocumento">
                <option>CC</option>
                <option>CE</option>
                <option>TI</option>
              </select>
            </label>
            <label className="nt-field">
              <span>Número de documento</span>
              <input name="documento" placeholder="Ej: 43.221.098" />
            </label>
            <label className="nt-field">
              <span>Nombres</span>
              <input name="nombres" placeholder="Ana Carolina" />
            </label>
            <label className="nt-field">
              <span>Apellidos</span>
              <input name="apellidos" placeholder="Restrepo Muñoz" />
            </label>
            <label className="nt-field">
              <span>Email</span>
              <input name="email" type="email" placeholder="correo@example.com" />
            </label>
          </form>
          <div className="nt-cta-row">
            <Button variant="primary">Guardar afiliado</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}