import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import postcss from 'rollup-plugin-postcss';
// import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
// import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
// import inject from '@rollup/plugin-inject'
// import wasm from 'vite-plugin-wasm'

// @ts-ignore
export default defineConfig(({}) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      'process.env': {},
      global: {},
    },
    plugins: [react(),
      postcss({
      // PostCSS plugins configuration
      })
    ],
    resolve: {
      alias: {
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis'
        },
        // Enable esbuild polyfill plugins
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true
          }),
          //NodeModulesPolyfillPlugin()
        ],
      }
    },
    build: {
      minify: false,
      rollupOptions: {
        external: [
          /^node:.*/,
          'lib/styles/theme'
        ],
        plugins: [
          // inject({ Buffer: ['Buffer','Buffer'], process: ['process'] }),
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true
          }),
          //NodeModulesPolyfillPlugin()
          // rollupNodePolyFill()
        ],
      }
    },
  }
})