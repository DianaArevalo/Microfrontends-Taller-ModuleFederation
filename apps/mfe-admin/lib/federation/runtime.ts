import { loadRemote } from '@module-federation/enhanced/runtime';
import type { RemoteModule } from './types';

const moduleCache = new Map<string, RemoteModule>();

export function getCachedRemote(id: string): RemoteModule | undefined {
  return moduleCache.get(id);
}

export async function loadRemoteModule(scope: string, moduleId: string): Promise<RemoteModule | undefined> {
  const id = `${scope}/${moduleId}`;
  if (moduleCache.has(id)) return moduleCache.get(id);

  const mod = await loadRemote<RemoteModule>(id);
  if (!mod) return undefined;

  moduleCache.set(id, mod);
  return mod;
}