import type { Aporte } from '@/types/aporte';

export const aportesMock: Aporte[] = [
  { id: 'ap-001', periodo: '2026-08', afiliado: 'Ana Carolina Restrepo', empresa: 'Textiles del Cauca S.A.S.', nit: '900.812.334', salarioBase: 2100000, valorAporte: 336000, estado: 'pagado' },
  { id: 'ap-002', periodo: '2026-07', afiliado: 'Ana Carolina Restrepo', empresa: 'Textiles del Cauca S.A.S.', nit: '900.812.334', salarioBase: 2100000, valorAporte: 336000, estado: 'pagado' },
  { id: 'ap-003', periodo: '2026-06', afiliado: 'Ana Carolina Restrepo', empresa: 'Textiles del Cauca S.A.S.', nit: '900.812.334', salarioBase: 2050000, valorAporte: 328000, estado: 'pendiente' },
  { id: 'ap-004', periodo: '2026-05', afiliado: 'Ana Carolina Restrepo', empresa: 'Comercializadora Andina Ltda.', nit: '811.045.221', salarioBase: 1980000, valorAporte: 316800, estado: 'pagado' },
  { id: 'ap-005', periodo: '2026-04', afiliado: 'Ana Carolina Restrepo', empresa: 'Comercializadora Andina Ltda.', nit: '811.045.221', salarioBase: 1980000, valorAporte: 316800, estado: 'anulado' },
];

export const formatoMoneda = (value: number): string =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);