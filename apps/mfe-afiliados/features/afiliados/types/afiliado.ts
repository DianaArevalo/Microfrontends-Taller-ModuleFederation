export type TipoDocumento = 'CC' | 'CE' | 'TI' | 'PA';

export type EstadoAfiliado = 'activo' | 'inactivo' | 'pensionado';

export interface Afiliado {
  id: string;
  tipoDocumento: TipoDocumento;
  documento: string;
  nombres: string;
  apellidos: string;
  estado: EstadoAfiliado;
  fechaAfiliacion: string;
  semanasCotizadas: number;
}

export interface AfiliadoNuevo {
  tipoDocumento: TipoDocumento;
  documento: string;
  nombres: string;
  apellidos: string;
  email: string;
  fechaNacimiento: string;
}