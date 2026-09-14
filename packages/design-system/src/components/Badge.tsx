import type { ReactNode } from 'react';

export type BadgeTone = 'success' | 'pending' | 'danger' | 'default';

export interface BadgeProps {
  tone?: BadgeTone;
  children?: ReactNode;
  className?: string;
}

const toneClass: Record<BadgeTone, string> = {
  success: 'ds-badge-success',
  pending: 'ds-badge-pending',
  danger: 'ds-badge-danger',
  default: 'ds-badge-default',
};

export function Badge({ tone = 'default', children, className = '' }: BadgeProps) {
  const classNames = ['ds-badge', toneClass[tone], className].filter(Boolean).join(' ');
  return <span className={classNames}>{children}</span>;
}