import { createRoot } from 'react-dom/client';
import './styles.css';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Card } from './components/Card';
import { Progress } from './components/Progress';

function Preview() {
  return (
    <main style={{ padding: 24, fontFamily: 'var(--font-body)', background: 'var(--paper)', minHeight: '100vh' }}>
      <h1 style={{ fontFamily: 'var(--font-display)' }}>design-system · vista previa</h1>
      <p>Este remoto (Module Federation) expone componentes compartidos en tiempo de ejecución — CLIENT-ONLY.</p>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginTop: 20 }}>
        <Card title="Botones" note="variantes">
          <Button variant="primary">Editar afiliado</Button>
          <Button variant="outline">Ver historial</Button>
          <Button variant="danger">Desactivar</Button>
        </Card>

        <Card title="Badges" note="estados">
          <Badge tone="success">Activo</Badge>
          <Badge tone="pending">Pendiente</Badge>
          <Badge tone="danger">Anulado</Badge>
          <Badge>Neutro</Badge>
        </Card>

        <Card title="Progreso" note="semanas cotizadas">
          <Progress value={980} max={1250} label="980 / 1.250 semanas" note="Faltan 270 semanas" />
        </Card>
      </section>
    </main>
  );
}

const root = document.getElementById('root');
if (root) createRoot(root).render(<Preview />);