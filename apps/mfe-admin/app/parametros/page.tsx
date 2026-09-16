import type { ReactNode } from 'react';
import { parametrosMock } from '@/features/admin/services/mocks';
import { Card } from '@/lib/ds';

export default function ParametrosPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Parámetros</h1>
        <p className="nt-page-desc">Parámetros generales del sistema. Datos simulados hasta integrar el backend.</p>
      </header>

      <div className="nt-section">
        <Card title="Parámetros del sistema" note={`${parametrosMock.length} registros simulados`}>
          <table className="nt-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Valor</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {parametrosMock.map((parametro) => (
                <tr key={parametro.id}>
                  <td className="nt-mono">{parametro.codigo}</td>
                  <td className="nt-mono">{parametro.valor}</td>
                  <td>{parametro.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}