'use client';

import { useEffect, useState } from 'react';
import { ensureSharedRemotes } from '@/lib/federation/config';
import { getCachedRemote, loadRemoteModule } from '@/lib/federation/runtime';
import type { UseRemoteResult } from '@/lib/federation/types';

export function useRemote(scope: string, moduleId: string): UseRemoteResult {
  const id = `${scope}/${moduleId}`;
  const [state, setState] = useState<UseRemoteResult>(() =>
    getCachedRemote(id)
      ? { status: 'ready', module: getCachedRemote(id) }
      : { status: 'loading' },
  );

  useEffect(() => {
    ensureSharedRemotes();
    if (getCachedRemote(id)) return;

    let active = true;
    setState({ status: 'loading' });

    loadRemoteModule(scope, moduleId)
      .then((mod) => {
        if (!active || !mod) return;
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