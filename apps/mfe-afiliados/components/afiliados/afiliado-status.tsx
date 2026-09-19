import { Badge, type BadgeProps } from '@/components/remote/design-system';
import type { EstadoAfiliado } from '@/features/afiliados/types/afiliado';

const ESTADO_TONE: Record<EstadoAfiliado, BadgeProps['tone']> = {
  activo: 'success',
  inactivo: 'pending',
  pensionado: 'danger',
};

export function AfiliadoStatus({ estado }: { estado: EstadoAfiliado }) {
  return <Badge tone={ESTADO_TONE[estado]}>{estado}</Badge>;
}