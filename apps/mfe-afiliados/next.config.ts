import type { NextConfig } from 'next';

/**
 * Zona Multi-Zone: las rutas del dominio viven bajo app/afiliados/* y se sirven
 * en /afiliados. El shell-nutria reenvía las rutas /afiliados* hacia este servidor.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;