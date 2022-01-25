export default {
  props: {
    inline: {
      required: false,
      type: [Boolean],
      default: false,
    },
    layout: {
      required: false,
      type: [String, Object, Boolean],
      default: 'ElementLayout',
      private: true,
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null,
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null,
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    replaceClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    removeClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    presets: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
    views: {
      required: false,
      type: [Object],
      default: () => ({}),
    },
    size: {
      required: false,
      type: [String],
      default: undefined,
    },
    columns: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    templates: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    description: {
      required: false,
      type: [String],
      default: null
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
  },
}