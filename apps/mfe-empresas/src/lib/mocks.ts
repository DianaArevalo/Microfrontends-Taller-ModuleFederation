import type { Empresa } from '@/types/empresa';

export const empresasMock: Empresa[] = [
  { id: 'em-001', nit: '900.812.334', razonSocial: 'Textiles del Cauca S.A.S.', actividad: 'Fabricación de textiles', estado: 'activa', afiliadosActivos: 218 },
  { id: 'em-002', nit: '811.045.221', razonSocial: 'Comercializadora Andina Ltda.', actividad: 'Comercio mayorista', estado: 'activa', afiliadosActivos: 96 },
  { id: 'em-003', nit: '860.331.007', razonSocial: 'Inversiones del Valle S.A.', actividad: 'Inversiones inmobiliarias', estado: 'suspendida', afiliadosActivos: 12 },
];