import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/generator.ts'),
      name: 'Mutto',
      fileName: 'muuto',
    },
  },
  plugins: [dts({ rollupTypes: true })],
})
