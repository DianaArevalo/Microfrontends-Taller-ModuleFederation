export type EstadoAporte = 'pagado' | 'pendiente' | 'anulado';

export interface Aporte {
  id: string;
  periodo: string;
  afiliado: string;
  empresa: string;
  nit: string;
  salarioBase: number;
  valorAporte: number;
  estado: EstadoAporte;
}