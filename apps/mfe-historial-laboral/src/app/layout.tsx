import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SidebarNav, Topbar } from '@/components/chrome';

export const metadata: Metadata = {
  title: 'NUTRIA · Historial laboral',
  description: 'Zona de Historial Laboral — Microfrontend Multi-Zone.',
};

export default function HistorialLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="nt-shell">
          <SidebarNav active="historial-laboral" />
          <div className="nt-main">
            <Topbar breadcrumb="Historial laboral" />
            <main className="nt-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}