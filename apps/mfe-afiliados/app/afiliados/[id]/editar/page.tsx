import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { afiliadosMock } from '@/features/afiliados/services/mocks';
import { Card } from '@/lib/ds';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditarAfiliadoPage({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const afiliado = afiliadosMock.find((item) => item.id === id);

  if (!afiliado) notFound();

  return (
    <div>
      <header className="nt-page-head">
        <div className="nt-chip-row">
          <Link href={`/afiliados/${afiliado.id}`} className="nt-cta nt-cta--quiet">
            ← Volver a la ficha
          </Link>
        </div>
        <h1 className="nt-page-title">Editar afiliado</h1>
        <p className="nt-page-desc">
          {afiliado.nombres} {afiliado.apellidos}
        </p>
      </header>

      <div className="nt-section">
        <Card title="Formulario de edición" note="Pendiente: se conectará con el backend cuando esté disponible">
          <p className="nt-page-desc">Módulo de edición aún no implementado (esqueleto estructural).</p>
        </Card>
      </div>
    </div>
  );
}