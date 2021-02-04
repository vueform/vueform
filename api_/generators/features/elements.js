const Generator = require('./index')

const featuresPath = process.cwd() + '/src/composables/elements/features/'
const outputPath = process.cwd() + '/api/features/elements.js'

const generator = new Generator(featuresPath, outputPath)

generator.generate()