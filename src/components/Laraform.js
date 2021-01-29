import { computed } from 'composition-api'
import useLaraform from './../composables/useLaraform'

export default {
  name: 'Laraform',
  setup: useLaraform,
  render() {
    return this.extendedTheme.components.Laraform.render.apply(this, arguments)
  },
  props: {
    value: {
      type: Object,
      required: false,
    },
    modelValue: {
      type: Object,
      required: false,
    },
    config: {
      type: Object,
      required: false,
      default: () => ({})
    },
  },
  data() {
    let data = {}
    let defaults = {
      schema: {},
      tabs: {},
      wizard: {},
      wizardControls: null,
      class: null,
      classes: {},
      addClasses: {},
      components: {},
      elements: {},
      messages: {},
      theme: null,
      endpoint: null,
      method: null,
      key: null,
      columns: null,
      labels: null,
      multilingual: null,
      languages: null,
      language: null,
      displayErrors: null,
      validateOn: null,
      formatLoad: null,
      prepare: null,
    }

    Object.keys(defaults).forEach((key) => {
      if ((this._ !== undefined && !this._.setupState.hasOwnProperty(key)) || (this._ == undefined && this[key] === undefined)) {
        data[key] = typeof defaults[key] === 'object' && defaults[key] !== null ? Object.assign({}, defaults[key]) : defaults[key]
      }
    })

    return Object.assign({}, data)
  },
  created() {
    if (this.key === null) {
      this.key = this.config.key || null
    }

    if (this.class === null) {
      this.class = this.config.class || null
    }

    if (Object.keys(this.classes).length == 0) {
      this.classes = this.config.classes || {}
    }

    if (Object.keys(this.addClasses).length == 0) {
      this.addClasses = this.config.addClasses || {}
    }

    if (Object.keys(this.components).length == 0) {
      this.components = this.config.components || {}
    }

    if (Object.keys(this.elements).length == 0) {
      this.elements = this.config.elements || {}
    }

    if (this.multilingual === null) {
      this.multilingual = this.config.multilingual !== undefined ? this.config.multilingual : false
    }

    if (this.endpoint === null) {
      this.endpoint = this.config.endpoint || this.$laraform.endpoints.process
    }

    if (this.formatLoad === null) {
      this.formatLoad = this.config.formatLoad || null
    }

    if (this.method === null) {
      this.method = this.config.method || this.$laraform.methods.process
    }

    if (this.config.wizardControls !== undefined && this.wizardControls === null) {
      this.wizardControls = this.config.wizardControls
    } else if (this.wizardControls === null) {
      this.wizardControls = true
    }

    // if the component does not have a data value
    // and receives as a form prop, set it from that
    // otherwise get the default value from config
    _.each([
      'theme', 'columns', 'validateOn', 'labels',
      'displayErrors', 'languages', 'language',
    ], (property) => {
      if (this[property] === null) {
        this[property] = this.config[property] !== undefined
          ? this.config[property]
          : this.$laraform[property]
      }
    })

    // if the form has a property, merge it
    // with the component's existing data
    _.each([
      'elements', 'components', 'classes', 'addClasses',
      'schema', 'tabs', 'wizard', 'messages', 
    ], (property) => {
      if (this.config[property]) {
        this[property] = _.merge({}, 
          _.cloneDeep(this.config[property]), 
          _.cloneDeep(this[property])
        )
      }
    })

    this.resortSchema()
    this.initMessageBag()
  },
  mounted() {
    if (!_.isEmpty(this.config.data)) {
      this.load(this.config.data, true)
    }
  },
}