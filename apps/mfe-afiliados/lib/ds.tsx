'use client';

import type { ComponentType, ReactNode } from 'react';
import { makeRemote } from '@/lib/federation';

export interface BadgeProps {
  tone?: 'success' | 'pending' | 'danger' | 'default';
  children?: ReactNode;
  className?: string;
}

export const Badge = makeRemote<BadgeProps>(
  'design_system',
  'index',
  (m) => m.Badge as ComponentType<BadgeProps> | undefined,
);

export interface CardProps {
  title?: ReactNode;
  note?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Card = makeRemote<CardProps>(
  'design_system',
  'index',
  (m) => m.Card as ComponentType<CardProps> | undefined,
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'danger';
  children?: ReactNode;
}

export const Button = makeRemote<ButtonProps>(
  'design_system',
  'index',
  (m) => m.Button as ComponentType<ButtonProps> | undefined,
);

export interface ProgressProps {
  value: number;
  max: number;
  label?: string;
  note?: string;
}

export const Progress = makeRemote<ProgressProps>(
  'design_system',
  'index',
  (m) => m.Progress as ComponentType<ProgressProps> | undefined,
);