import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SidebarNav, Topbar } from '@/components/remote/shell-nav';

export const metadata: Metadata = {
  title: 'NUTRIA · Afiliados',
  description: 'Zona de Afiliados — Microfrontend Multi-Zone.',
};

export default function AfiliadosLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="nt-shell">
          <SidebarNav active="afiliados" />
          <div className="nt-main">
            <Topbar breadcrumb="Afiliados" />
            <main className="nt-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}