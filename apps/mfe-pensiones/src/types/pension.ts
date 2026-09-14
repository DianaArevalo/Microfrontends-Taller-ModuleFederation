export type ModalidadPension = 'vejez' | 'invalidez' | 'sobrevivientes';

export type EstadoPension = 'en-tramite' | 'causada' | 'rechazada';

export interface Pension {
  id: string;
  afiliado: string;
  modalidad: ModalidadPension;
  semanasCotizadas: number;
  saldoCuenta: number;
  estado: EstadoPension;
  requisitoSemanas: number;
}