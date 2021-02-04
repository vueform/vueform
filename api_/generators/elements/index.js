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

class Generator {

  getLines(element) {
    const composable = overrides[element] || element
    const path = `${basePath}${featuresPath}/use${_.upperFirst(composable)}.js`

    let data

    try {
      data = fs.readFileSync(path, 'UTF-8')
    } catch (e) {}

    if (!data) {
      return
    }

    return data.split(/\r?\n/)
  }

  getFeatures() {
    const features = {}
    
    elements.forEach((element) => {
      features[element] = []

      this.getLines(element).forEach((line) => {
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

  getSlots() {
    const slots = {}
    
    elements.forEach((element) => {
      slots[element] = []

      let lines = this.getLines(element)

      lines.forEach((line, i) => {
        if (line.match(/slots:\s?\[/)) {
          let l = i

          while(lines[l].match(/\]/) === null) {
            l++

            slots[element] = slots[element].concat((lines[l].match(/([a-zA-Z]+)/g)||[]))
          }
        }
      })
    })

    return slots
  }

  getEvents() {
    const events = {}
    
    elements.forEach((element) => {
      events[element] = []

      let lines = this.getLines(element)

      lines.forEach((line, i) => {
        if (line.match(/events:\s?\[/) && !line.match(/events:\s?\[\]/)) {
          let l = i

          while(lines[l].match(/\]/) === null) {
            l++

            events[element] = events[element].concat((lines[l].match(/([a-zA-Z]+)/g)||[]))
          }
        }
      })
    })

    return events
  }

  getElements() {
    const features = this.getFeatures()
    const slots = this.getSlots()
    const events = this.getEvents()
    const els = {}

    elements.forEach((element) => {
      els[element] = {
        features: features[element],
        slots: slots[element],
        events: events[element],
      }
    })

    return els
  }

  generate() {
    let contents = ''

    contents += 'export default '
    contents += JSON.stringify(this.getElements(), null, 2)

    fs.writeFileSync(__dirname + '/../../elements/index.js', contents)
  }
}

const generator = new Generator

generator.generate()