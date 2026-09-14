import type { NextConfig } from 'next';

/**
 * Multi-Zones: el shell actúa como gateway de rutas.
 * Cada zona Next.js vive en un puerto propio y responde con basePath '/<zona>'.
 * En producción, apunta cada variable de entorno al dominio desplegado de la zona.
 */
const ZONES: Record<string, string> = {
  afiliados: process.env.ZONE_AFILIADOS ?? 'http://localhost:4101',
  aportes: process.env.ZONE_APORTES ?? 'http://localhost:4102',
  'historial-laboral': process.env.ZONE_HISTORIAL_LABORAL ?? 'http://localhost:4103',
  pensiones: process.env.ZONE_PENSIONES ?? 'http://localhost:4104',
  empresas: process.env.ZONE_EMPRESAS ?? 'http://localhost:4105',
  admin: process.env.ZONE_ADMIN ?? 'http://localhost:4106',
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return Object.entries(ZONES).flatMap(([zone, target]) => [
      { source: `/${zone}`, destination: `${target}/${zone}` },
      { source: `/${zone}/:path*`, destination: `${target}/${zone}/:path*` },
    ]);
  },
};

export default nextConfig;