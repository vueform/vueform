import { onMounted } from 'composition-api'
import useForm$ from './../../composables/useForm$'
import useTheme from './../../composables/useTheme'
import useLayout from './../../composables/elements/useLayout'
import useConditions from './../../composables/useConditions'
import useLabel from './../../composables/elements/useLabel'
import useColumns from './../../composables/elements/useColumns'
import useGenericName from './../../composables/elements/useGenericName'
import useView from './../../composables/elements/useView'
import useComponents from './../../composables/elements/useComponents'
import useSlots from './../../composables/elements/useSlots'
import useElements from './../../composables/useElements'
import useDisabled from './../../composables/elements/useDisabled'
import useEvents from './../../composables/useEvents'
import useSort from './../../composables/elements/useSort'
import useOrder from './../../composables/elements/useOrder'
import usePrototype from './../../composables/elements/usePrototype'
import useWatchPrototype from './../../composables/elements/useWatchPrototype'
import usePath from './../../composables/elements/usePath'
import useValue from './../../composables/elements/useValue'
import useWatchValue from './../../composables/elements/useWatchValue'
import useChildren from './../../composables/elements/useChildren'

import { list as useDefault } from './../../composables/elements/useDefault'
import { list as useData } from './../../composables/elements/useData'
import { list as useClasses } from './../../composables/elements/useClasses'
import { list as useValidation } from './../../composables/elements/useValidation'
import { array as useNullValue } from './../../composables/elements/useNullValue'
import { list as useBaseElement } from './../../composables/elements/useBaseElement'

import SortableDirective from './../../directives/sortable'

export default {
  name: 'ListElement',
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
    inline: {
      required: false,
      type: [Boolean],
      default: false,
    },
    layout: {
      required: false,
      type: [String, Object, Boolean],
      default: 'ElementLayout'
    },
    type: {
      required: false,
      type: [String],
      default: 'list'
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
    initial: {
      required: false,
      type: [Number],
      default: 1
    },
    default: {
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
    info: {
      required: false,
      type: [String],
      default: null
    },
    label: {
      required: false,
      type: [String, Object, Function],
      default: null
    },
    /**
     * This goes for initial ordering, when data is loaded, nothing else.
     * 
     * @private
     */
    order: {
      required: false,
      type: [String],
      default: null
    },
    /**
     * Same here.
     * 
     * @private
     */
    orderBy: {
      required: false,
      type: [String],
      default: null
    },
    /**
     * If provided it will automatically be filled with order, and refreshed upon add / removal. If order is 'DESC', this will be desc too.
     * 
     * @private
     */
    storeOrder: {
      required: false,
      type: [String],
      default: null
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
      type: [Object],
      default: null
    },
    element: {
      required: false,
      type: [Object],
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
    const layout = useLayout(props, context)
    const path = usePath(props, context)
    const disabled = useDisabled(props, context)
    const nullValue = useNullValue(props, context)
    const prototype = usePrototype(props, context)
    const children = useChildren(props, context)
    const order = useOrder(props, context)

    const baseElement = useBaseElement(props, context, {
      form$: form$.form$,
    })

    const events = useEvents(props, context, {
      form$: form$.form$,
    }, {
      events: [
        'change', 'add', 'remove', 'sort'
      ]
    })

    const default_ = useDefault(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
    })

    const label = useLabel(props, context, {
      form$: form$.form$,
    })

    const genericName = useGenericName(props, context, {
      label: label.label,
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
      children$: children.children$,
      form$: form$.form$,
      path: path.path,
    })

    const value = useValue(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
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

    const data = useData(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      children$: children.children$,
      isDisabled: disabled.isDisabled,
      orderByName: order.orderByName,
      refreshOrderStore: order.refreshOrderStore,
    })

    const sort = useSort(props, context, {
      children$: children.children$,
      children$Array: children.children$Array,
      value: value.value,
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
      ...theme,
      ...layout,
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
    }
  } 
}