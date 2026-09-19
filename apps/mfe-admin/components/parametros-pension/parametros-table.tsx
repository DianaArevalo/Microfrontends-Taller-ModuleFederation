import type { ParametroPension } from '@/features/admin/parametros-pension/types/parametro-pension';

interface ParametrosPensionTableProps {
  parametros: ParametroPension[];
}

export function ParametrosPensionTable({ parametros }: ParametrosPensionTableProps) {
  if (parametros.length === 0) {
    return <p className="nt-page-desc">No hay parámetros registrados.</p>;
  }

  return (
    <table className="nt-table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Valor</th>
          <th scope="col">Descripción</th>
        </tr>
      </thead>
      <tbody>
        {parametros.map((parametro) => (
          <tr key={parametro.id}>
            <td className="nt-mono">{parametro.codigo}</td>
            <td className="nt-mono">{parametro.valor}</td>
            <td>{parametro.descripcion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}