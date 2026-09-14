import type { FormEvent, ReactNode } from 'react';

export interface LoginFormProps {
  actionLabel?: string;
}

export function LoginForm({ actionLabel = 'Ingresar' }: LoginFormProps): ReactNode {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form className="aw-login" onSubmit={handleSubmit}>
      <label className="aw-field">
        <span>Usuario</span>
        <input name="usuario" placeholder="usuario@nutria" autoComplete="username" />
      </label>
      <label className="aw-field">
        <span>Contraseña</span>
        <input name="password" type="password" placeholder="••••••••" autoComplete="current-password" />
      </label>
      <button type="submit" className="aw-submit">
        {actionLabel}
      </button>
      <p className="aw-login-note">Placeholder: la autenticación real se integrará con el backend (JWT/SSO).</p>
    </form>
  );
}