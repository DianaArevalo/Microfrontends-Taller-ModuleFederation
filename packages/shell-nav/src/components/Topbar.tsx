import type { ReactNode } from 'react';

export interface TopbarProps {
  breadcrumb?: string;
}

export function Topbar({ breadcrumb = 'Inicio' }: TopbarProps): ReactNode {
  return (
    <header className="nt-topbar">
      <div className="nt-breadcrumb">
        <span>{breadcrumb}</span>
      </div>
      <div className="nt-topbar-actions">
        <div className="nt-search-mock" aria-hidden="true">
          Buscar por documento…
        </div>
        <div className="nt-avatar" aria-hidden="true">
          JD
        </div>
      </div>
    </header>
  );
}