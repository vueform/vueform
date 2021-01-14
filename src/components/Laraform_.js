import { computed } from 'composition-api'

export default {
  name: 'Laraform',
  provide() {
    return {
      form$: computed(() => {
        return this
      }),

      theme: computed(() => {
        return this.extendedTheme
      }),
    }
  },
  props: {
    form: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      /**
       * The schema of element contained within the form.
       * 
       * @type {object}
       * @default {}
       */
      schema: {},

      /**
       * Form tabs definition.
       * 
       * @type {object}
       * @default {}
       */
      tabs: {},

      /**
       * Form wizard definition.
       * 
       * @type {object}
       * @default {}
       */
      wizard: {},

      /**
       * Whether wizard controls should appear when using wizard.
       * 
       * @type {boolean}
       * @default true
       */
      wizardControls: null,

      /**
       * Theme of the form.
       * 
       * @type {string}
       * @default config.theme
       */
      theme: null,
        
      /**
       * Endpoint to submit the form.
       * 
       * @type {string}
       * @default config.endpoints.process
       */
      endpoint: null,

      /**
       * Method how the form should submit.
       * 
       * @type {string}
       * @default config.method
       */
      method: null,

      /**
       * Form key to be sent when submitting data.
       * 
       * @type {string}
       * @default null
       */
      key: null,

      /**
       * Form's CSS class.
       * 
       * @type {string}
       * @default null
       */
      class: null,

      /**
       * Override of [theme](style-and-theme#classes-property) classes.
       * 
       * @type {object}
       * @default {}
       */
      classes: {},

      addClasses: {},
        
      /**
       * Default column sizes for elements.
       * 
       * @type {object|number}
       * @default config.columns
       */
      columns: null,
        
      /**
       * Whether label DOM should be displayed for elements without label option defined.
       * 
       * @type {boolean}
       * @default config.labels
       */
      labels: null,

      override: {
        components: {},
        elements: {},
      },
      
      /**
       * Whether the form is multilingual.
       * 
       * @type {boolean}
       * @default false
       */
      multilingual: null,
      
      /**
       * Available languages for mulitlingual form.
       * 
       * @type {object}
       * @default config.languages
       */
      languages: null,
      
      /**
       * The default language of a multilingual form.
       * 
       * @type {string}
       * @default config.language
       */
      language: null,
        
      /**
       * Whether errors should be displayed above form.
       * 
       * @type {boolean}
       * @default config.formErrors
       */
      formErrors: null,
        
      /**
       * List of events separated by `|` when validation should occur. Possible values: `change`, `submit`, `step`.
       * 
       * @type {string}
       * @default config.validateOn
       */
      validateOn: null,
    }
  },
  computed: {
    form$() {
      return this
    },
  },
  watch: {
    // 'form.schema': {
    //   handler(schema) {
    //     if (_.isEmpty(schema)) {
    //       return
    //     }

    //     this.schema = schema
    //   },
    //   deep: true,
    //   immediate: false
    // },
    // wizard: {
    //   handler() {
    //     this.$_resortSchema()
    //   },
    //   deep: true,
    //   immediate: false,
    // },
    // tabs: {
    //   handler() {
    //     this.$_resortSchema()
    //   },
    //   deep: true,
    //   immediate: false,
    // },
    // store: {
    //   handler(value) {
    //     if (_.isEqual(value, this.filtered)) {
    //       return
    //     }
        
    //     this.update(this.store)
    //   }, 
    //   deep: true
    // },
    // data: {
      // @todo
    //   handler(value) {
    //     this.$emit('change', this.filtered)
    //     this.handleChange(this.filtered)

    //     if (this.storePath === null) {
    //       return
    //     }
        
    //     if (_.isEqual(value, this.store)) {
    //       return
    //     }
        
    //     this.store = this.filtered
    //   },
    //   deep: true
    // }
  },
  created() {
    if (this.key === null) {
      this.key = this.form.key || null
    }

    if (this.class === null) {
      this.class = this.form.class || null
    }

    if (this.multilingual === null) {
      this.multilingual = this.form.multilingual !== undefined ? this.form.multilingual : false
    }

    if (this.endpoint === null) {
      this.endpoint = this.form.endpoint || this.$laraform.endpoints.process
    }

    if (this.form.wizardControls !== undefined && this.wizardControls === null) {
      this.wizardControls = this.form.wizardControls
    } else if (this.wizardControls === null) {
      this.wizardControls = true
    }

    if (this.method === null) {
      this.method = this.$laraform.methods.process
    }

    // if the component does not have a data value
    // and receives as a form prop, set it from that
    // otherwise get the default value from config
    _.each([
      'theme', 'columns', 'validateOn', 'labels',
      'formErrors', 'languages', 'language',
    ], (property) => {
      if (this[property] === null) {
        this[property] = this.form[property] !== undefined
          ? this.form[property]
          : this.$laraform[property]
      }
    })

    // if the form has a property, merge it
    // with the component's existing data
    _.each(['schema', 'tabs', 'wizard', 'messages'], (property) => {
      if (this.form[property]) {
        this[property] = _.merge({}, 
          _.cloneDeep(this.form[property]), 
          _.cloneDeep(this[property])
        )
      }
    })

    this.configuration = {
      schema: this.schema,
      tabs: this.tabs,
      wizard: this.wizard,
      wizardControls: this.wizardControls,
      theme: this.theme,
      endpoint: this.endpoint,
      method: this.method,
      key: this.key,
      class: this.class,
      classes: this.classes,
      addClasses: this.addClasses,
      columns: this.columns,
      labels: this.labels,
      override: this.override,
      multilingual: this.multilingual,
      languages: this.languages,
      language: this.language,
      formErrors: this.formErrors,
      validateOn: this.validateOn,
    }

    this.resortSchema()
    this.initMessageBag()
  },
  mounted() {
    if (!_.isEmpty(this.form.data)) {
      this.load(this.form.data)
    }
  },
}