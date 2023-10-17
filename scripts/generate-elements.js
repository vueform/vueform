const _ = require('lodash')
const fs = require('fs')
require('module-alias/register')

const elementsInfo = require('./../api/generated/elements-base').default
const eventsInfo = require('./../api/definitions/events').default
const slotsInfo = require('./../api/definitions/slots').default
const viewsInfo = require('./../api/definitions/views').default

const elements = {}
const skipPrivate = false

global.File = function File() {}

_.each(fs.readdirSync(__dirname + '/../src/components/elements'), (filename) => {
  if (!filename.match(/\.js$/)) {
    return
  }

  // console.log(filename, 'loaded')

  const element = filename.replace('.js', '')

  elements[element] = require('./../src/components/elements/' + filename).default
})

const elementFeatures = require('./../api/generated/element-features').default
const commonFeatures = require('./../api/generated/common-features').default

const ignore = ['AddressElement']
const include = []

const output = __dirname + '/../api/generated/elements.js'

const generate = () => {
  let contents = `module.exports = {\n`

  _.each(elements, (element, elementName) => {
    if ((include.length > 0 && include.indexOf(elementName) === -1) || ignore.indexOf(elementName) !== -1) {
      return
    }
    contents += `  ${elementName}: {\n`

    contents = addProps(contents, element)
    contents = addFeatureAsset('data', contents, elementName)
    contents = addFeatureAsset('computed', contents, elementName)
    contents = addFeatureAsset('methods', contents, elementName)
    contents = addFeatureAsset('inject', contents, elementName)
    contents = addEvents(contents, elementName)
    contents = addSlots(contents, elementName)
    contents = addViews(contents, elementName)

    contents += `  },\n`
  })

  contents += '}'

  return contents
}

const addEvents = (contents, elementName) => {
  const elementKey = _.lowerFirst(elementName).replace('Element', '')
  const element = elementsInfo[elementKey]

  if (!element.events) {
    return contents
  }

  contents += `    events: {\n`

  _.forEach(element.events, (eventName) => {
    let eventInfo
    
    try {
      eventInfo = eventsInfo[eventName][elementName] || eventsInfo[eventName].default;

      contents += `      '${eventName}': {\n`

      if (eventInfo.description) {
        contents += `        description: '${eventInfo.description.split('').map(c=>c==='\''?'&apos;':c).join('')}',\n`
      }

      if (eventInfo.private !== undefined) {
        contents += `        private: ${eventInfo.private},\n`
      }

      if (eventInfo.params) {
        contents += `        params: {\n`

        _.forEach(eventInfo.params, (param, paramName) => {
          contents += `          ${paramName}: {\n`

          if (param.description) {
            contents += `            description: '${param.description.split('').map(c=>c==='\''?'&apos;':c).join('')}',\n`
          }

          if (param.types) {
            contents += `            types: [\n`

            _.forEach(param.types, (type) => {
              contents += `              '${type}',\n`
            })
            contents += `            ]\n`
          }

          contents += `          },\n`
        })

        contents += `       },\n`
      }
    } catch (e) {
      console.log(elementName, elementKey, eventName)
      throw e
    }

    contents += `      },\n`
  })

  contents += `    },\n`

  return contents
}

const addSlots = (contents, elementName) => {
  const elementKey = _.lowerFirst(elementName).replace('Element', '')
  const element = elementsInfo[elementKey]

  if (!element.slots) {
    return contents
  }

  contents += `    slots: {\n`

  _.forEach(element.slots, (slotName) => {
    if (!slotsInfo[slotName]) {
      contents += `      '${slotName}': {},\n`
      return
    }

    const slotInfo = slotsInfo[slotName][elementName] || slotsInfo[slotName].default

    contents += `      '${slotName}': {\n`

    if (slotInfo.description) {
      contents += `        description: '${slotInfo.description.split('').map(c=>c==='\''?'&apos;':c).join('')}',\n`
    }

    if (slotInfo.props) {
      contents += `        props: {\n`

      _.forEach(slotInfo.props, (prop, propName) => {
        contents += `          ${propName}: {\n`

        if (prop.description) {
          contents += `            description: '${prop.description.split('').map(c=>c==='\''?'&apos;':c).join('')}',\n`
        }

        if (prop.types) {
          contents += `            types: [\n`

          _.forEach(prop.types, (type) => {
            contents += `              '${type}',\n`
          })
          contents += `            ],\n`
        }

        contents += `          },\n`
      })
      contents += `        },\n`
    }

    contents += `      },\n`
  })

  contents += `    },\n`

  return contents
}

const addViews = (contents, elementName) => {
  const views = viewsInfo[elementName]

  if (!views) {
    contents += `    views: [],\n`
    return contents
  }

  contents += `    views: ['${views.join("', '")}'],\n`

  return contents
}

const addProps = (contents, element) => {
  let props = {}

  _.forEach(element.mixins || {}, (mixin) => {
    props = { ...props, ...mixin.props }
  })

  props = { ...props, ...element.props || {} }

  const addDefault = (prop) => {
    let default_ = prop['@default'] || prop.default

    if (typeof default_ === 'function') {
      default_ = JSON.stringify(default_())
    }

    contents += `        default: '${default_}',\n`
  }

  const addLocalized = (prop) => {
    let localized = prop.localized

    contents += `        localized: ${localized ? 'true' : 'false'},\n`
  }

  const addTypes = (prop) => {
    let types = prop['@type'] || prop.type

    contents += `        types: [\n`

    _.forEach(types, (v,k) => {
      let type = v.prototype.constructor.name

      if (type !== 'File') {
        type = type.toLowerCase()
      }

      contents += `          '${type}',\n`
    })

    contents += `        ],\n`
  }

  const addNative = (prop) => {
    if (prop.native === undefined) {
      return
    }

    let native = prop.native

    contents += `        native: ${native},\n`
  }

  const addRequired = (prop) => {
    if (prop.required === undefined) {
      return
    }

    let required = prop.required

    contents += `        required: ${required},\n`
  }

  contents += `    props: {\n`

  _.forEach(props, (v,k) => {
    if (skipPrivate && v.private) {
      return
    }

    contents += `      ${k}: {\n`
    contents += `        required: '${v.required}',\n`
    addDefault(v)
    addLocalized(v)
    addTypes(v)
    addNative(v)
    addRequired(v)

    if (!skipPrivate) {
      contents += `        private: ${!!v.private},\n`
    }

    contents += `      },\n`
  })

  contents += `    },\n`

  return contents
}

const addFeatureAsset = (type, contents, elementName) => {
  contents += `    ${type}: {\n`

  _.forEach(getFeatures(elementName), (featureName) => {
    const feature = getFeature(featureName)

    if (!feature) {
      return
    }

    _.forEach(feature[type] || {}, (asset, key) => {
      if (skipPrivate && asset.public === false) {
        return
      }

      contents += `      ${key}: {\n`

      if (asset.types) {
        contents += `        types: [\n`

        _.forEach(asset.types, (type) => {
          contents += `          '${type}',\n`
        })

        contents += `        ],\n`
      }

      contents += `        description: '${asset.description.split('').map(c=>c==='\''?'&apos;':c).join('')}',\n`

      if (asset.default) {
        contents += `        default: '${asset.default}',\n`
      }

      if (asset.returns) {
        contents += `        returns: '${asset.returns}',\n`
      }

      if (asset.params) {
        contents += `        params: {\n`

        _.forEach(asset.params, (param, k) => {
          contents += `          ${k}: {\n`
          contents += `            types: [\n`

          _.forEach(param.types, (type) => {
            contents += `              '${type}',\n`
          })

          contents += `            ],\n`
          contents += `            required: '${param.required === true}',\n`
          contents += `            description: '${param.description.split('').map(c=>c==='\''?'&apos;':c).join('')}',\n`
          contents += `          },\n`
        })

        contents += `        },\n`
      }

      if (!skipPrivate) {
        contents += `        private: ${asset.public === false},\n`
      }

      contents += `      },\n`
    })

  })

  contents += `    },\n`

  return contents
}

const getFeatures = (elementName) => {
  try {
    return elementsInfo[_.lowerFirst(elementName).replace('Element', '')].features
  } catch (e) {
    console.log(elementName)
    throw new Error(e)
  }
}

const getFeature = (featureName) => {
  let base = featureName.split('_')[0]
  let variant = featureName.split('_').length > 1 ? featureName.split('_')[1] : 'base'

  return elementFeatures[base] ? elementFeatures[base][variant] : commonFeatures[base][variant]
}

let result = generate()

fs.writeFileSync(output, result)