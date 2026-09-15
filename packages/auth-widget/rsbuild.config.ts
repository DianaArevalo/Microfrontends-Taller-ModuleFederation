import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'auth_widget',
      filename: 'remoteEntry.js',
      exposes: {
        './index': './src/exports.ts',
      },
      shared: {},
    }),
  ],
  server: {
    port: 4113,
  },
  html: {
    title: 'NUTRIA · auth-widget',
  },
});