import type { NextConfig } from 'next';

/**
 * Gateway Multi-Zones: reenvía /<zona> y /<zona>/* hacia la app de cada zona.
 * Ninguna URL de infraestructura queda hardcodeada: cada target se define vía
 * variable de entorno (ZONE_*_URL) en .env.local o el entorno de despliegue.
 */
const ZONE_KEYS: ReadonlyArray<readonly [zone: string, envName: string]> = [
  ['afiliados', 'ZONE_AFILIADOS_URL'],
  ['aportes', 'ZONE_APORTES_URL'],
  ['historial-laboral', 'ZONE_HISTORIAL_LABORAL_URL'],
  ['pensiones', 'ZONE_PENSIONES_URL'],
  ['empresas', 'ZONE_EMPRESAS_URL'],
  ['admin', 'ZONE_ADMIN_URL'],
];

function requireZoneUrl(zone: string, envName: string): string {
  const value = process.env[envName];
  if (!value) {
    throw new Error(
      `[NUTRIA gateway] Falta la variable "${envName}" para la zona "${zone}". ` +
        'Copia .env.example a .env.local y define el target antes de iniciar.',
    );
  }
  return value;
}

const ZONES: Record<string, string> = Object.fromEntries(
  ZONE_KEYS.map(([zone, envName]) => [zone, requireZoneUrl(zone, envName)]),
);

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