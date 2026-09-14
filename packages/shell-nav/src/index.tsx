import { createRoot } from 'react-dom/client';
import './styles.css';
import { SidebarNav } from './components/SidebarNav';
import { Topbar } from './components/Topbar';

function Preview() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '232px 1fr', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <SidebarNav active="afiliados" />
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <Topbar breadcrumb="Afiliados / Inicio" />
      </div>
    </div>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Preview />);