import Link from 'next/link';
import type { ReactNode } from 'react';
import { afiliadosMock } from '@/features/afiliados/services/mocks';
import { Badge, Card } from '@/lib/ds';

const estadoTone: Record<string, 'success' | 'pending' | 'danger'> = {
  activo: 'success',
  inactivo: 'pending',
  pensionado: 'danger',
};

export default function AfiliadosPage(): ReactNode {
  return (
    <div>
      <header className="nt-page-head">
        <h1 className="nt-page-title">Afiliados</h1>
        <p className="nt-page-desc">
          Esqueleto del dominio de afiliados. Esta zona se sirve como Microfrontend independiente bajo{' '}
          <code>/afiliados</code> (Multi-Zones); los datos y la integración con el backend aún no están implementados.
        </p>
        <div className="nt-chip-row">
          <Badge tone="success">mfe-afiliados</Badge>
          <Badge>Datos de prueba</Badge>
        </div>
      </header>

      <div className="nt-section">
        <Card title="Listado de afiliados" note={`${afiliadosMock.length} registros simulados`}>
          <div className="nt-cta-row">
            <Link href="/afiliados/nuevo" className="nt-cta">
              Registrar afiliado
            </Link>
          </div>

          <table className="nt-table">
            <thead>
              <tr>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Afiliación</th>
                <th>Semanas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {afiliadosMock.map((afiliado) => (
                <tr key={afiliado.id}>
                  <td className="nt-mono">{afiliado.documento}</td>
                  <td>
                    {afiliado.nombres} {afiliado.apellidos}
                  </td>
                  <td>
                    <Badge tone={estadoTone[afiliado.estado]}>{afiliado.estado}</Badge>
                  </td>
                  <td className="nt-mono">{afiliado.fechaAfiliacion}</td>
                  <td className="nt-mono">{afiliado.semanasCotizadas}</td>
                  <td>
                    <Link href={`/afiliados/${afiliado.id}`}>Ficha</Link>
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