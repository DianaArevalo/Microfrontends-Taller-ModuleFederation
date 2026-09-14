export type EstadoEmpresa = 'activa' | 'inactiva' | 'suspendida';

export interface Empresa {
  id: string;
  nit: string;
  razonSocial: string;
  actividad: string;
  estado: EstadoEmpresa;
  afiliadosActivos: number;
}