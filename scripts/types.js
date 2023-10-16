const fs = require('fs')
const _ = require('lodash')
const componentsBase = require('./../api/components/components')
const elementsBase = require('./../api/components/elements')

const components = {
  ...componentsBase,
  ...elementsBase,
}

const transformTypes = (types, key) => {
  let res

  try {
    res = types.map((t) => {
      switch (t) {
        case 'function':
          return 'Function'

        case 'array':
          return 'Array<any>'

        default:
          return t
      }
    }).join(' | ')
  } catch (e) {
    console.log('Error is for: ', key, types)
    throw new Error(e)
  }

  return res
}

const transformReturns = (returns, key) => {
  let res

  try {
    returns = returns.split('|')

    returns = Array.isArray(returns) ? returns : [returns]

    res = returns.map((t) => {
      switch (t) {
        case 'FormData':
          return 'object'

        case 'component':
        case 'Component':
          return 'object'

        default:
          return t
      }
    }).join(' | ')
  } catch (e) {
    console.log('Error is for: ', key, returns)
    throw new Error(e)
  }

  return res
}

// Base
let content = `import { App, defineComponent } from 'vue';

interface MessageBag {
  constructor(baseErrors: any);
  get errors(): any;
  get messages(): any;
  /**
   * The first error
   *
   * @type {string}
   */
  get error(): any;
  /**
   * The first message
   *
   * @type {string}
   */
  get message(): any;
  prepend(msg: any, type: any): void;
  append(msg: any, type: any): void;
  remove(msg: any, type: any): void;
  rm(group: any, type: any, index: any): void;
  clear(type: any): void;
  clearPrepended(type: any): void;
  clearAppended(type: any): void;
}`

// Interface
for (const component in components) {
  let props = components[component].props || {}

  content += `\n\ninterface ${component}Props {\n`

  for (const key in props) {
    let value = props[key]

    content += `  ${key}${value.required?'':'?'}: ${transformTypes(value.types, key)};\n`
  }

  content += `}`
}

// Declaration
for (const component in components) {
  let props = components[component].props || {}
  let data = components[component].data || {}
  let methods = components[component].methods || {}
  let computed = components[component].computed || {}
  let events = components[component].events || {}
  let slots = components[component].slots || {}

  content += `\n\ndeclare class ${component} implements ReturnType<typeof defineComponent> {\n`
  content += `  $props: ${component}Props;\n`

  if (Object.keys(props).length) {
    content += '\n  // Props\n'
    for (const key in props) {
      content += `  ${key}: ${component}Props['${key}'];\n`
    }
  }


  if (Object.keys(computed).length) {
    content += '\n  // Computed\n'
    for (const key in computed) {
      let value = computed[key]

      content += `  ${key}: ${transformTypes(value.types, key)};\n`
    }
  }


  if (Object.keys(data).length) {
    content += '\n  // Data\n'
    for (const key in data) {
      let value = data[key]

      content += `  ${key}: ${transformTypes(value.types, key)};\n`
    }
  }

  if (Object.keys(methods).length) {
    content += '\n  // Methods\n'
    for (const key in methods) {
      let value = methods[key]

      let params = Object.keys(value.params || {}).map((paramKey) => {
        let param = value.params[paramKey]

        return `${paramKey}${param.required?'':'?'}: ${transformTypes(param.types, paramKey)}`
      }).join(', ')

      content += `  ${key}: (${params}) => ${transformReturns(value.returns, key)};\n`
    }
  }

  if (Object.keys(events).length) {
    content += '\n  //Events\n'
    for (const key in events) {
      content += `  $emit(eventName: '${key}', value: any): void;\n`
    }
  }

  if (Object.keys(slots).length) {
    content += '\n  //Slots\n  $slots: {\n'
    for (const key in slots) {
      content += `    '${key}': VNode[];\n`
    }
    content += '  };\n'
  }

  content += `}`
}

// Global
content += `\n\ndeclare module 'vue' {
  interface GlobalComponents {\n`

  for (const component in components) {
    content += `    ${component}: typeof ${component};\n`
  }

  content += `  }
}`

// Write
fs.writeFileSync('./types/index.d.ts', content)