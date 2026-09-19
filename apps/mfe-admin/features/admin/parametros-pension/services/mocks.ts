import type { ParametroPension } from '@/features/admin/parametros-pension/types/parametro-pension';

export const parametrosPensionMock: ParametroPension[] = [
  {
    id: 'par-001',
    codigo: 'Semanas_Minimas',
    valor: '1.250',
    descripcion: 'Semanas mínimas de cotización requeridas (2026).',
  },
  {
    id: 'par-002',
    codigo: 'Edad_Pension',
    valor: '62',
    descripcion: 'Edad mínima de pensión de vejez.',
  },
  {
    id: 'par-003',
    codigo: 'IBC_Techo',
    valor: '25.000.000',
    descripcion: 'Techo del ingreso base de cotización.',
  },
  {
    id: 'par-004',
    codigo: 'Tasa_Aporte',
    valor: '16%',
    descripcion: 'Tasa de cotización pensional vigente.',
  },
];