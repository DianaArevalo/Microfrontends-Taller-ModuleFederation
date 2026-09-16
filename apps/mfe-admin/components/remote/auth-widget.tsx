'use client';

import type { ComponentType } from 'react';
import { makeRemote } from './makeRemote';

export interface AuthWidgetProps {
  compact?: boolean;
}

export const AuthWidget = makeRemote<AuthWidgetProps>(
  'auth_widget',
  'index',
  (m) => m.AuthWidget as ComponentType<AuthWidgetProps> | undefined,
);

export interface LoginFormProps {
  actionLabel?: string;
}

export const LoginForm = makeRemote<LoginFormProps>(
  'auth_widget',
  'index',
  (m) => m.LoginForm as ComponentType<LoginFormProps> | undefined,
);