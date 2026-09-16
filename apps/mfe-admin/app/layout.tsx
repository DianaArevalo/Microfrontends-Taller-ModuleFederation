import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SidebarNav, Topbar } from '@/lib/chrome';

export const metadata: Metadata = {
  title: 'NUTRIA · Administración',
  description: 'Zona de Administración — Microfrontend Multi-Zone transversal.',
};

export default function AdminLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="nt-shell">
          <SidebarNav active="admin" />
          <div className="nt-main">
            <Topbar breadcrumb="Administración" />
            <main className="nt-content">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}