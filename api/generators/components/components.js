require('module-alias/register')
import _ from 'lodash'
import fs from 'fs'
import Parser from './../../parser/single'

const filesPath = process.cwd() + '/src/components/'
const wrappersPath = process.cwd() + '/src/components/wrappers/'
const partialsPath = process.cwd() + '/src/components/elements/partials/'
const outputPath = process.cwd() + '/api/components/components.js'
const eventsInfo = require('./../../component-events').default
const slotsInfo = require('./../../component-slots').default

const Components = {}
const skipPrivate = false

const files = fs.readdirSync(filesPath).filter(f=>['.DS_Store'].indexOf(f) === -1 && f.match(/\.js$/))

fs.readdirSync(wrappersPath).filter(f=>['.DS_Store'].indexOf(f) === -1 && f.match(/\.js$/)).forEach(f => files.push(f))
fs.readdirSync(partialsPath).filter(f=>['.DS_Store'].indexOf(f) === -1 && f.match(/\.js$/)).forEach(f => files.push(f))

const partials = fs.readdirSync(partialsPath).filter(f=>['.DS_Store'].indexOf(f) === -1 && f.match(/\.js$/))

const components = {}

const include = []
const exclude = []

_.each([
  __dirname + '/../../../src/components',
  __dirname + '/../../../src/components/wrappers',
  __dirname + '/../../../src/components/elements/partials',
], (path) => {
  _.each(fs.readdirSync(path), (filename) => {
    if (!filename.match(/\.js$/)) {
      return
    }

    const component = filename.replace('.js', '')

    if (include.length > 0 && include.indexOf(component) === -1) {
      return
    }

    console.log(filename, 'loaded')

    Components[component] = require(path + '/' + filename).default
  })
})

console.log(Object.keys(Components))


const addProps = (final, Component) => {
  let props = {}

  _.forEach(Component.mixins || {}, (mixin) => {
    props = { ...props, ...mixin.props }
  })

  props = { ...props, ...Component.props || {} }

  final.props = {}

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

  _.forEach(props, (v,k) => {
    if (skipPrivate && v.private) {
      return
    }

    let Prop = {
      required: !!v.required,
    }

    addDefault(v, Prop)
    addTypes(v, Prop)

    final.props[k] = Prop
  })

  return final
}

const addEvents = (final, Component, componentName) => {
  final.events = {}

  _.each(Component.emits, (eventName) => {
    const eventInfo = eventsInfo[componentName] ? eventsInfo[componentName][eventName] : undefined

    if (!eventInfo) {
      return
    }

    final.events[eventName] = eventInfo
  })

  return final
}

const addSlots = (final, Component, componentName) => {
  final.slots = {}

  _.each(Component.slots, (slotName) => {
    const slotInfo = slotsInfo[componentName] ? slotsInfo[componentName][slotName] : undefined

    if (!slotInfo) {
      return
    }

    final.slots[slotName] = slotInfo
  })

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
  } catch (e) {
    console.log(name, components)
    throw e
  }
})

fs.writeFileSync(outputPath, 'module.exports = ' + JSON.stringify(components, null, 2))