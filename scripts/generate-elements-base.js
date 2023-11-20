const fs = require('fs')
const _ = require('lodash')
const basePath = __dirname + '/..'
const featuresPath = '/src/components/elements'
const outputPath = __dirname + '/../api/generated/elements-base.js'
const elements = [
  'button',
  'checkbox',
  'checkboxgroup',
  'date',
  'dates',
  'file',
  'generic',
  'group',
  'hidden',
  'list',
  'location',
  'multifile',
  'multiselect',
  'object',
  'radio',
  'radiogroup',
  'select',
  'slider',
  'static',
  'tags',
  'textarea',
  'text',
  'toggle',
  'editor',
  'tTextarea',
  'tText',
  'tEditor',
]
const overrides = {
  key: 'hidden',
}

class Generator {

  getLines(element) {
    const composable = overrides[element] || element
    const path = `${basePath}${featuresPath}/${_.upperFirst(composable)}Element.js`

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

        if (['element'].indexOf(feature) === -1) {
          features[element].push(feature)
        }
        
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
        if (line.match(/slots\s?=\s?\[/)) {
          let l = i

          while(lines[l].match(/\]/) === null) {
            l++

            slots[element] = slots[element].concat((lines[l].match(/([a-zA-Z-]+)/g)||[]))
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
        if (line.match(/emits:\s?(\[[^\]]*\])/g)) {
          events[element] = JSON.parse(line.match(/emits:\s?(\[[^\]]*\])/)[1].replace(/'/g, '"'))
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

    fs.writeFileSync(outputPath, contents)
  }
}

const generator = new Generator

generator.generate()