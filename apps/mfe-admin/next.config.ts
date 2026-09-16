import type { NextConfig } from 'next';

/**
 * Zona Multi-Zone: basePath /admin + rutas en la raíz de app/*. Así los
 * assets estáticos viven bajo /admin/_next/* y el shell-nutria puede
 * proxificar las rutas /admin* hacia este servidor.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/admin',
};

export default nextConfig;