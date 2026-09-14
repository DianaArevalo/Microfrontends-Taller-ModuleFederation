import type { ReactNode } from 'react';

export interface SessionMock {
  initials: string;
  nombre: string;
  rol: string;
}

const DEFAULT_SESSION: SessionMock = {
  initials: 'JD',
  nombre: 'Juan Domínguez',
  rol: 'OPERADOR',
};

export interface AuthWidgetProps {
  session?: SessionMock;
}

export function AuthWidget({ session = DEFAULT_SESSION }: AuthWidgetProps): ReactNode {
  return (
    <section className="aw-widget">
      <div className="aw-avatar" aria-hidden="true">
        {session.initials}
      </div>
      <div className="aw-body">
        <span className="aw-name">{session.nombre}</span>
        <span className="aw-rol">{session.rol}</span>
        <span className="aw-note">Autenticación simulada — pendiente de integración</span>
      </div>
    </section>
  );
}