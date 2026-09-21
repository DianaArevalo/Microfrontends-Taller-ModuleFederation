import type { ReactNode } from 'react';
import {  LoginForm } from '@/components/chrome';
import { Card } from '@/components/ds';

export default function LoginPage(): ReactNode {
  return (
    <div className="nt-login-wrap">
    
      <Card title="Iniciar sesión" note="Interfaz placeholder">
        <LoginForm />
      </Card>
    </div>
  );
}