import upperFirst from 'lodash-es/upperFirst'
import camelCase from 'lodash-es/camelCase'
import omit from 'lodash-es/omit'
import { ref } from 'vue'
import useElementBase from './composables/useElement'
import useForm$ from './composables/useForm$'
import useTheme from './composables/useTheme'
import useLayout from './composables/elements/useLayout'
import usePath from './composables/elements/usePath'
import useConditions from './composables/useConditions'
import useValue from './composables/elements/useValue'
import useData from './composables/elements/useData'
import useDefault from './composables/elements/useDefault'
import useLabel from './composables/elements/useLabel'
import useColumns from './composables/elements/useColumns'
import useBaseElement from './composables/elements/useBaseElement'
import useGenericName from './composables/elements/useGenericName'
import useView from './composables/elements/useView'
import useTemplates from './composables/elements/useTemplates'
import useSlots from './composables/elements/useSlots'
import useDisabled from './composables/elements/useDisabled'
import useEvents from './composables/useEvents'
import useHandleInput from './composables/elements/useHandleInput'
import useEmpty from './composables/elements/useEmpty'
import useFloating from './composables/elements/useFloating'
import useClasses from './composables/elements/useClasses'
import useFieldId from './composables/elements/useFieldId'
import useInput from './composables/elements/useInput'
import useValidation from './composables/elements/useValidation'
import useFocused from './composables/elements/useFocused'
import useWatchValue from './composables/elements/useWatchValue'

import BaseElement from './mixins/BaseElement'
import HasView from './mixins/HasView'
import HasChange from './mixins/HasChange'
import HasData from './mixins/HasData'
import HasValidation from './mixins/HasValidation'

const ElementMixin = function() {
  return [
    BaseElement, HasView, HasChange, HasData, HasValidation
  ]
}

const useElement = function(props, context, options) {
  const nullValue = ref(options.nullValue !== undefined ? options.nullValue : null)

  context.features = [
    useForm$,
    useTheme,
    useLayout,
    useInput,
    usePath,
    useDisabled,
    useFieldId,
    useFloating,
    useEvents,
    useBaseElement,
    useDefault,
    useConditions,
    useValidation,
    useValue,
    useData,
    useEmpty,
    useLabel,
    useGenericName,
    useColumns,
    useView,
    useTemplates,
    useClasses,
    useSlots,
    useHandleInput,
    useFocused,
    useWatchValue,
  ]
  context.slots = [
    'label', 'info', 'description', 'before',
    'between', 'after',
  ]
  
  const element = useElementBase(props, context, {
    deps: {
      nullValue,
    }
  })

  return { 
    ...element,
  }
}

export default function (options, component = {}) {
  if (!options.name) {
    throw Error('The `name` attribute must be defined to create a new element')
  }

  let name = options.name
  let ComponentName = `${upperFirst(camelCase(name))}`

  let emits = ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'].concat(component.emits||[])

  return {
    name: ComponentName,
    mixins: [].concat(ElementMixin(options)).concat(component.mixins||[]),
    components: component.components || {},
    emits,
    setup(props, ctx) {
      const context = { ...ctx }
      context.emits = emits
      context.name = ref(ComponentName)
      const element = useElement(props, context, options)
      context.element = element
      const setup = component.setup ? component.setup(props, context) : {}
      
      return {
        ...element,
        ...setup,
      }
    },
    props: {
      type: {
        required: false,
        type: [String],
        default: name,
      },
      default: {
        required: false,
        type: [String, Number, Object],
        default: undefined
      },
      disabled: {
        required: false,
        type: [Boolean],
        default: false
      },
      floating: {
        required: false,
        type: [String],
        default: null
      },
      id: {
        required: false,
        type: [String],
        default: null
      },
      placeholder: {
        required: false,
        type: [String],
        default: null
      },
      ...(options.props||{}),
    },
    ...(omit(component, ['setup', 'mixins', 'emits', 'props']))
  }
}