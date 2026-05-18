/// <reference types="vitest" />

import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

type VitestUserConfig = UserConfig & {
  test: {
    environment: 'jsdom';
    globals: true;
    setupFiles: string;
  };
};

const config: VitestUserConfig = {
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
};

export default defineConfig(config);
