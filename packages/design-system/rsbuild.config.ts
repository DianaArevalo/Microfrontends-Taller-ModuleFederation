import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'design_system',
      filename: 'remoteEntry.js',
      exposes: {
        './index': './src/exports.ts',
      },
      shared: {},
    }),
  ],
  server: {
    port: 4111,
  },
  html: {
    title: 'NUTRIA · design-system',
  },
});