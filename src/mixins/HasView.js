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
      type: [Array],
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
    columns: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    replaceTemplates: {
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