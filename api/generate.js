const fs = require('fs')
const _ = require('lodash')
const basePath = './..'
const featuresPath = '/src/composables/elements'
const elements = ['text', 'group', 'object', 'list', 'tText']

function getFeatures() {
  const features = {}
  
  elements.forEach((element) => {
    const path = `${basePath}${featuresPath}/use${_.upperFirst(element)}.js`

    const data = fs.readFileSync(path, 'UTF-8')
    const lines = data.split(/\r?\n/)

    features[element] = []

    lines.forEach((line) => {
      if (!line || !line.match(/\/use([^']*)\'$/)) {
        return false
      }
      
      features[element].push(_.lowerFirst(line.match(/\/use([^']*)\'$/)[1]))
    })

    features[element].sort()
  })

  return features
}

function getElementsContent() {
  const features = getFeatures()

  let content = "export default {\n"

  _.each(features, (elementFeatures, element) => {
    content += `  ${element}: {\n`
    content += `    features: [\n`
    content += `      '${elementFeatures.join('\',\n      \'')}'\n`
    content += `    ]\n`
    content += `  },\n`
  })

  content += "}"

  return content
}

fs.writeFileSync('./elements.js', getElementsContent())