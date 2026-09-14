import type { RegistroLaboral } from '@/types/registro';

export const historialMock: RegistroLaboral[] = [
  { id: 'hl-001', afiliado: 'Ana Carolina Restrepo', empresa: 'Textiles del Cauca S.A.S.', nit: '900.812.334', cargo: 'Analista de nómina', fechaInicio: '2018-03', fechaFin: null, tipoContrato: 'indefinido' },
  { id: 'hl-002', afiliado: 'Ana Carolina Restrepo', empresa: 'Comercializadora Andina Ltda.', nit: '811.045.221', cargo: 'Auxiliar contable', fechaInicio: '2014-08', fechaFin: '2018-02', tipoContrato: 'termino-fijo' },
  { id: 'hl-003', afiliado: 'Ana Carolina Restrepo', empresa: 'Inversiones del Valle S.A.', nit: '860.331.007', cargo: 'Asistente administrativa', fechaInicio: '2011-01', fechaFin: '2014-07', tipoContrato: 'termino-fijo' },
];