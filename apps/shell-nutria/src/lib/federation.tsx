'use client';

import { init, loadRemote } from '@module-federation/enhanced/runtime';
import { useEffect, useState, type ComponentType } from 'react';

export type RemoteStatus = 'loading' | 'ready' | 'error';

/**
 * Registro de los remotos compartidos (Module Federation — CLIENT-ONLY).
 * Puede sobrescribirse con variables NEXT_PUBLIC_* por entorno.
 */
const REMOTE_URLS: Record<string, string> = {
  design_system: process.env.NEXT_PUBLIC_DS_URL ?? 'http://localhost:4111',
  shell_nav: process.env.NEXT_PUBLIC_SHELL_NAV_URL ?? 'http://localhost:4112',
  auth_widget: process.env.NEXT_PUBLIC_AUTH_WIDGET_URL ?? 'http://localhost:4113',
};

let ensured = false;

function ensureSharedRemotes(): void {
  if (ensured || typeof window === 'undefined') return;
  ensured = true;
  init({
    name: 'nutria-app',
    remotes: Object.entries(REMOTE_URLS).map(([name, entry]) => ({
      name,
      entry: `${entry}/remoteEntry.js`,
    })),
  });
}

const moduleCache = new Map<string, Record<string, unknown>>();

export interface UseRemoteResult {
  status: RemoteStatus;
  module?: Record<string, unknown>;
}

export function useRemote(scope: string, moduleId: string): UseRemoteResult {
  const id = `${scope}/${moduleId}`;
  const [state, setState] = useState<UseRemoteResult>(() =>
    moduleCache.has(id)
      ? { status: 'ready', module: moduleCache.get(id) }
      : { status: 'loading' },
  );

  useEffect(() => {
    ensureSharedRemotes();
    if (moduleCache.has(id)) return;

    let active = true;
    setState({ status: 'loading' });

    loadRemote<Record<string, unknown>>(id)
      .then((mod) => {
        if (!active || !mod) return;
        moduleCache.set(id, mod);
        setState({ status: 'ready', module: mod });
      })
      .catch((error: unknown) => {
        if (!active) return;
        console.error(`[NUTRIA · federation] No se pudo cargar ${id}`, error);
        setState({ status: 'error' });
      });

    return () => {
      active = false;
    };
  }, [id]);

  return state;
}

/**
 * Convierte un remoto en un componente con tipado de props.
 * Solo se renderiza en el cliente; en el servidor se emite el fallback.
 */
export function makeRemote<P extends object>(
  scope: string,
  moduleId: string,
  select: (module: Record<string, unknown>) => ComponentType<P> | undefined,
  Fallback?: ComponentType<P>,
) {
  function RemoteComponent(props: P) {
    const { status, module: mod } = useRemote(scope, moduleId);
    const Component = select(mod ?? {});

    if (!Component) {
      if (status === 'error') {
        return <p className="ds-error">No se pudo cargar el remoto {scope}/{moduleId}</p>;
      }
      return Fallback ? <Fallback {...props} /> : null;
    }
    return <Component {...props} />;
  }

  RemoteComponent.displayName = `Remote(${scope}/${moduleId})`;
  return RemoteComponent;
}