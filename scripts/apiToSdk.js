const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const elements = require('./../api/components/elements')
const components = require('./../api/components/components')
const apiDir = path.resolve(`${__dirname}/../../vueform.com/apps/www/src/content/reference`)
const outputDir = path.resolve(`${__dirname}/../../vueform.com/apps/www/src/content-partials/reference/generated`)
const optionsOrganizer = require('./../api/options-organizer')
const propertiesOrganizer = require('./../api/properties-organizer')
const methodsOrganizer = require('./../api/methods-organizer')
const fieldNames = require('./../api/field-names')

const toKebab = (str) => {
  let has$Ending = str.match(/\$$/)

  return _.kebabCase(str) + (has$Ending ? '_' : '')
}

_.forEach(['', '/properties', '/methods', '/events', '/slots', '/provide', '/options', '/views'], (dir) => {
  try {
    fs.readdirSync(`${outputDir}${dir}`)
  } catch (e) {
    fs.mkdirSync(`${outputDir}${dir}`)
  }
})

const createOptions = (component, component_name, ComponentName, name, Name, fieldName) => {
  if (!component.props || !Object.keys(component.props).length) {
    return null
  }

  let content = ''

  const addOption = (option, optionName) => {
    if (option.private) {
      return
    }

    content += `### ${optionName} {#option-${toKebab(optionName)}}\n\n`

    if (option.types) {
      content += `* Type: \`${option.types.join('|')}\`\n`
    }

    if (option.default) {
      let defaultValue = option.default

      if (typeof defaultValue === 'string' && defaultValue.match(/^\{/) !== null && defaultValue.length > 2) {
        defaultValue = JSON.stringify(JSON.parse(defaultValue), null, 2).replace(/\n/g, '<br>')

        content += `* Default: <code class="whitespace-pre">${defaultValue}</code>\n`
      } else {
        content += `* Default: \`${defaultValue}\`\n`
      }
    }

    if (option.required === true) {
      content += `* Required: \`${option.required}\`\n`
    }

    if (option.native === false) {
      content += `* Native support: \`${option.native}\`\n`
    }

    if (option.localized === true) {
      content += `* <a href="/docs/i18n#translating-element-properties" class="dotted-underline">Localizable</a>: \`${option.localized}\`\n`
    }

    content += `\n`
    content += `@require src/content-partials/reference/examples/options/${optionName}/${component_name}?name=${escape(name)}&Name=${escape(Name)}&field=${escape(fieldName)}&component=${escape(component_name)}&Component=${escape(ComponentName)}\n\n`
  }
  
  _.each(component.props, (option, optionName) => {
    // skip organizing for certain comps
    if (optionsOrganizer.indexOf(optionName) !== -1 && ['Vueform'].indexOf(ComponentName) === -1) {
      return
    }

    addOption(option, optionName)
  })

  // skip organizing for certain comps
  if (['Vueform'].indexOf(ComponentName) === -1) {
    _.each(optionsOrganizer, (optionName) => {
      const option = component.props[optionName]

      if (!option) {
        return
      }

      addOption(option, optionName)
    })
  }

  fs.writeFileSync(`${outputDir}/options/${component_name}.md`, content)

  return true
}

const createProperties = (component, component_name, ComponentName, name, Name, fieldName) => {
  let empty = true

  let content = ``

  const addProperty = (property, propertyName) => {
    if (property.public === false || property.private === true) {
      return
    }

    empty = false

    const types = property.types ? `\`${property.types.join('\|')}\`` : null
    const def = property.default ? `\`${property.default}\`` : null
    const description = property.description ? escapeStr(property.description).split('').map(c=>c==='\''?'&apos;':c).join('') : null

    content += `### ${propertyName} {#property-${toKebab(propertyName)}}\n\n`

    if (types) {
      content += `* Type: ${types}\n`
    }

    if (def) {
      content += `* Default: ${def}\n`
    }

    content += `* Group: \`${property.type}\`\n\n`

    if (description) {
      content += `<div>\n\n${description}\n\n</div>\n\n`
    }
  }

  const properties = {}

  _.each((['inject', 'data', 'computed']), (type) => {
    if (!component[type] || !Object.keys(component[type]).length) {
      return null
    }

    _.each(component[type], (property, propertyName) => {
      properties[propertyName] = Object.assign({}, property, {
        type,
      })
    })
  })

  _.each(properties, (property, propertyName) => {
    if (propertiesOrganizer.indexOf(propertyName) !== -1) {
      return
    }

    addProperty(property, propertyName)
  })

  _.each(propertiesOrganizer, (propertyName) => {
    let property = component[properties[propertyName]?.type]?.[propertyName]

    if (!property) {
      return
    }

    property = Object.assign({}, property, {
      type: properties[propertyName]?.type,
    })

    addProperty(property, propertyName)
  })

  fs.writeFileSync(`${outputDir}/properties/${component_name}.md`, content)

  return !empty
}

const createMethods = (component, component_name, ComponentName, name, Name, fieldName) => {
  if (!component.methods || !Object.keys(component.methods).length) {
    return null
  }

  let content = ''

  const addMethod = (method, methodName) => {
    if (method.public === false || method.private === true) {
      return
    }

    content += `### ${methodName} {#method-${toKebab(methodName)}}\n\n`

    if (method.params) {
      content += `* Arguments:\n`

      _.each(method.params, (param, paramName) => {
        content += `  * \`{${param.types.join('|')}} ${paramName}${param.required ? '*' : ''}\`${param.description ? ' - ' : ''}${escapeStr(param.description)}\n`
      })
    }

    if (method.returns) {
      content += `* Returns: \`${method.returns}\`\n`
    }

    if (method.description) {
      content += `<div>\n\n${method.description}\n\n</div>\n\n`
    }

    content += `\n`
    content += `@require src/content-partials/reference/examples/methods/${methodName}/${component_name}?name=${escape(name)}&Name=${escape(Name)}&field=${escape(fieldName)}&component=${escape(component_name)}&Component=${escape(ComponentName)}\n\n`
  }

  _.each(component.methods, (method, methodName) => {
    if (methodsOrganizer.indexOf(methodName) !== -1) {
      return
    }

    addMethod(method, methodName)
  })

  _.each(methodsOrganizer, (methodName) => {
    const method = component.methods[methodName]

    if (!method) {
      return
    }

    addMethod(method, methodName)
  })

  if (!content.length) {
    return null
  }

  fs.writeFileSync(`${outputDir}/methods/${component_name}.md`, content)

  return true
}

const createEvents = (component, component_name, ComponentName, name, Name, fieldName) => {
  if (!component.events || !Object.keys(component.events).length) {
    return null
  }

  let content = ''

  const addEvent = (event, eventName) => {
    if (event.public === false || event.private === true) {
      return
    }

    content += `### ${eventName} {#event-${toKebab(eventName)}}\n\n`

    if (event.params) {
      content += `* Params:\n`

      _.each(event.params, (param, paramName) => {
        content += `  * \`{${param.types.join('|')}} ${paramName}\`${param.description ? ' - ' : ''}${escapeStr(param.description)}\n`
      })
    }

    if (event.description) {
      content += `<div>\n\n${event.description}\n\n</div>\n\n`
    }

    content += `\n`
    content += `@require src/content-partials/reference/examples/events/${eventName}/${component_name}?name=${escape(name)}&Name=${escape(Name)}&field=${escape(fieldName)}&component=${escape(component_name)}&Component=${escape(ComponentName)}\n\n`
  }

  _.forEach(component.events, (event, eventName) => {
    addEvent(event, eventName)
  })

  fs.writeFileSync(`${outputDir}/events/${component_name}.md`, content)

  return true
}

const createSlots = (component, component_name, ComponentName, name, Name, fieldName) => {
  if (!component.slots || !Object.keys(component.slots).length) {
    return null
  }

  let content = ''

  const addSlot = (slot, slotName) => {
    if (slot.public === false || slot.private === true) {
      return
    }

    content += `### ${slotName} {#slot-${toKebab(slotName)}}\n\n`

    if (slot.props) {
      content += `* Scope:\n`

      _.each(slot.props, (prop, propName) => {
        content += `  * \`{${prop.types.join('|')}} ${propName}\`${prop.description ? ' - ' : ''}${escapeStr(prop.description)}\n`
      })
    }

    content += `\n<div>\n\n`

    if (slot.description) {
      content += `${slot.description}\n\n`
    }

      content += `@require src/content-partials/reference/examples/slots/${slotName}/${component_name}?name=${escape(name)}&Name=${escape(Name)}&field=${escape(fieldName)}&component=${escape(component_name)}&Component=${escape(ComponentName)}\n\n`

    content += `</div>\n\n`
  }

  _.forEach(component.slots, (slot, slotName) => {
    addSlot(slot, slotName)
  })

  fs.writeFileSync(`${outputDir}/slots/${component_name}.md`, content)

  return true
}

const createProvide = (component, component_name, ComponentName, name, Name, fieldName) => {
  if (!component.provide || !Name.indexOf('Element') === -1) {
    return null
  }

  let content = `#### el$\n\n`

  content += `* Type: \`component\`\n\n`

  content += `@require src/content-partials/reference/examples/provide/el$/${component_name}?name=${escape(name)}&Name=${escape(Name)}&field=${escape(fieldName)}&component=${escape(component_name)}&Component=${escape(ComponentName)}\n\n`

  fs.writeFileSync(`${outputDir}/provide/${name}.md`, content)

  return true
}

const createFile = (component_name, ComponentName, name, Name, fieldName, type, sections) => {
  const path = `${apiDir}/${component_name}.md`

  let content = ''

  _.forEach(sections, (section) => {
    content += `@require src/content-partials/reference/sections/${section}/${component_name}.md?name=${escape(name)}&Name=${escape(Name)}&field=${escape(fieldName)}&component=${escape(component_name)}&Component=${escape(ComponentName)}\n\n`
  })

  if (isForce()) {
    console.log(path, 'file recreated')
    createElementFileFromTemplate(path, name, Name, fieldName, content)
    return
  }

  try {
    file = fs.readFileSync(path)
    console.log(path, 'file already exists, did not create')
  } catch (e) {
    console.log('file created')
    createElementFileFromTemplate(path, name, Name, fieldName, content)
  }
}

const createElementFileFromTemplate = (path, name, Name, field, template) => {
  const params = {
    Name,
    name,
  }

  if (field) {
    params.field = field
  }

  let contents = template.toString()

  _.each(params, (v, k) => {
    const matches = contents.match(new RegExp(`<%${k}%>`, 'g'))?.length || 0

    for (let i = 0; i < matches; i++) {
      contents = contents.replace(new RegExp(`<%${k}%>`), escape(v))
    }
  })

  fs.writeFileSync(path, contents)
}

const isForce = () => {
  return true
  // return JSON.parse(process.env.npm_config_argv).cooked.indexOf('--force') !== -1
}

const escapeStr = (str) => {
  return str.split('').map(c=>c==='\''?'&apos;':c).join('')
}

_.forEach(Object.assign({}, elements, components), (component, ComponentName) => {
  if (!ComponentName.match(/FormStepsControl$/)) {
    // return
  }

  const type = /Element$/.test(ComponentName) ? 'element' : 'component'

  const baseName = type === 'element'
    ? ComponentName.replace('Element', '')
    : ComponentName

  const name = _.kebabCase(baseName)
  const Name = baseName
  const fieldName = type === 'element' ? (fieldNames[ComponentName] || fieldNames.default) : undefined

  const component_name = _.kebabCase(ComponentName)

  const sections = ['header']

  // sections.push('template')

  if (createOptions(component, component_name, ComponentName, name, Name, fieldName)) {
    sections.push('options')
  }

  if (createProperties(component, component_name, ComponentName, name, Name, fieldName)) {
    sections.push('properties')
  }
  
  if (createProvide(component, component_name, ComponentName, name, Name, fieldName)) {
    sections.push('provide')
  }
  
  if (createMethods(component, component_name, ComponentName, name, Name, fieldName)) {
    sections.push('methods')
  }
  
  if (createEvents(component, component_name, ComponentName, name, Name, fieldName)) {
    sections.push('events')
  }
  
  sections.push('views')
  
  if (createSlots(component, component_name, ComponentName, name, Name, fieldName)) {
    sections.push('slots')
  }

  sections.push('issues')

  createFile(component_name, ComponentName, name, Name, fieldName, type, sections)
})