import Link from 'next/link';
import type { ReactNode } from 'react';
import { historialMock } from '@/lib/mocks';
import { Badge, Card } from '@/components/ds';

export default function HistorialLaboralPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Historial laboral</h1>
        <p className="nt-page-desc">
          Esqueleto del dominio de historial laboral: trayectoria del afiliado entre empresas (zona bajo{' '}
          <code>/historial-laboral</code>).
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-historial-laboral</Badge>
          <Badge>Datos de prueba</Badge>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Trayectoria laboral" note="Registros simulados">
          <div className="nt-cta-row">
            <Link href="/nuevo" className="nt-cta">
              Agregar registro
            </Link>
          </div>
          <table className="nt-table">
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Cargo</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Contrato</th>
              </tr>
            </thead>
            <tbody>
              {historialMock.map((registro) => (
                <tr key={registro.id}>
                  <td>
                    {registro.empresa}
                    <br />
                    <small>NIT {registro.nit}</small>
                  </td>
                  <td>{registro.cargo}</td>
                  <td className="nt-mono">{registro.fechaInicio}</td>
                  <td className="nt-mono">{registro.fechaFin ?? 'Vigente'}</td>
                  <td>
                    <Badge>{registro.tipoContrato}</Badge>
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