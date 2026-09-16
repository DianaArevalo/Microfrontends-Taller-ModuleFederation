'use client';

import { init } from '@module-federation/enhanced/runtime';

function requireRemoteUrl(remoteName: string, envName: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `[NUTRIA federation] Falta la variable "${envName}" para el remoto "${remoteName}". ` +
        'Copia .env.example a .env.local y define el valor antes de iniciar.',
    );
  }
  return value;
}

function getRemoteUrls(): Record<string, string> {
  return {
    design_system: requireRemoteUrl('design_system', 'NEXT_PUBLIC_DS_URL', process.env.NEXT_PUBLIC_DS_URL),
    shell_nav: requireRemoteUrl('shell_nav', 'NEXT_PUBLIC_SHELL_NAV_URL', process.env.NEXT_PUBLIC_SHELL_NAV_URL),
    auth_widget: requireRemoteUrl('auth_widget', 'NEXT_PUBLIC_AUTH_WIDGET_URL', process.env.NEXT_PUBLIC_AUTH_WIDGET_URL),
  };
}

let ensured = false;

export function ensureSharedRemotes(): void {
  if (ensured || typeof window === 'undefined') return;
  ensured = true;
  init({
    name: 'nutria-app',
    remotes: Object.entries(getRemoteUrls()).map(([name, entry]) => ({
      name,
      entry: `${entry}/remoteEntry.js`,
    })),
  });
}