import type { NextConfig } from 'next';

/**
 * Zona Multi-Zone: responde bajo el prefijo basePath '/afiliados'.
 * El shell-nutria reenvía las rutas /afiliados/* hacia este servidor.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/afiliados',
};

export default nextConfig;