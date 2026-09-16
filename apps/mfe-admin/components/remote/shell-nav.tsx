'use client';

import type { ComponentType } from 'react';
import { makeRemote } from './makeRemote';

export interface SidebarNavProps {
  active?: string;
}

function SidebarNavFallback({ active }: SidebarNavProps) {
  const entries = ['Afiliados', 'Aportes', 'Historial laboral', 'Pensiones', 'Empresas', 'Admin'];
  return (
    <aside className="nt-sidebar-fallback" aria-label="Navegación">
      <p className="brand">Nutria</p>
      <p className="brand-sub">Sistema de pensiones</p>
      {entries.map((entry, index) => (
        <span key={entry} className={`entry${active && index === entries.length - 1 ? ' nt-skeleton' : ''}`}>
          {entry}
        </span>
      ))}
    </aside>
  );
}

export const SidebarNav = makeRemote<SidebarNavProps>(
  'shell_nav',
  'index',
  (m) => m.SidebarNav as ComponentType<SidebarNavProps> | undefined,
  SidebarNavFallback,
);

export interface TopbarProps {
  breadcrumb?: string;
}

export const Topbar = makeRemote<TopbarProps>(
  'shell_nav',
  'index',
  (m) => m.Topbar as ComponentType<TopbarProps> | undefined,
);