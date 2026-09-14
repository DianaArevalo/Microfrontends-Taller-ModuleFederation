import type { Pension } from '@/types/pension';

export const pensionesMock: Pension[] = [
  { id: 'pe-001', afiliado: 'Ana Carolina Restrepo', modalidad: 'vejez', semanasCotizadas: 980, saldoCuenta: 48200000, estado: 'en-tramite', requisitoSemanas: 1250 },
  { id: 'pe-002', afiliado: 'Diego Alejandro Martínez', modalidad: 'vejez', semanasCotizadas: 1124, saldoCuenta: 61800000, estado: 'en-tramite', requisitoSemanas: 1250 },
  { id: 'pe-003', afiliado: 'Carlos Eduardo Páez', modalidad: 'vejez', semanasCotizadas: 1305, saldoCuenta: 74200000, estado: 'causada', requisitoSemanas: 1250 },
];