import type { ReactNode } from 'react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface SidebarNavProps {
  active?: string;
}

const mainNav: NavItem[] = [
  { id: 'afiliados', label: 'Afiliados', href: '/afiliados' },
  { id: 'aportes', label: 'Aportes', href: '/aportes' },
  { id: 'historial-laboral', label: 'Historial laboral', href: '/historial-laboral' },
  { id: 'pensiones', label: 'Pensiones', href: '/pensiones' },
  { id: 'empresas', label: 'Empresas', href: '/empresas' },
];

const adminNav: NavItem[] = [
  { id: 'admin', label: 'Panel admin', href: '/admin' },
  { id: 'errores', label: 'Errores', href: '/admin/errores' },
  { id: 'auditoria', label: 'Auditoría', href: '/admin/auditoria' },
  { id: 'parametros-pension', label: 'Parámetros pensión', href: '/admin/parametros-pension' },
];

function NavList({ items, active }: { items: NavItem[]; active?: string }) {
  return (
    <ul className="nt-nav" role="list">
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.href} className={item.id === active ? 'active' : undefined} aria-current={item.id === active ? 'page' : undefined}>
            <span className="dot" aria-hidden="true" />
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SidebarNav({ active }: SidebarNavProps): ReactNode {
  return (
    <aside className="nt-sidebar">
      <p className="nt-brand">Nutria</p>
      <p className="nt-brand-sub">Sistema de pensiones</p>

      <nav aria-label="Dominios">
        <NavList items={mainNav} active={active} />
      </nav>

      <p className="nt-nav-group-label">Administración</p>
      <nav aria-label="Administración">
        <NavList items={adminNav} active={active} />
      </nav>

      <div className="nt-session-mock">Sesión simulada · rol OPERADOR</div>
    </aside>
  );
}