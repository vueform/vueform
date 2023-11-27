const fs = require('fs')
const _ = require('lodash')
const componentsBase = require('./../api/generated/components')
const elementsBase = require('./../api/generated/elements')
const outputPath = './types/index.d.ts'

const components = {
  ...componentsBase,
  ...elementsBase,
}

let typeTypes = []

const transformTypes = (types, key) => {
  let res

  try {
    res = types.map((t) => {
      switch (t) {
        case 'function':
          return 'Function'

        case 'array':
          return 'Array<any>'

        case 'date':
          return 'Date'

        default:
          if (typeTypes.indexOf(t) === -1) {
            typeTypes.push(t)
          }
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
let content = `import { App, defineComponent, DefineComponent, VNode } from 'vue';

interface EndpointConfig {
  url?: string;
  method?: string;
}

interface VueformConfig {
  apiKey?: string;
  env?: string;
  plugins?: any[];
  elements?: any[];
  components?: object;
  theme: object;
  templates?: object;
  views?: object;
  size?: string;
  addClasses?: object;
  removeClasses?: object;
  replaceClasses?: object;
  overrideClasses?: object;
  presets?: object;
  usePresets?: any[];
  classHelpers?: boolean;
  columns?: object;
  forceLabels?: boolean;
  floatPlaceholders?: boolean;
  displayErrors?: boolean;
  displayMessages?: boolean;
  breakpoints?: string[];
  languages?: object;
  language?: string;
  locales: object;
  locale: null | string;
  fallbackLocale?: string;
  orderFrom?: number;
  rules?: object;
  validateOn?: 'change' | 'step' | 'change|step';
  endpoints?: {
    submit?: EndpointConfig;
    uploadTempFile?: EndpointConfig;
    removeTempFile?: EndpointConfig;
    removeFile?: EndpointConfig;
    attachment?: EndpointConfig;
    activeUrl?: EndpointConfig;
    unique?: EndpointConfig;
    exists?: EndpointConfig;
    [key: string]: EndpointConfig;
  };
  formData?: (form$: any) => any;
  beforeSend?: any;
  axios?: any;
  locationProvider?: string;
  services?: object;
  [key: string]: any;
}

interface DefineElement {
  name: string;
  setup?: Function;
  props?: object;
  emits?: any[];
  mixins?: any[];
  components?: object;
  [key: string]: any;
}

declare module '@vueform/vueform/themes/tailwind' {
  export function prefix(prefix: string): any
}

declare module '@vueform/vueform/core' {}

declare module '@vueform/vueform' {
    const config: any;
    const components: any;
    const useVueform: any;
    const useClasses: any;
    const Vueform: any;
    const Validator: any;
    const vueform: any;
    const element: any;
    const VueformElement: any;
    const defineElement: any;
    function defineConfig(options: VueformConfig): VueformConfig;

  export {
    config,
    components,
    useVueform,
    useClasses,
    Vueform,
    Validator,
    vueform,
    element,
    VueformElement,
    defineElement,
    defineConfig,
  }

  export default function install(app?: any, options: VueformConfig): any;
}

interface MessageBag {
  constructor(baseErrors: any);
  get errors(): any;
  get messages(): any;
  get error(): any;
  get message(): any;
  prepend(msg: any, type: any): void;
  append(msg: any, type: any): void;
  remove(msg: any, type: any): void;
  rm(group: any, type: any, index: any): void;
  clear(type: any): void;
  clearPrepended(type: any): void;
  clearAppended(type: any): void;
}

interface MergeClasses {
  constructor(options?: {});
  options: {};
  componentClasses: any;
  get classes(): any;
  get config(): any;
  get component(): any;
  get component$(): any;
  get locals(): any;
  get view(): any;
  get theme(): any;
  get presets(): any;
  get templates(): any;
  get template(): any;
  get themeClasses(): any;
  get templateClasses(): any;
  get shouldMergeTemplateClasses(): any;
  get defaultClasses(): any;
  get mainClass(): string;
  merge(merge: any, locals?: boolean): void;
  mergeComponentClasses(componentClasses: any, key: any): void;
  addClasses(add: any, levels: any): void;
  prependClasses(prepend: any, levels: any): void;
  removeClasses(remove: any, levels: any): void;
  replaceClasses(replace: any, levels: any): void;
  overrideClasses(override: any, levels: any): void;
  toArray(componentClasses: any): {};
  classesToArray(classes: any, path: any): any;
  getDynamicClasses(target: any, prop: any, mainTarget: any): any;
  getClassHelpers(componentClasses: any, path: any): {};
  pick(from: any, picks: any): {};
}

interface Columns {
  constructor(options: any, hasLabel: any, getClass: any, presets: any);
  defaultBreakpoint: string;
  presets: any;
  configPresetColumns: {};
  configColumns: {};
  formPresetColumns: {};
  formColumns: {};
  presetColumns: {};
  columns: {};
  hasLabel: any;
  getClass: any;
  cols: any;
  get classes(): {
    container: any[];
    label: any[];
    innerContainer: any[];
    wrapper: any[];
  };
  serialize(columns: any): {};
  columnsFromPresets(presets: any): undefined;
  getNullClass(): any[];
  getClasses(type: any): any[];
  getCols(): any;
}

interface Component extends DefineComponent {}

interface VueformComponent extends DefineComponent {}

interface VueformElement extends DefineComponent {`

// Merged element props
let elementMerge = {
  props: {},
  data: {},
  methods: {},
  computed: {},
  events: {},
  slots: {},
  injects: {},
}

const anytypes = [
  'update.value',
  'load.value',
  'handleChange.val',
]

for (const element in elementsBase) {
  let el = elementsBase[element]

  let elTypes = {
    props: el.props || {},
    data: el.data || {},
    methods: el.methods || {},
    computed: el.computed || {},
    events: el.events || {},
    slots: el.slots || {},
    injects: el.inject || {},
  }

  for (const typeKey in elTypes) {
    for(const propKey in elTypes[typeKey]) {
      if (!elementMerge[typeKey][propKey]) {
        elementMerge[typeKey][propKey] = elTypes[typeKey][propKey]

        // Set any types
        if (anytypes.indexOf(propKey) !== -1 && elementMerge[typeKey][propKey].types) {
          elementMerge[typeKey][propKey].types = ['any']
        }
        
        // Set any prop types
        for(const paramKey in elementMerge[typeKey][propKey].params || {}) {
          if (anytypes.indexOf(`${propKey}.${paramKey}`) !== -1) {
            elementMerge[typeKey][propKey].params[paramKey].types = ['any']
          }
        }
      } else {
        // Merge types
        if (elementMerge[typeKey][propKey].types && elTypes[typeKey][propKey].types) {
          elTypes[typeKey][propKey].types.forEach((t) => {
            if (elementMerge[typeKey][propKey].types.indexOf(t) === -1) {
              elementMerge[typeKey][propKey].types.push(t)
            }
          })
        }
      }
    }
  }
}

let props = elementMerge.props || {}
let data = elementMerge.data || {}
let methods = elementMerge.methods || {}
let computed = elementMerge.computed || {}
let injects = elementMerge.inject || {}

// Props
if (Object.keys(props).length) {
  content += '\n  // Props\n'
  for (const key in props) {
    let value = props[key]

    if (key === 'schema') {
      content += `  ${key}: {\n`
      content += `    [key: string]: VueformSchema;\n`
      content += `  };\n`
    } else {
      content += `  ${key}: ${transformTypes(value.types, key)};\n`
    }
  }
}

// Computed
if (Object.keys(computed).length) {
  content += '\n  // Computed\n'
  for (const key in computed) {
    let value = computed[key]

    content += `  ${key}: ${transformTypes(value.types, key)};\n`
  }
}

// Data
if (Object.keys(data).length) {
  content += '\n  // Data\n'
  for (const key in data) {
    let value = data[key]

    content += `  ${key}: ${transformTypes(value.types, key)};\n`
  }
}

// Injects
if (Object.keys(injects).length) {
  content += '\n  // Injects\n'
  for (const key in injects) {
    let value = injects[key]

    content += `  ${key}: ${transformTypes(value.types, key)};\n`
  }
}

// Methods
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

content += `}`

// VueformSchema
content += `\n\ninterface VueformSchema {\n`

if (Object.keys(props).length) {
  for (const key in props) {
    let value = props[key]

    if (key !== 'name') {
      if (key === 'schema') {
        content += `  ${key}${value.required?'':'?'}: {\n`
        content += `    [key: string]: VueformSchema;\n`
        content += `  };\n`
      } else {
        content += `  ${key}${key!=='type'?'?':''}: ${transformTypes(value.types, key)};\n`
      }
    }
  }
}

content += `  [key: string]: any;\n`
content += `}`

// Interface
for (const component in components) {
  let props = components[component].props || {}

  content += `\n\ninterface ${component}Props {\n`

  for (const key in props) {
    let value = props[key]

    if (key === 'schema') {
      content += `  ${key}${value.required?'':'?'}: {\n`
      content += `    [key: string]: VueformSchema;\n`
      content += `  };\n`
    } else {
      content += `  ${key}${value.required?'':'?'}: ${transformTypes(value.types, key)};\n`
    }
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
  let injects = components[component].inject || {}

  content += `\n\ndeclare class ${component} implements ReturnType<typeof defineComponent> {\n`
  content += `  $props: ${component}Props;\n`

  // Props
  if (Object.keys(props).length) {
    content += '\n  // Props\n'
    for (const key in props) {
      content += `  ${key}: ${component}Props['${key}'];\n`
    }
  }

  // Computed
  if (Object.keys(computed).length) {
    content += '\n  // Computed\n'
    for (const key in computed) {
      let value = computed[key]

      content += `  ${key}: ${transformTypes(value.types, key)};\n`
    }
  }

  // Data
  if (Object.keys(data).length) {
    content += '\n  // Data\n'
    for (const key in data) {
      let value = data[key]

      content += `  ${key}: ${transformTypes(value.types, key)};\n`
    }
  }

  // Injects
  if (Object.keys(injects).length) {
    content += '\n  // Injects\n'
    for (const key in injects) {
      let value = injects[key]

      content += `  ${key}: ${transformTypes(value.types, key)};\n`
    }
  }

  // Methods
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

  // Events
  if (Object.keys(events).length) {
    content += '\n  //Events\n'
    for (const key in events) {
      content += `  $emit(eventName: '${key}', value: any): void;\n`
    }
  }

  // Slots
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
fs.writeFileSync(outputPath, content)

// typeTypes.map(t => console.log(t))