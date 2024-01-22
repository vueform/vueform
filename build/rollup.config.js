import autoprefixer from 'autoprefixer'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import license from 'rollup-plugin-license'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const files = [

  // Main scripts (ESM)
  {
    type: 'script',
    input: 'src/index.js',
    output: 'dist/index.mjs',
    banner: true,
  },
  {
    type: 'script',
    input: 'src/core.js',
    output: 'dist/core.mjs',
    banner: true,
  },

  // Theme files (ESM)
  {
    type: 'vue',
    input: 'themes/bootstrap/index.mjs',
    output: 'dist/bootstrap.mjs',
    banner: true,
  },
  {
    type: 'vue',
    input: 'themes/material/index.mjs',
    output: 'dist/material.mjs',
    banner: true,
  },
  {
    type: 'vue',
    input: 'themes/tailwind/index.mjs',
    output: 'dist/tailwind.mjs',
    banner: true,
  },
  {
    type: 'vue',
    input: 'themes/tailwind-material/index.mjs',
    output: 'dist/tailwind-material.mjs',
    banner: true,
  },
  {
    type: 'vue',
    input: 'themes/vueform/index.mjs',
    output: 'dist/vueform.mjs',
    banner: true,
  },

  // // Main scripts (CJS)
  // {
  //   type: 'script',
  //   input: 'src/index.js',
  //   output: 'dist/index.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },
  // {
  //   type: 'script',
  //   input: 'src/core.js',
  //   output: 'dist/core.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },

  // // Theme files (CJS)
  // {
  //   type: 'vue',
  //   input: 'themes/bootstrap/index.js',
  //   output: 'dist/bootstrap.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },
  // {
  //   type: 'vue',
  //   input: 'themes/material/index.js',
  //   output: 'dist/material.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },
  // {
  //   type: 'vue',
  //   input: 'themes/tailwind/index.js',
  //   output: 'dist/tailwind.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },
  // {
  //   type: 'vue',
  //   input: 'themes/tailwind-material/index.js',
  //   output: 'dist/tailwind-material.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },
  // {
  //   type: 'vue',
  //   input: 'themes/vueform/index.js',
  //   output: 'dist/vueform.cjs',
  //   format: 'cjs',
  //   banner: true,
  // },

  // Theme styles
  {
    type: 'style',
    minimize: true,
    input: 'themes/bootstrap/css/index.css',
    output: 'dist/bootstrap.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/material/scss/index.scss',
    output: 'dist/material.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'dist/tailwind-material.css',
  },
  {
    type: 'style',
    minimize: true,
    input: 'themes/vueform/scss/index.scss',
    output: 'dist/vueform.css',
  },

  // To keep backward compatibility after 1.7
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

  if (file.type === 'vue') {
    plugins.push(vue({
      css: false,
      style: {
        postcssPlugins: [autoprefixer()],
      },
    }))

    plugins.push(postcss({
      inject: true,
    }))
  }

  if (['script', 'vue'].indexOf(file.type) !== -1) {
    plugins = plugins.concat([
      json(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: /^(.+\/)?node_modules\/.+$/,
      }),
      nodeResolve(),
      terser(),
    ])

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
  }
  
  if (file.type === 'style') {
    plugins = plugins.concat([
      postcss({
        extract: true,
        minimize: file.minimize,
        plugins: [
          autoprefixer(),
        ]
      }),
    ])
  }

  return {
    input: file.input,
    output: {
      file: file.output,
      format: file.format || 'esm',
    },
    plugins,
    external: ['vue', 'axios', 'moment', /lodash\/.*/]
  }
})