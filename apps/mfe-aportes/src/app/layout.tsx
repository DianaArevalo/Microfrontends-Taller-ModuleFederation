import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SidebarNav, Topbar } from '@/components/chrome';

export const metadata: Metadata = {
  title: 'NUTRIA · Aportes',
  description: 'Zona de Aportes — Microfrontend Multi-Zone.',
};

export default function AportesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="nt-shell">
          <SidebarNav active="aportes" />
          <div className="nt-main">
            <Topbar breadcrumb="Aportes" />
            <main className="nt-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}