import { createRoot } from 'react-dom/client';
import './styles.css';
import { AuthWidget } from './components/AuthWidget';
import { LoginForm } from './components/LoginForm';

function Preview() {
  return (
    <main style={{ padding: 24, fontFamily: 'var(--font-body)', background: 'var(--paper)', minHeight: '100vh', maxWidth: 420 }}>
      <h1 style={{ fontFamily: 'var(--font-display)' }}>auth-widget · vista previa</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 20 }}>
        <AuthWidget />
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 8, padding: 20 }}>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Preview />);