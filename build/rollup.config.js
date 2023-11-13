import autoprefixer from 'autoprefixer'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import license from 'rollup-plugin-license'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const files = [
  {
    type: 'script',
    input: 'src/index.js',
    output: 'dist/index.js',
    banner: true,
  },
  {
    type: 'script',
    input: 'src/core.js',
    output: 'dist/core.js',
    banner: true,
  },
  {
    type: 'style',
    minimize: false,
    input: 'themes/vueform/scss/index.scss',
    output: 'themes/vueform/css/index.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/vueform/scss/index.scss',
    output: 'themes/vueform/css/index.min.css',
  },
  {
    type: 'style',
    minimize: false,
    input: 'themes/material/scss/index.scss',
    output: 'themes/material/css/index.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/material/scss/index.scss',
    output: 'themes/material/css/index.min.css',
  },
  {
    type: 'style',
    minimize: false,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'themes/tailwind-material/css/index.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'themes/tailwind-material/css/index.min.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/bootstrap/css/index.css',
    output: 'themes/bootstrap/css/index.min.css',
  },
]

export default files.map((file) => {
  let plugins = []

  if (file.type === 'script') {
    plugins = [
      json(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: /^(.+\/)?node_modules\/.+$/,
      }),
      nodeResolve(),
      terser(),
    ]

    if (file.banner) {
      plugins.push(license({
        banner: {
          content: `Vueform v<%= pkg.version %> (https://github.com/vueform/vueform)\n` + 
                   `Copyright (c) <%= moment().format('YYYY') %> Adam Berecz <adam@vueform.com>\n` + 
                   `Licensed under the MIT License`,
          commentStyle: 'ignored',
        }
      }))
    }
  } else if (file.type === 'style') {
    plugins = [
      postcss({
        extract: true,
        minimize: file.minimize,
        plugins: [
          autoprefixer(),
        ]
      }),
    ]
  }

  return {
    input: file.input,
    output: {
      file: file.output,
      format: 'esm',
    },
    plugins,
    external: ['vue', 'axios', 'moment']
  }
})