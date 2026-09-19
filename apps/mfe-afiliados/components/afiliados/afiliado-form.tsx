'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { Button } from '@/components/remote/design-system';
import { TIPO_DOCUMENTO, validarAfiliadoForm, type ErroresAfiliadoForm } from '@/features/afiliados/validations/afiliado';
import type { AfiliadoNuevo } from '@/features/afiliados/types/afiliado';

interface AfiliadoFormProps {
  initialValues?: Partial<AfiliadoNuevo>;
  submitLabel?: string;
}

const VALORES_INICIALES: AfiliadoNuevo = {
  tipoDocumento: 'CC',
  documento: '',
  nombres: '',
  apellidos: '',
  email: '',
  fechaNacimiento: '',
};

export function AfiliadoForm({ initialValues, submitLabel = 'Guardar afiliado' }: AfiliadoFormProps): ReactNode {
  const [values, setValues] = useState<AfiliadoNuevo>({ ...VALORES_INICIALES, ...initialValues });
  const [errores, setErrores] = useState<ErroresAfiliadoForm>({});
  const [nota, setNota] = useState('');

  function updateField(campo: keyof AfiliadoNuevo, valor: string): void {
    setValues((prev) => ({ ...prev, [campo]: valor }));
    setErrores((prev) => ({ ...prev, [campo]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const resultado = validarAfiliadoForm(values);

    if (!resultado.ok) {
      setErrores(resultado.errores);
      setNota('');
      return;
    }

    setErrores({});
    // TODO(api): invocar crearAfiliado/actualizarAfiliado (features/afiliados/services)
    // cuando exista el contrato HTTP de PKG_AFILIADOS (SP_ADD_AFILIADO / SP_UPDATE_AFILIADO).
    setNota('Validación correcta. El contrato API del backend aún está pendiente de definición.');
  }

  return (
    <form className="nt-form" noValidate onSubmit={handleSubmit}>
      <label className="nt-field">
        <span>Tipo de documento</span>
        <select
          name="tipoDocumento"
          value={values.tipoDocumento}
          onChange={(event) => updateField('tipoDocumento', event.target.value)}
          aria-invalid={Boolean(errores.tipoDocumento)}
        >
          {TIPO_DOCUMENTO.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
        {errores.tipoDocumento ? <small>{errores.tipoDocumento}</small> : null}
      </label>

      <label className="nt-field">
        <span>Número de documento</span>
        <input
          name="documento"
          value={values.documento}
          onChange={(event) => updateField('documento', event.target.value)}
          placeholder="Ej: 43.221.098"
          aria-invalid={Boolean(errores.documento)}
        />
        {errores.documento ? <small>{errores.documento}</small> : null}
      </label>

      <label className="nt-field">
        <span>Nombres</span>
        <input
          name="nombres"
          value={values.nombres}
          onChange={(event) => updateField('nombres', event.target.value)}
          placeholder="Ana Carolina"
          aria-invalid={Boolean(errores.nombres)}
        />
        {errores.nombres ? <small>{errores.nombres}</small> : null}
      </label>

      <label className="nt-field">
        <span>Apellidos</span>
        <input
          name="apellidos"
          value={values.apellidos}
          onChange={(event) => updateField('apellidos', event.target.value)}
          placeholder="Restrepo Muñoz"
          aria-invalid={Boolean(errores.apellidos)}
        />
        {errores.apellidos ? <small>{errores.apellidos}</small> : null}
      </label>

      <label className="nt-field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={(event) => updateField('email', event.target.value)}
          placeholder="correo@example.com"
          aria-invalid={Boolean(errores.email)}
        />
        {errores.email ? <small>{errores.email}</small> : null}
      </label>

      <label className="nt-field">
        <span>Fecha de nacimiento</span>
        <input
          name="fechaNacimiento"
          type="date"
          value={values.fechaNacimiento}
          onChange={(event) => updateField('fechaNacimiento', event.target.value)}
          aria-invalid={Boolean(errores.fechaNacimiento)}
        />
        {errores.fechaNacimiento ? <small>{errores.fechaNacimiento}</small> : null}
      </label>

      <div className="nt-cta-row">
        <Button variant="primary" type="submit">
          {submitLabel}
        </Button>
      </div>

      {nota ? <p className="nt-page-desc">{nota}</p> : null}
    </form>
  );
}