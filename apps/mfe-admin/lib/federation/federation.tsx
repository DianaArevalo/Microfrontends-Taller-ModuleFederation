'use client';

import type { ComponentType } from 'react';
import { useRemote } from '@/features/admin/hooks/useRemote';
import type { RemoteModule } from './types';

export type { RemoteStatus, UseRemoteResult, RemoteModule, RemoteSelector } from './types';
export { ensureSharedRemotes } from './config';
export { getCachedRemote, loadRemoteModule } from './runtime';
export { useRemote } from '@/features/admin/hooks/useRemote';

export function makeRemote<P extends object>(
  scope: string,
  moduleId: string,
  select: (module: RemoteModule) => ComponentType<P> | undefined,
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