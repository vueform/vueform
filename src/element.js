import { onMounted } from 'composition-api'
import useForm$ from './composables/useForm$'
import useTheme from './composables/useTheme'
import useLayout from './composables/elements/useLayout'
import usePath from './composables/elements/usePath'
import useConditions from './composables/useConditions'
import useValue from './composables/elements/useValue'
import useData from './composables/elements/useData'
import useDefault from './composables/elements/useDefault'
import useNullValue from './composables/elements/useNullValue'
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
import useWatchValue from './composables/elements/useWatchValue'
import useFloating from './composables/elements/useFloating'
import useClasses from './composables/elements/useClasses'
import useFieldId from './composables/elements/useFieldId'
import useInput from './composables/elements/useInput'
import useValidation from './composables/elements/useValidation'

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
  const form$ = useForm$(props, context)
  const theme = useTheme(props, context)
  const layout = useLayout(props, context)
  const input = useInput(props, context)
  const path = usePath(props, context)
  const disabled = useDisabled(props, context)
  const nullValue = useNullValue(props, context)

  const fieldId = useFieldId(props, context, {
    path: path.path,
  })

  const floating = useFloating(props, context, {
    form$: form$.form$,
  })
console.log(context.emits)
  const events = useEvents(props, context, {}, {
    events: context.emits,
  })

  const baseElement = useBaseElement(props, context, {
    form$: form$.form$,
    fire: events.fire,
  })

  const default_ = useDefault(props, context, {
    nullValue: nullValue.nullValue,
    form$: form$.form$,
    parent: path.parent,
  })

  const conditions = useConditions(props, context, {
    form$: form$.form$,
    path: path.path,
  })

  const validation = useValidation(props, context, {
    form$: form$.form$,
    path: path.path,
  })

  const value = useValue(props, context, {
    defaultValue: default_.defaultValue,
    dataPath: path.dataPath,
    form$: form$.form$,
    parent: path.parent,
  })

  const data = useData(props, context, {
    form$: form$.form$,
    available: conditions.available,
    value: value.value,
    resetValidators: validation.resetValidators,
    defaultValue: default_.defaultValue,
    nullValue: nullValue.nullValue,
  })

  const empty = useEmpty(props, context, {
    value: value.value,
    nullValue: nullValue.nullValue,
  })

  const label = useLabel(props, context, {
    form$: form$.form$,
    el$: baseElement.el$,
  })

  const genericName = useGenericName(props, context, {
    label: label.label,
    form$: form$.form$,
  })
  
  const templates = useTemplates(props, context, {
    theme: theme.theme,
    form$: form$.form$
  })

  const classes = useClasses(props, context, {
    form$: form$.form$,
    theme: theme.theme,
    isDisabled: disabled.isDisabled,
    templates: templates.templates,
    el$: baseElement.el$,
  })

  const columns = useColumns(props, context, {
    form$: form$.form$,
    theme: theme.theme,
    hasLabel: label.hasLabel,
  })

  const view = useView(props, context, {
    available: conditions.available,
    active: baseElement.active,
    form$: form$.form$,
    parent: path.parent,
  })

  const slots = useSlots(props, context, {
    form$: form$.form$,
    el$: baseElement.el$,
    templates: templates.templates,
  }, {
    slots: [
      'label', 'info', 'description', 'before',
      'between', 'after',
    ]
  })

  const handleInput = useHandleInput(props, context, {
    model: value.model,
  })

  useWatchValue(props, context, {
    form$: form$.form$,
    value: value.value,
    fire: events.fire,
    dirt: validation.dirt,
    validate: validation.validate,
  })

  onMounted(() => {
    validation.initMessageBag()
    validation.initValidation()
  })

  return {
    ...form$,
    ...fieldId,
    ...theme,
    ...layout,
    ...input,
    ...path,
    ...disabled,
    ...nullValue,
    ...baseElement,
    ...default_,
    ...value,
    ...conditions,
    ...validation,
    ...label,
    ...classes,
    ...columns,
    ...genericName,
    ...view,
    ...templates,
    ...slots,
    ...events,
    ...data,
    ...empty,
    ...handleInput,
    ...floating,
  }
}

export default function (options, component = {}) {
  if (!options.name) {
    throw Error('The `name` attribute must be defined to create a new element')
  }

  let name = options.name
  let ComponentName = `${_.upperFirst(_.camelCase(name))}Element`

  return Object.assign({}, {
    name: ComponentName,
    mixins: [].concat(ElementMixin(options)).concat(component.mixins||[]),
    emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'].concat(component.emits||[]),
    setup(props, context) {
      context.element = useElement(props, context, options)
      return component.setup ? component.setup(props, context) : context.element
    },
    props: Object.assign({}, {
      type: {
        required: false,
        type: [String],
        default: name,
      },
      default: {
        required: false,
        type: [String, Number],
        default: null
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
    }, options.props||{})
  }, _.omit(component, ['setup', 'mixins', 'emits', 'props']))
}