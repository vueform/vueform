require('module-alias/register')
import _ from 'lodash'
import fs from 'fs'
import Parser from './parser/single'

global.File = function File() {}

const filesPath = process.cwd() + '/src/components/'
const wrappersPath = process.cwd() + '/src/components/wrappers/'
const partialsPath = process.cwd() + '/src/components/elements/partials/'
const outputPath = process.cwd() + '/api/generated/components.js'
const eventsInfo = require('./../api/definitions/events').default
const slotsInfo = require('./../api/definitions/slots').default
const viewsInfo = require('./../api/definitions/views').default

const Components = {}
const skipPrivate = false

const files = fs.readdirSync(filesPath).filter(f=>['.DS_Store', 'index.js', 'VueformBlank.js'].indexOf(f) === -1 && f.match(/\.js$/))

fs.readdirSync(wrappersPath).filter(f=>['.DS_Store', 'index.js'].indexOf(f) === -1 && f.match(/\.js$/)).forEach(f => files.push(f))
fs.readdirSync(partialsPath).filter(f=>['.DS_Store', 'index.js'].indexOf(f) === -1 && f.match(/\.js$/)).forEach(f => files.push(f))

const partials = fs.readdirSync(partialsPath).filter(f=>['.DS_Store'].indexOf(f) === -1 && f.match(/\.js$/))

const components = {}

const include = []
const exclude = []

_.each([
  __dirname + '/../src/components',
  __dirname + '/../src/components/wrappers',
  __dirname + '/../src/components/elements/partials',
], (path) => {
  _.each(fs.readdirSync(path), (filename) => {
    if (!filename.match(/\.js$/)) {
      return
    }

    const component = filename.replace('.js', '')

    if (include.length > 0 && include.indexOf(component) === -1) {
      return
    }

    // console.log(filename, 'loaded')

    Components[component] = require(path + '/' + filename).default
  })
})

// console.log(Object.keys(Components))


const addProps = (final, Component) => {
  let props = {}

  _.forEach(Component.mixins || {}, (mixin) => {
    props = { ...props, ...mixin.props }
  })

  props = { ...props, ...Component.props || {} }

  final.props = {}

  const addLocalized = (prop, Prop) => {
    let localized = prop['@localized'] || prop.localized

    Prop.localized = localized
  }

  const addDefault = (prop, Prop) => {
    let default_ = prop['@default'] || prop.default

    if (typeof default_ === 'function') {
      default_ = JSON.stringify(default_())
    }

    Prop.default = default_
  }

  const addTypes = (prop, Prop) => {
    let types = prop['@type'] || prop.type

    if (!types) {
      Prop.types = ['any']
      return
    }

    if (!Array.isArray(types)) {
      types = [types]
    }

    Prop.types = types.map(t => t.prototype.constructor.name.toLowerCase())
  }

  const addNative = (prop, Prop) => {
    if (prop.native === undefined) {
      return
    }

    Prop.native = prop.native
  }

  const addPrivate = (prop, Prop) => {
    if (prop.private === undefined) {
      return
    }

    Prop.private = prop.private
  }

  _.forEach(props, (v,k) => {
    if (skipPrivate && v.private) {
      return
    }

    let Prop = {
      required: !!v.required,
    }

    addDefault(v, Prop)
    addLocalized(v, Prop)
    addTypes(v, Prop)
    addNative(v, Prop)
    addPrivate(v, Prop)

    final.props[k] = Prop
  })

  return final
}

const addEvents = (final, Component, componentName) => {
  final.events = {}

  _.each(Component.emits, (eventName) => {
    let eventInfo = eventsInfo[eventName]?.[componentName] || eventsInfo[eventName]?.default || undefined

    if (!eventInfo) {
      eventInfo = {
        description: '',
      }
    }

    final.events[eventName] = eventInfo
  })

  return final
}

const addSlots = (final, Component, componentName) => {
  final.slots = {}

  _.each(Component.slots, (slotName) => {
    let slotInfo = slotsInfo[slotName]?.[componentName] || slotsInfo[slotName]?.default || undefined

    if (!slotInfo) {
      slotInfo = {
        description: '',
      }
    }

    final.slots[slotName] = slotInfo
  })

  return final
}

const addViews = (final, Component, componentName) => {
  final.views = viewsInfo[componentName] || []

  return final
}

_.each(files, (file) => {
  let path = filesPath

  if (file.indexOf('Wrapper') !== -1) {
    path = wrappersPath
  }
  
  if (partials.indexOf(file) !== -1) {
    path = partialsPath
  }

  let parser = new Parser(path, file, false)
  let name = file.replace('.js','').trim()

  if (include.length > 0 && include.indexOf(name) === -1) {
    return
  }

  if (exclude.length > 0 && exclude.indexOf(name) !== -1) {
    return
  }

  parser.init()

  components[name] = parser.get().base

  try {
    components[name] = addProps(components[name], Components[name])
    components[name] = addEvents(components[name], Components[name], name)
    components[name] = addSlots(components[name], Components[name], name)
    components[name] = addViews(components[name], Components[name], name)
  } catch (e) {
    console.log(name, components)
    throw e
  }
})

fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(components, null, 2))