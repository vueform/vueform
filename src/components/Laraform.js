import { computed } from 'composition-api'
import useLaraform from './../composables/useLaraform'

export default {
  name: 'Laraform',
  emits: ['input', 'update:modelValue'],
  setup: useLaraform,
  render() {
    return this.extendedTheme.components.Laraform.render.apply(this, arguments)
  },
  props: {
    value: {
      type: Object,
      required: false,
      default: undefined
    },
    modelValue: {
      type: Object,
      required: false,
      default: undefined
    },
    initial: {
      type: Object,
      required: false,
      default: null
    },
    schema: {
      type: Object,
      required: false,
      default: null
    },
    tabs: {
      type: Object,
      required: false,
      default: null
    },
    steps: {
      type: Object,
      required: false,
      default: null
    },
    overrideClasses: {
      type: Object,
      required: false,
      default: null
    },
    addClasses: {
      type: Object,
      required: false,
      default: null
    },
    components: {
      type: Object,
      required: false,
      default: null
    },
    elements: {
      type: Object,
      required: false,
      default: null
    },
    messages: {
      type: Object,
      required: false,
      default: null
    },
    columns: {
      type: Object,
      required: false,
      default: null
    },
    languages: {
      type: Object,
      required: false,
      default: null
    },
    addClass: {
      type: [String, Array, Object],
      required: false,
      default: null
    },
    formKey: {
      type: [String, Number],
      required: false,
      default: null
    },
    theme: {
      type: String,
      required: false,
      default: null
    },
    endpoint: {
      type: String,
      required: false,
      default: null
    },
    method: {
      type: String,
      required: false,
      default: null
    },
    language: {
      type: String,
      required: false,
      default: null
    },
    validateOn: {
      type: String,
      required: false,
      default: null
    },
    labels: {
      type: Boolean,
      required: false,
      default: null
    },
    multilingual: {
      type: Boolean,
      required: false,
      default: null
    },
    stepsControls: {
      type: Boolean,
      required: false,
      default: null
    },
    displayErrors: {
      type: Boolean,
      required: false,
      default: null
    },
    formatLoad: {
      type: Function,
      required: false,
      default: null
    },
    prepare: {
      type: Function,
      required: false,
      default: null
    },
    fill: {
      type: Object,
      required: false,
      default: null
    },
  },
}