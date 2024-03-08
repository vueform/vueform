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
      type: [Array, Object, String, Function],
      default: null,
    },
    removeClass: {
      required: false,
      type: [Array, Object, Function],
      default: null,
    },
    replaceClass: {
      required: false,
      type: [Object, Function],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String, Function],
      default: null
    },
    addClasses: {
      required: false,
      type: [Object, Function],
      default: () => ({})
    },
    replaceClasses: {
      required: false,
      type: [Object, Function],
      default: () => ({})
    },
    removeClasses: {
      required: false,
      type: [Object, Function],
      default: () => ({})
    },
    overrideClasses: {
      required: false,
      type: [Object, Function],
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
      type: [String, Object],
      localized: true,
      default: null
    },
    info: {
      required: false,
      type: [String, Object],
      localized: true,
      default: null
    },
    infoPosition: {
      required: false,
      type: [String],
      default: 'right'
    },
    label: {
      required: false,
      type: [String, Object, Function],
      localized: true,
      default: null
    },
    before: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      localized: true,
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    },
  },
}