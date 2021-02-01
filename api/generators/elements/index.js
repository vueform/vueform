const fs = require('fs')
const _ = require('lodash')
const basePath = __dirname + '/../../..'
const featuresPath = '/src/composables/elements'
const elements = [
  'address',
  'button',
  'buttons',
  'checkbox',
  'checkboxgroup',
  'date',
  'dates',
  'datetime',
  'file',
  'gallery',
  'group',
  'hidden',
  'image',
  'key',
  'list',
  'location',
  'meta',
  'multifile',
  'multiselect',
  'object',
  'password',
  'radio',
  'radiogroup',
  'select',
  'slider',
  'static',
  'tags',
  'textarea',
  'text',
  'time',
  'toggle',
  'trix',
  'tTextarea',
  'tText',
  'tTrix',
]
const overrides = {
  key: 'hidden',
}

function getFeatures() {
  const features = {}
  
  elements.forEach((element) => {
    const composable = overrides[element] || element
    const path = `${basePath}${featuresPath}/use${_.upperFirst(composable)}.js`

    let data

    try {
      data = fs.readFileSync(path, 'UTF-8')
    } catch (e) {}

    if (!data) {
      return
    }

    const lines = data.split(/\r?\n/)

    features[element] = []

    lines.forEach((line) => {
      if (!line || !line.match(/\/use([^']*)\'$/)) {
        return false
      }

      let feature = _.lowerFirst(line.match(/\/use([^']*)\'$/)[1])

      if (line.match(/^import { ([^ ]*)/)) {
        feature += '_' + line.match(/^import { ([^ ]*)/)[1].replace(/_$/, '')
      }
      
      features[element].push(feature)
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

fs.writeFileSync(__dirname + '/../../elements/index.js', getElementsContent())