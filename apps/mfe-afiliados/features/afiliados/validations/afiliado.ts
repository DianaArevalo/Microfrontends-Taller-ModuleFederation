import type { AfiliadoNuevo } from '@/features/afiliados/types/afiliado';

/**
 * Reglas conocidas de validación para el formulario de afiliados.
 * Reglas complejas de negocio que corresponden al backend (PKG_AFILIADOS)
 * no se duplican aquí.
 */
export const TIPO_DOCUMENTO = ['CC', 'CE', 'TI', 'PA'] as const;

export const ESTADO_AFILIADO = ['ACTIVO', 'INACTIVO'] as const;

export type ErroresAfiliadoForm = Partial<Record<keyof AfiliadoNuevo, string>>;

export type ResultadoValidacionAfiliado =
  | { ok: true; errores: ErroresAfiliadoForm }
  | { ok: false; errores: ErroresAfiliadoForm };

function esFechaValida(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const fecha = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(fecha.getTime());
}

export function validarAfiliadoForm(form: AfiliadoNuevo): ResultadoValidacionAfiliado {
  const errores: ErroresAfiliadoForm = {};

  if (!TIPO_DOCUMENTO.some((tipo) => tipo === form.tipoDocumento)) {
    errores.tipoDocumento = 'El tipo de documento no es válido.';
  }

  const documento = form.documento.trim();
  if (!documento) {
    errores.documento = 'El número de documento es requerido.';
  } else if (/[^0-9.\- ]/.test(documento)) {
    errores.documento = 'El número de documento contiene caracteres no válidos.';
  } else if (documento.replace(/[.\- ]/g, '').length < 3) {
    errores.documento = 'El número de documento es demasiado corto.';
  }

  if (!form.nombres.trim()) {
    errores.nombres = 'Los nombres son requeridos.';
  }

  if (!form.apellidos.trim()) {
    errores.apellidos = 'Los apellidos son requeridos.';
  }

  const email = form.email.trim();
  if (!email) {
    errores.email = 'El correo electrónico es requerido.';
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errores.email = 'El correo electrónico no es válido.';
  }

  if (!form.fechaNacimiento) {
    errores.fechaNacimiento = 'La fecha de nacimiento es requerida.';
  } else if (!esFechaValida(form.fechaNacimiento)) {
    errores.fechaNacimiento = 'La fecha de nacimiento no es válida (formato AAAA-MM-DD).';
  }

  return { ok: Object.keys(errores).length === 0, errores };
}