const Generator = require('./index')

const featuresPath = process.cwd() + '/src/composables/'
const outputPath = process.cwd() + '/api/features/components.js'

const generator = new Generator(featuresPath, outputPath)

generator.generate()