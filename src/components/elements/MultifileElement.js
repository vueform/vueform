import { onMounted } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'
import useDisabled from './../../composables/elements/useDisabled'
import useDefault from './../../composables/elements/useDefault'
import useEvents from './../../composables/useEvents'
import useSort from './../../composables/elements/useSort'
import useOrder from './../../composables/elements/useOrder'
import useWatchPrototype from './../../composables/elements/useWatchPrototype'
import usePath from './../../composables/elements/usePath'
import useInput from './../../composables/elements/useInput'
import useMultifile from './../../composables/elements/useMultifile'

import { multifile as usePrototype } from './../../composables/elements/usePrototype'
import { multifile as useDrop } from './../../composables/elements/useDrop'
import { multifile as useData } from './../../composables/elements/useData'
import { list as useValue } from './../../composables/elements/useValue'
import { list as useClasses } from './../../composables/elements/useClasses'
import { list as useChildren } from './../../composables/elements/useChildren'
import { list as useValidation } from './../../composables/elements/useValidation'
import { list as useBaseElement } from './../../composables/elements/useBaseElement'
import { array as useNullValueArray } from './../../composables/elements/useNullValue'

import SortableDirective from './../../directives/sortable'

export default {
  name: 'MultifileElement',
  directives: {
    sortable: SortableDirective
  },
  emits: ['change', 'add', 'remove', 'sort'],
  slots: ['label', 'info', 'description', 'error', 'message', 'before', 'between', 'after'],
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    image: {
      type: [Boolean],
      required: false,
      default: false
    },
    layout: {
      required: false,
      type: [String, Object],
      default: 'ElementLayout'
    },
    type: {
      required: false,
      type: [String],
      default: 'multifile'
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    columns: {
      required: false,
      type: [Object, String],
      default: null
    },
    overrideComponents: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    default: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    drop: {
      required: false,
      type: [Boolean],
      default: false
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String],
      default: null
    },
    accept: {
      required: false,
      type: [String, Array],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: 'ASC'
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    file: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    storeFile: {
      required: false,
      type: [String],
      default: null
    },
    fields: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    before: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    displayError: {
      required: false,
      type: [Boolean],
      default: true
    },
    object: {
      required: false,
      type: [Boolean],
      default: null
    },
    onChange: {
      required: false,
      type: [Function],
      default: null,
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
    },
  },
  setup(props, context) {
    const form$ = useForm$(props, context)
    const theme = useTheme(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
    const nullValue = useNullValueArray(props, context)
    const children = useChildren(props, context)
    const input = useInput(props, context)
    const prototype = usePrototype(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change', 'add', 'remove', 'sort'
      ]
    })

    const value = useValue(props, context, {
      children$Array: children.children$Array,
      nullValue: nullValue.nullValue,
      defaultValue: default_.defaultValue,
    })

    const elements = useElements(props, context, {
      theme: theme.theme,
    })

    const conditions = useConditions(props, context, {
      form$: form$.form$,
      path: path.path,
    })

    const validation = useValidation(props, context, {
      form$: form$.form$,
      value: value.value,
      children$: children.children$,
      form$: form$.form$,
      path: path.path,
    })

    const columns = useColumns(props, context, {
      form$: form$.form$,
    })

    const view = useView(props, context, {
      available: conditions.available,
    })

    const components = useComponents(props, context, {
      theme: theme.theme,
      form$: form$.form$
    })

    const slots = useSlots(props, context, {
      form$: form$.form$,
      components: components.components,
    }, {
      slots: [
        'label', 'info', 'description', 'error',
        'message', 'before', 'between', 'after'
      ]
    })

    const order = useOrder(props, context, {
      isObject: prototype.isObject,
      children$: children.children$,
    })

    const data = useData(props, context, {
      form$: form$.form$,
      children$: children.children$,
      instances: children.instances,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      available: conditions.available,
      isDisabled: disabled.isDisabled,

      value: value.value,
      currentValue: value.currentValue,
      previousValue: value.previousValue,

      dirt: validation.dirt,
      validate: validation.validate,
      validateValidators: validation.validateValidators,
      resetValidators: validation.resetValidators,

      nullValue: nullValue.nullValue,
      refreshOrderStore: order.refreshOrderStore,

      isObject: prototype.isObject,
      prototype: prototype.prototype,
      orderByName: order.orderByName,

      fire: events.fire,
    }, {
      initial: 0
    })

    const multifile = useMultifile(props, context, {
      isDisabled: disabled.isDisabled,
      input: input.input,
      add: data.add,
      isObject: prototype.isObject,
      storeFileName: prototype.storeFileName,
    })

    const drop = useDrop(props, context, {
      add: data.add,
      isDisabled: disabled.isDisabled,
      isObject: prototype.isObject,
      storeFileName: prototype.storeFileName,
      accept: multifile.accept,
    })

    const sort = useSort(props, context, {
      children$: children.children$,
      children$Array: children.children$Array,
      currentValue: value.currentValue,
      fire: events.fire,
      isDisabled: disabled.isDisabled,
      updated: data.updated,
      refreshOrderStore: order.refreshOrderStore,
      instances: children.instances,
    })

    const classes = useClasses(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
    })

    const watchPrototype = useWatchPrototype(props, context, {
      prototype: prototype.prototype,
      value: value.value,
      clear: data.clear,
      insert: children.insert,
      instances: children.instances,
    })

    onMounted(() => {
      validation.initMessageBag()
      validation.initValidation()
    })

    return {
      ...form$,
      ...theme,
      ...path,
      ...disabled,
      ...nullValue,
      ...label,
      ...baseElement,
      ...genericName,
      ...children,
      ...value,
      ...elements,
      ...conditions,
      ...validation,
      ...classes,
      ...columns,
      ...view,
      ...components,
      ...slots,
      ...data,
      ...events,
      ...sort,
      ...watchPrototype,
      ...default_,
      ...order,
      ...prototype,
      ...multifile,
      ...input,
      ...drop,
    }
  } 
}