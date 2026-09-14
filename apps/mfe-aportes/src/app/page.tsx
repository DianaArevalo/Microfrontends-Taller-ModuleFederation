import Link from 'next/link';
import type { ReactNode } from 'react';
import { aportesMock, formatoMoneda } from '@/lib/mocks';
import { Badge, Card } from '@/components/ds';

const estadoTone: Record<string, 'success' | 'pending' | 'danger'> = {
  pagado: 'success',
  pendiente: 'pending',
  anulado: 'danger',
};

export default function AportesPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Aportes</h1>
        <p className="nt-page-desc">
          Esqueleto del dominio de aportes. Historial de períodos cotizados por afiliado (zona bajo{' '}
          <code>/aportes</code>).
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-aportes</Badge>
          <Badge>Datos de prueba</Badge>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Historial de aportes" note="Últimos períodos simulados">
          <div className="nt-cta-row">
            <Link href="/nuevo" className="nt-cta">
              Registrar período
            </Link>
          </div>
          <table className="nt-table">
            <thead>
              <tr>
                <th>Período</th>
                <th>Afiliado</th>
                <th>Empresa</th>
                <th>Salario base</th>
                <th>Valor aporte</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {aportesMock.map((aporte) => (
                <tr key={aporte.id}>
                  <td className="nt-mono">{aporte.periodo}</td>
                  <td>{aporte.afiliado}</td>
                  <td>
                    {aporte.empresa}
                    <br />
                    <small className="nt-mono">NIT {aporte.nit}</small>
                  </td>
                  <td className="nt-mono">{formatoMoneda(aporte.salarioBase)}</td>
                  <td className="nt-mono">{formatoMoneda(aporte.valorAporte)}</td>
                  <td>
                    <Badge tone={estadoTone[aporte.estado]}>{aporte.estado}</Badge>
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