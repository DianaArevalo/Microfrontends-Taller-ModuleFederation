import type { ReactNode } from 'react';
import { SidebarNav, Topbar } from '@/components/chrome';

export default function ShellLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="nt-shell">
      <SidebarNav active="inicio" />
      <div className="nt-main">
        <Topbar breadcrumb="Inicio" />
        <main className="nt-content">{children}</main>
      </div>
    </div>
  );
}