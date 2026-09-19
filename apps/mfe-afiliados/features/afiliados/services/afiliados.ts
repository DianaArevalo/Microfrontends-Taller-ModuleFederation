import type { Afiliado, AfiliadoNuevo } from '@/features/afiliados/types/afiliado';
import { afiliadosMock } from './mocks';

/**
 * Capa de servicios del dominio de afiliados (PKG_AFILIADOS).
 *
 * El frontend NO accede directamente a Oracle: la comunicación debe seguir
 *   mfe-afiliados -> API REST -> backend -> PKG_AFILIADOS -> Oracle
 *
 * Operaciones backend conocidas:
 *   SP_ADD_AFILIADO
 *   SP_UPDATE_AFILIADO
 *   SP_GET_ALL_AFILIADO
 *   SP_GET_AFILIADO
 *   SP_ENABLE_AFILIADO
 *   SP_DISABLE_AFILIADO
 *   FN_EDAD_AFILIADO
 *
 * TODO(api): definir el contrato HTTP del backend (endpoints + DTOs) y
 * reemplazar el uso de mocks por llamadas fetch/fetch(). Los endpoints NO se
 * hardcodean aquí; deben venir de variables de entorno cuando exista el backend.
 */

export async function getAfiliados(): Promise<Afiliado[]> {
  return afiliadosMock;
}

export async function getAfiliado(id: string): Promise<Afiliado | undefined> {
  return afiliadosMock.find((item) => item.id === id);
}

/**
 * TODO(api): conecta al endpoint que expone FN_EDAD_AFILIADO cuando el
 * contrato HTTP del backend exista. Lanza hasta entonces.
 */
export async function getEdadAfiliado(_id: string): Promise<number> {
  throw new Error(
    `[NUTRIA] getEdadAfiliado: contrato API pendiente (FN_EDAD_AFILIADO). No se inventa el endpoint.`,
  );
}

/**
 * TODO(api): conecta al endpoint que expone SP_ADD_AFILIADO cuando exista.
 * Lanza hasta entonces para no simular respuestas inexistentes.
 */
export async function crearAfiliado(_form: AfiliadoNuevo): Promise<Afiliado> {
  throw new Error(
    `[NUTRIA] crearAfiliado: contrato API pendiente (SP_ADD_AFILIADO). No se inventa el endpoint.`,
  );
}

/**
 * TODO(api): conecta al endpoint que expone SP_UPDATE_AFILIADO cuando exista.
 * Lanza hasta entonces para no simular respuestas inexistentes.
 */
export async function actualizarAfiliado(_id: string, _form: AfiliadoNuevo): Promise<Afiliado> {
  throw new Error(
    `[NUTRIA] actualizarAfiliado: contrato API pendiente (SP_UPDATE_AFILIADO). No se inventa el endpoint.`,
  );
}

/**
 * TODO(api): conecta al endpoint que expone SP_ENABLE_AFILIADO cuando exista.
 * Lanza hasta entonces para no simular respuestas inexistentes.
 */
export async function activarAfiliado(_id: string): Promise<Afiliado> {
  throw new Error(
    `[NUTRIA] activarAfiliado: contrato API pendiente (SP_ENABLE_AFILIADO). No se inventa el endpoint.`,
  );
}

/**
 * TODO(api): conecta al endpoint que expone SP_DISABLE_AFILIADO cuando exista.
 * Lanza hasta entonces para no simular respuestas inexistentes.
 */
export async function desactivarAfiliado(_id: string): Promise<Afiliado> {
  throw new Error(
    `[NUTRIA] desactivarAfiliado: contrato API pendiente (SP_DISABLE_AFILIADO). No se inventa el endpoint.`,
  );
}