const _ = require('lodash')
const fs = require('fs')
const elements = require('./../../elements').default
const elementFeatures = require('./../../features/elements').default
const commonFeatures = require('./../../features/common').default
const events = require('./../../events').default
const slots = require('./../../slots').default

const ignore = []
const include = []

const output = __dirname + '/../../../api/components/elements.js'

const api = {}

_.each(elements, (element, elementName) => {
  if (include.length > 0 && include.indexOf(elementName) === -1) {
    return
  }

  api[elementName] = {
    options: {},
    props: {},
    data: {},
    computed: {},
    inject: {},
    methods: {},
    slots: {},
    events: {}
  }

  element.features.forEach((elementFeature) => {
    let feature = elementFeatures[elementFeature.split('_')[0]] || commonFeatures[elementFeature.split('_')[0]]
    feature = feature[elementFeature.split('_')[1]||'base']

    _.forEach(feature, (props, propType) => {
      _.forEach(props, (prop, propName) => {
        api[elementName][propType][propName] = prop
      })
    })
  })

  element.slots.forEach((slotName) => {
    let slot = {}

    if (slots[slotName]) {
      slot = slots[slotName][elementName] || slots[slotName].base
    }

    api[elementName].slots[slotName] = slot
  })

  element.events.forEach((eventName) => {
    let event = {}

    if (events[eventName]) {
      event = events[eventName][elementName] || events[eventName].base
    }

    api[elementName].events[eventName] = event
  })
})

fs.writeFileSync(output, 'export default ' + JSON.stringify(api, null, 2))