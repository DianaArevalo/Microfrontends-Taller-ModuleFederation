import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'NUTRIA · Sistema de pensiones',
  description:
    'Laboratorio frontend de microfrontends orientados al dominio — Next.js 15, Multi-Zones y Module Federation.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}