const fs = require('fs')

import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'

const themes = [
  'vueform'
]

export default themes.reduce((all, theme) => {
  return all.concat([
    {
      input: `themes/${theme}/scss/index.scss`,
      output: {
        file: `themes/${theme}/css/index.min.css`,
        format: 'esm',
      },
      plugins: [
        postcss({
          extract: true,
          minimize: true,
          plugins: [
            autoprefixer(),
          ]
        }),
      ]
    },
    {
      input: `themes/${theme}/scss/index.scss`,
      output: {
        file: `themes/${theme}/css/index.css`,
        format: 'esm',
      },
      plugins: [
        postcss({
          extract: true,
          minimize: false,
          plugins: [
            autoprefixer(),
          ]
        }),
      ]
    },
  ])
}, [])