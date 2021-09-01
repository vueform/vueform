const _ = require('lodash')
const fs = require('fs')
const elements = require('./../../elements').default
const elementFeatures = require('./../../features/elements').default
const commonFeatures = require('./../../features/common').default

const ignore = []
const include = []

const output = __dirname + '/../../components/elements.js'

let contents = ''

contents += `export default {\n`

_.each(elements, (element, elementName) => {
  if (include.length > 0 && include.indexOf(elementName) === -1) {
    return
  }

  contents += `  ${elementName}: {\n`
  contents += `    props: {\n`
  contents += `      name: {\n`
  contents += `        required: true,\n`
  contents += `        type: [String, Number],\n`
  contents += `      },\n`,

  _.each(element.features, (featureName) => {
    let base = featureName.split('_')[0]
    let variant = featureName.split('_').length > 1 ? featureName.split('_')[1] : 'base'

    let feature = elementFeatures[base] ? elementFeatures[base][variant] : commonFeatures[base][variant]

    if (!feature || !feature.options) {
      return
    }

    _.each(feature.options, (option, optionName) => {
      if (ignore.indexOf(optionName) !== -1) {
        return
      }

      let types = []

      _.each(option.types, (type) => {
        let Type

        switch(type) {
          case 'object': Type = 'Object'; break
          case 'array': Type = 'Array'; break
          case 'string': Type = 'String'; break
          case 'number': Type = 'Number'; break
          case 'boolean': Type = 'Boolean'; break
          case 'function': Type = 'Function'; break
          case 'component': Type = 'Object'; break
        }

        types.push(Type)
      })

      contents += `      ${optionName}: {\n`
      contents += `        required: false,\n`
      contents += `        type: [${types.join(', ')}],\n`
      contents += `        default: undefined\n`
      contents += `      },\n`
    })
  })
  contents += `    },\n`

  if (element.slots.length > 0) {
    contents += `    slots: ['${element.slots.join("', '")}'],\n`
  } else {
    contents += `    slots: [],\n`
  }

  if (element.events.length > 0) {
    contents += `    events: ['${element.events.join("', '")}'],\n`
  } else {
    contents += `    events: [],\n`
  }

  contents += `  },\n`
})
contents += '}'

fs.writeFileSync(output, contents)