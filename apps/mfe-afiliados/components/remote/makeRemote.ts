'use client';

import { createElement } from 'react';
import type { ComponentType } from 'react';
import { useRemote } from '@/hooks/useRemote';
import type { RemoteModule } from '@/lib/federation/types';

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
        return createElement('p', { className: 'ds-error' }, `No se pudo cargar el remoto ${scope}/${moduleId}`);
      }
      return Fallback ? createElement(Fallback, props) : null;
    }
    return createElement(Component, props);
  }

  RemoteComponent.displayName = `Remote(${scope}/${moduleId})`;
  return RemoteComponent;
}