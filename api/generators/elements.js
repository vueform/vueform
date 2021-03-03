const fs = require('fs')
const _ = require('lodash')
const basePath = __dirname + '/../..'
const featuresPath = '/src/components/elements'
const elements = [
  // 'address',
  'button',
  'checkbox',
  'checkboxgroup',
  // 'date',
  // 'dates',
  // 'file',
  // 'group',
  'hidden',
  // 'list',
  // 'location',
  // 'multifile',
  // 'multiselect',
  // 'object',
  'radio',
  'radiogroup',
  // 'select',
  // 'slider',
  'static',
  // 'tags',
  'textarea',
  'text',
  'toggle',
  'trix',
  // 'tTextarea',
  // 'tText',
  // 'tTrix',
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

  getProps() {
    const props = {}
    
    elements.forEach((element) => {
      props[element] = {}

      let lines = this.getLines(element)

      lines.forEach((line, i) => {
        if (line.match(/^\s\s\s\s([a-zA-Z$]+):\s?{$/)) {
          let l = i
          let propName = lines[l].match(/^\s\s\s\s([a-zA-Z$]+):\s?{$/)[1]

          props[element][propName] = {}

          while(lines[l].match(/\s\s\s\s}/) === null) {
            l++

            if (lines[l].match(/required:/)) {
              props[element][propName].required = `${lines[l].match(/required:\s?(true|false)/)[1]}`
            }

            if (lines[l].match(/type:/)) {
              let types

              try {
                types = lines[l].match(/type:\s?\[?([a-zA-Z, ]+)\]?/)[1]
              } catch (e) {
                console.log(lines[l])
              }

              types = types.replace(/\s/g, '').split(',').map((t) => {
                switch (t) {
                  case 'Date':
                  case 'File':
                    return t

                  default:
                    return t.toLowerCase()
                }
              })

              props[element][propName].types = types
            }
          }

          while(lines[l] && lines[l].match(/\/\*\*/) === null) {
            if (lines[l].match(/@default/)) {
              props[element][propName].default = lines[l].match(/@default (.+)/)[1]
            }

            l--
          }
        }
      })
    })

    return props
  }

  getElements() {
    const features = this.getFeatures()
    const slots = this.getSlots()
    const events = this.getEvents()
    const props = this.getProps()
    const els = {}

    elements.forEach((element) => {
      els[element] = {
        features: features[element],
        slots: slots[element],
        events: events[element],
        props: props[element],
      }
    })

    return els
  }

  generate() {
    let contents = ''

    contents += 'export default '
    contents += JSON.stringify(this.getElements(), null, 2)

    fs.writeFileSync(__dirname + '/../elements.js', contents)
  }
}

const generator = new Generator

generator.generate()