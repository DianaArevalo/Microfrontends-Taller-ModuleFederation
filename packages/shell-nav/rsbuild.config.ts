import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell_nav',
      filename: 'remoteEntry.js',
      exposes: {
        './index': './src/exports.ts',
      },
      shared: {},
    }),
  ],
  server: {
    port: 3012,
  },
  html: {
    title: 'NUTRIA · shell-nav',
  },
});