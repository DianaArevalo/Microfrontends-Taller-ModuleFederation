import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SidebarNav, Topbar } from '@/components/chrome';

export const metadata: Metadata = {
  title: 'NUTRIA · Pensiones',
  description: 'Zona de Pensiones — Microfrontend Multi-Zone.',
};

export default function PensionesLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="nt-shell">
          <SidebarNav active="pensiones" />
          <div className="nt-main">
            <Topbar breadcrumb="Pensiones" />
            <main className="nt-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}