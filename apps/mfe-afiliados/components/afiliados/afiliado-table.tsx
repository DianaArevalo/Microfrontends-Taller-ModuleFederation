import Link from 'next/link';
import { AfiliadoStatus } from './afiliado-status';
import type { Afiliado } from '@/features/afiliados/types/afiliado';

interface AfiliadoTableProps {
  afiliados: Afiliado[];
}

export function AfiliadoTable({ afiliados }: AfiliadoTableProps) {
  if (afiliados.length === 0) {
    return <p className="nt-page-desc">No hay afiliados registrados.</p>;
  }

  return (
    <table className="nt-table">
      <thead>
        <tr>
          <th scope="col">Documento</th>
          <th scope="col">Nombre</th>
          <th scope="col">Estado</th>
          <th scope="col">Afiliación</th>
          <th scope="col">Semanas</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {afiliados.map((afiliado) => (
          <tr key={afiliado.id}>
            <td className="nt-mono">{afiliado.documento}</td>
            <td>
              {afiliado.nombres} {afiliado.apellidos}
            </td>
            <td>
              <AfiliadoStatus estado={afiliado.estado} />
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
  );
}