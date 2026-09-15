import type { Afiliado } from '@/features/afiliados/types/afiliado';

export const afiliadosMock: Afiliado[] = [
  {
    id: 'af-001',
    tipoDocumento: 'CC',
    documento: '43.221.098',
    nombres: 'Ana Carolina',
    apellidos: 'Restrepo Muñoz',
    estado: 'activo',
    fechaAfiliacion: '12 mar 2014',
    semanasCotizadas: 980,
  },
  {
    id: 'af-002',
    tipoDocumento: 'CC',
    documento: '1.098.334.201',
    nombres: 'Diego Alejandro',
    apellidos: 'Martínez Ríos',
    estado: 'activo',
    fechaAfiliacion: '03 ago 2011',
    semanasCotizadas: 1124,
  },
  {
    id: 'af-003',
    tipoDocumento: 'CE',
    documento: '881.455.02',
    nombres: 'María Fernanda',
    apellidos: 'Gómez Villanueva',
    estado: 'inactivo',
    fechaAfiliacion: '21 jun 2018',
    semanasCotizadas: 402,
  },
  {
    id: 'af-004',
    tipoDocumento: 'CC',
    documento: '52.667.310',
    nombres: 'Carlos Eduardo',
    apellidos: 'Páez Santos',
    estado: 'pensionado',
    fechaAfiliacion: '09 ene 1999',
    semanasCotizadas: 1305,
  },
];