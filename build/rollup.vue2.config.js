import autoprefixer from 'autoprefixer'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import license from 'rollup-plugin-license'
import vue from 'rollup-plugin-vue2'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const files = [

  // Theme files (ESM) - Vue 2
  {
    input: 'themes/bootstrap/index.mjs',
    output: 'dist/bootstrap.vue2.mjs',
  },
  {
    input: 'themes/material/index.mjs',
    output: 'dist/material.vue2.mjs',
  },
  {
    input: 'themes/tailwind/index.mjs',
    output: 'dist/tailwind.vue2.mjs',
  },
  {
    input: 'themes/tailwind-material/index.mjs',
    output: 'dist/tailwind-material.vue2.mjs',
  },
  {
    input: 'themes/vueform/index.mjs',
    output: 'dist/vueform.vue2.mjs',
  },

]

export default files.map((file) => {
  let plugins = []

  plugins = plugins.concat([
    vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer()],
      },
    }),
    postcss({
      inject: true,
    }),
    json(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      exclude: /^(.+\/)?node_modules\/.+$/,
    }),
    nodeResolve(),
    // terser(),
    license({
      banner: {
        content: `Vueform v<%= pkg.version %> (https://github.com/vueform/vueform)\n` + 
                  `Copyright (c) <%= moment().format('YYYY') %> Adam Berecz <adam@vueform.com>\n` + 
                  `Licensed under the MIT License`,
        commentStyle: 'ignored',
      }
    })
  ])

  return {
    input: file.input,
    output: {
      file: file.output,
      format: file.format || 'esm',
    },
    plugins,
    external: ['vue', 'axios', 'moment']
  }
})