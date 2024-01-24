const fs = require('fs')
const { resolve } = require('path')

fs.renameSync(resolve(__dirname, './../node_modules/vue'), resolve(__dirname, './../node_modules/vue3'))
fs.renameSync(resolve(__dirname, './../node_modules/vue2'), resolve(__dirname, './../node_modules/vue'))