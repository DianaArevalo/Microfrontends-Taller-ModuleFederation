import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'outline' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'ds-btn-primary',
  outline: 'ds-btn-outline',
  danger: 'ds-btn-danger',
};

export function Button({ variant = 'primary', className = '', children, type = 'button', ...rest }: ButtonProps) {
  const classNames = ['ds-btn', variantClass[variant], className].filter(Boolean).join(' ');
  return (
    <button type={type} className={classNames} {...rest}>
      {children}
    </button>
  );
}