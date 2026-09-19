import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { AfiliadoForm } from '@/components/afiliados/afiliado-form';
import { Card } from '@/components/remote/design-system';
import { getAfiliado } from '@/features/afiliados/services/afiliados';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditarAfiliadoPage({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const afiliado = await getAfiliado(id);

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
        <Card title="Formulario de edición" note="Pendiente: se conectará con SP_UPDATE_AFILIADO cuando exista el contrato API">
          <AfiliadoForm
            submitLabel="Guardar cambios"
            initialValues={{
              tipoDocumento: afiliado.tipoDocumento,
              documento: afiliado.documento,
              nombres: afiliado.nombres,
              apellidos: afiliado.apellidos,
            }}
          />
        </Card>
      </div>
    </div>
  );
}