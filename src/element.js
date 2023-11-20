import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import omit from 'lodash/omit'
import { ref } from 'vue'

import { GenericElement } from './components'

export default function (options, component = {}) {
  if (!options.name) {
    throw Error('The `name` attribute must be defined to create a new element')
  }

  options = {
    ...options,
    ...component,
  }

  let name = options.name
  let ComponentName = `${upperFirst(camelCase(name))}`

  let emits = [].concat(GenericElement.emits).concat(options.emits||[])

  return {
    name: ComponentName,
    components: options.components || {},
    mixins: [].concat(GenericElement.mixins).concat(options.mixins||[]),
    emits,
    props: {
      ...GenericElement.props,
      ...(options.props||{}),
      type: {
        required: false,
        type: [String],
        default: name,
        private: true,
      },
    },
    setup(props, ctx) {
      const context = {
        ...ctx,
        emits,
        name: ref(ComponentName)
      }

      const element = GenericElement.setup(props, context)
      context.element = element

      const setup = options.setup ? options.setup(props, context) : {}

      return {
        ...element,
        ...setup,
      }
    },
    ...(omit(options, ['setup', 'mixins', 'emits', 'props']))
  }
}