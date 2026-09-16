import type { NextConfig } from 'next';

/**
 * Zona Multi-Zone: las rutas del dominio viven bajo app/admin/* y se sirven
 * en /admin. El shell-nutria reenvía las rutas /admin* hacia este servidor.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;