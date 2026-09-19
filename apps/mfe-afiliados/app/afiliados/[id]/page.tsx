import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { AfiliadoDetail } from '@/components/afiliados/afiliado-detail';
import { getAfiliado } from '@/features/afiliados/services/afiliados';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function AfiliadoFichaPage({ params }: Props): Promise<ReactNode> {
  const { id } = await params;
  const afiliado = await getAfiliado(id);

  if (!afiliado) notFound();

  return <AfiliadoDetail afiliado={afiliado} />;
}