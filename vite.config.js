import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import rollupNodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [
    react(),
    rollupNodeResolve({
      extensions: ['.js', '.jsx'], // Adicione as extensões que deseja resolver
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Adiciona um alias para facilitar a importação de módulos
    },
    extensions: ['.js', '.jsx'], // Adicione as extensões que deseja resolver
  },
});
