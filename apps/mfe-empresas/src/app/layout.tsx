import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SidebarNav, Topbar } from '@/components/chrome';

export const metadata: Metadata = {
  title: 'NUTRIA · Empresas',
  description: 'Zona de Empresas — Microfrontend Multi-Zone.',
};

export default function EmpresasLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="nt-shell">
          <SidebarNav active="empresas" />
          <div className="nt-main">
            <Topbar breadcrumb="Empresas" />
            <main className="nt-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}