import type { ComponentType } from 'react';

export type RemoteStatus = 'loading' | 'ready' | 'error';

export type RemoteModule = Record<string, unknown>;

export interface UseRemoteResult {
  status: RemoteStatus;
  module?: RemoteModule;
}

export type RemoteSelector<P extends object> = (module: RemoteModule) => ComponentType<P> | undefined;