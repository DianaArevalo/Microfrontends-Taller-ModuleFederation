import Link from 'next/link';
import type { ReactNode } from 'react';
import { empresasMock } from '@/lib/mocks';
import { Badge, Card } from '@/components/ds';

const estadoTone: Record<string, 'success' | 'pending' | 'danger'> = {
  activa: 'success',
  suspendida: 'pending',
  inactiva: 'danger',
};

export default function EmpresasPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Empresas</h1>
        <p className="nt-page-desc">
          Esqueleto del dominio de empresas: registro patronal y gestión (zona bajo <code>/empresas</code>).
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-empresas</Badge>
          <Badge>Datos de prueba</Badge>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Registro patronal" note="Empresas simuladas">
          <div className="nt-cta-row">
            <Link href="/nuevo" className="nt-cta">
              Registrar empresa
            </Link>
          </div>
          <table className="nt-table">
            <thead>
              <tr>
                <th>NIT</th>
                <th>Razón social</th>
                <th>Actividad</th>
                <th>Afiliados activos</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {empresasMock.map((empresa) => (
                <tr key={empresa.id}>
                  <td className="nt-mono">{empresa.nit}</td>
                  <td>{empresa.razonSocial}</td>
                  <td>{empresa.actividad}</td>
                  <td className="nt-mono">{empresa.afiliadosActivos}</td>
                  <td>
                    <Badge tone={estadoTone[empresa.estado]}>{empresa.estado}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}