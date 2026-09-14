export type TipoContrato = 'indefinido' | 'termino-fijo' | 'obra' | 'prestacion-servicios';

export interface RegistroLaboral {
  id: string;
  afiliado: string;
  empresa: string;
  nit: string;
  cargo: string;
  fechaInicio: string;
  fechaFin: string | null;
  tipoContrato: TipoContrato;
}