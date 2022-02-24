const fs = require('fs')

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const files = [
  {
    minimize: false,
    input: 'themes/vueform/scss/index.scss',
    output: 'themes/vueform/css/index.css',
  },
  {
    minimize: true,
    input: 'themes/vueform/scss/index.scss',
    output: 'themes/vueform/css/index.min.css',
  },
  {
    minimize: false,
    input: 'themes/material/scss/index.scss',
    output: 'themes/material/css/index.css',
  },
  {
    minimize: true,
    input: 'themes/material/scss/index.scss',
    output: 'themes/material/css/index.min.css',
  },
  {
    minimize: false,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'themes/tailwind-material/css/index.css',
  },
  {
    minimize: true,
    input: 'themes/tailwind-material/scss/index.scss',
    output: 'themes/tailwind-material/css/index.min.css',
  },
  {
    minimize: true,
    input: 'themes/bootstrap/css/index.ccss',
    output: 'themes/bootstrap/css/index.min.css',
  },
]

export default files.map((file) => {
  return {
    input: file.input,
    output: {
      file: file.output,
      format: 'esm',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: file.minimize,
        plugins: [
          autoprefixer(),
        ]
      }),
    ]
  }
})