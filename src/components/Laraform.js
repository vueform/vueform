import _ from 'lodash'
import { mergeClass, mergeComponentClasses } from './../utils/mergeClasses'
import formData from './../utils/formData'
import isVueI18nInstalled from './../utils/isVueI18nInstalled'
import translator from './../utils/translator'
import HasEvents from './../mixins/HasEvents'

export default {
  name: 'Laraform',
  mixins: [HasEvents],
  render() {
    return this.extendedTheme.components.Laraform.render.apply(this)
  },
  provide() {
    const _this = this
  
    return {
      get form$ () {
        return _this.form$
      },

      get theme () {
        return _this.extendedTheme
      },

      get locale () {
        return _this.selectedLocale
      }
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
       * Form buttons.
       * 
       * @type {array}
       * @default []
       */
      buttons: [], 

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
       * Locale of the form.
       * 
       * @type {string}
       * @default config.locale
       */
      locale: null,
        
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
       * @type {object}
       * @default config.columns
       */
      columns: {},
        
      /**
       * Whether label DOM should be displayed for elements without label option defined.
       * 
       * @type {boolean}
       * @default config.labels
       */
      labels: null,

      components: {},

      elements: {},
        
      /**
       * Custom error messages.
       * 
       * @type {object}
       * @default {}
       */
      messages: {},
      
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

      
      /**
       * Determine if the form should validate.
       * 
       * @type {boolean}
       * @default true
       */
      validation: true,

      /**
       * Determine if the form is currently submitting.
       * 
       * @type {boolean}
       * @default false
       */
      submitting: false,

      /**
       * Determine if the form's data is currently being updated for external model.
       * 
       * @private
       * @type {boolean}
       * @default false
       */
      updating: false,

      /**
       * Form element components.
       * 
       * @type {object}
       * @default -
       */
      elements$: {},

      /**
       * Form button components.
       * 
       * @type {object}
       * @default -
       */
      buttons$: {},

      /**
       * Form wizard component.
       * 
       * @type {object}
       * @default -
       */
      wizard$: {},

      /**
       * Form tabs component.
       * 
       * @type {object}
       * @default -
       */
      tabs$: {},
        
      /**
       * Helper property used to store available events for the element.
       * 
       * @ignore
       * @type {array}
       * @default []
       */
      events: [
        'change', 'submit', 'response', 'success',
        'fail', 'error', 'language', 'reset',
      ],
    }
  },
  watch: {
    'form.schema': {
      handler(schema) {
        if (_.isEmpty(schema)) {
          return
        }

        this.schema = schema
      },
      deep: true,
      immediate: true
    },
    schema: {
      handler() {
        this.$_setElements$()
      },
      deep: true,
      immediate: false,
    },
    buttons: {
      handler() {
        this.$_setButtons$()
      },
      deep: true,
      immediate: false,
    },
    wizard: {
      handler() {
        this.$_setWizard$()
      },
      deep: true,
      immediate: false,
    },
    tabs: {
      handler() {
        this.$_setTabs$()
      },
      deep: true,
      immediate: false,
    },
    store: {
      handler(value) {
        if (_.isEqual(value, this.filtered)) {
          return
        }
        
        this.update(this.store)
      }, 
      deep: true
    },
    data: {
      handler(value) {
        this.$emit('change', this.filtered)
        this.fire('change', this.filtered)

        if (this.storePath === null) {
          return
        }
        
        if (_.isEqual(value, this.store)) {
          return
        }
        
        this.store = this.filtered
      },
      deep: true
    }
  },
  computed: {

    /**
     * The form's data.
     * 
     * @type {object}
     */
    data() {
      var data = {}

      _.each(this.elements$, (element$) => {
        data = Object.assign({}, data, element$.data)
      })

      return data
    },

    /**
     * The form's data excluding elements with unmet conditions and the ones which should not submit.
     * 
     * @type {object}
     */
    filtered() {
      var filtered = {}

      _.each(this.elements$, (element$) => {
        filtered = Object.assign({}, filtered, element$.filtered)
      })

      return filtered
    },

    formData() {
      return formData({
        key: this.key,
        data: this.filtered,
      })
    },

    /**
     * Whether the form has any dirty element.
     * 
     * @type {boolean}
     */
    dirty() {
      return _.some(this.elements$, { available: true, dirty: true })
    },

    /**
     * Whether the form has any invalid element.
     * 
     * @type {boolean}
     */
    invalid() {
      return _.some(this.elements$, { available: true, invalid: true })
    },

    /**
     * Whether the form has any debouncing element.
     * 
     * @type {boolean}
     */
    debouncing() {
      return _.some(this.elements$, { available: true, debouncing: true })
    },

    /**
     * Whether the form has any pending element.
     * 
     * @type {boolean}
     */
    pending() {
      return _.some(this.elements$, { available: true, pending: true })
    },

    /**
     * Whether each element of the form has been validated.
     * 
     * @type {boolean}
     */
    validated() {
      return !_.some(this.elements$, { available: true, validated: false })
    },

    /**
     * Whether the form has any busy element.
     * 
     * @type {boolean}
     */
    busy() {
      return this.debouncing || this.pending
    },

    /**
     * List of all errors within the form.
     * 
     * @type {array}
     */
    errors() {
      var errors = []

      _.each(_.filter(this.elements$, { available: true }), (element$) => {
        _.each(element$.errors, (error) => {
          errors.push(error)
        })
      })

      return errors
    },

    /**
     * Whether the form is disabled.
     * 
     * @type {boolean}
     */
    disabled() {
      return (this.invalid && this.$_shouldValidateOn('change')) ||
            this.busy ||
            this.submitting
    },

    /**
     * The locale object of the selected locale.
     * 
     * @ignore
     * @type {object}
     */
    selectedLocale() {
      if (this.$_isVueI18nInstalled()) {
        return this.$i18n.locale
      }

      // calculating locale manually as it is
      // not available at the time of `provide` 
      var locale = !_.isEmpty(this.locale)
        ? this.locale
        : (this.form.locale || laraform.config.locale)

      return locale
    },

    /**
     * Whether the form has wizard.
     * 
     * @ignore
     * @type {boolean}
     */
    hasWizard() {
      return !_.isEmpty(this.wizard)
    },

    /**
     * Whether the form has tabs.
     * 
     * @ignore
     * @type {boolean}
     */
    hasTabs() {
      return !_.isEmpty(this.tabs)
    },

    mainClass() {
      return _.keys(this.defaultClasses)[0]
    },

    defaultClasses() {
      return this.extendedTheme.components.Laraform.data().defaultClasses
    },

    extendedClasses() {
      let classes = Object.assign({},
        this.defaultClasses,
        this.extendedTheme.classes.Laraform
      )

      classes = mergeComponentClasses(classes, this.addClasses.Laraform || null)

      if (this.class !== null || this.form.class) {
        classes[this.mainClass] = mergeClass(classes[this.mainClass], this.class || this.form.class)
      }

      return classes
    },

    extendedComponents() {
      return this.extendedTheme.components
    },

    /**
     * The locale object of the selected theme.
     * 
     * @ignore
     * @type {object}
     */
    selectedTheme() {
      let theme = !_.isEmpty(this.theme) ? this.theme : (this.form.theme || this.$laraform.config.theme)

      return this.$laraform.themes[theme]
    },

    /**
     * The selected theme's file with local extensions.
     * 
     * @ignore
     * @type {object}
     */
    extendedTheme() {
      return Object.assign({}, this.selectedTheme, {
        // Add registered elements to theme elements (or overwrite)
        elements: Object.assign({},
          this.selectedTheme.elements,
          this.$laraform.elements,
          this.elements,
        ),

        // Add registered component to theme (or overwrite)
        components: Object.assign({},
          this.selectedTheme.components,
          this.$laraform.components,
          this.components,
        ),
        
        // Ovewrite theme classes with form's classes definition
        classes: _.merge({},
          this.selectedTheme.classes,
          this.classes
        ),
      })
    },

    /**
     * The value of external Vuex store state.
     * 
     * @type {object}
     */
    store: {
      get() {
        if (this.storePath === null || !this.$store) {
          return null
        }
        
        return _.get(this.$store.state, this.storePath)
      },
      set(value) {
        if (!this.$store) {
          return
        }
        
        // If store is not registered with Laraform.store()
        if (!this.$store._mutations['laraform/LARAFORM_UPDATE_STORE']) {
          _.set(this.$store.state, this.storePath, value)
        } 

        // If store is registered properly call a mutation
        else {
          this.$store.commit('laraform/LARAFORM_UPDATE_STORE', {
            path: this.storePath,
            value: value
          })
        }
      }
    },

    form$() {
      return this
    },
  },
  methods: {
    /**
     * Starts the submission process.
     * 
     * @public
     * @returns {void}
     */
    submit() {
      if (this.disabled) {
        return
      }

      if (this.fire('submit') === false) {
        return
      }

      if (this.$_shouldValidateOn('submit')) {
        this.validate()
      }

      this.proceed(() => {
        this.send()
      })
    },

    /**
     * Validates each elements within the form.
     * 
     * @public
     * @returns {void}
     */
    validate() {
      if (!this.invalid && this.validated) {
        return
      }

      _.each(_.filter(this.elements$, { available: true, validated: false }), (element$) => {
        element$.validate()
      })
    },
    
      /**
       * Loads data and clears any element if the element's key is not found in the `data` object.
       * 
       * @public
       * @param {object} data data to load
       * @returns {void}
       */
      load(data) {
        if (!_.isEmpty(this.wizard$)) {
          this.wizard$.enableAllSteps()
        }

        _.each(this.elements$, (element$) => {
          element$.load(data)
        })
      },

      /**
       * Updates the element values which are contained in the data.
       * 
       * @public
       * @param {object} data data to update with
       * @returns {void}
       */
      update(data) {
        _.each(data, (value, key) => {
          this.elements$[key].update(value)
        })
      },

      /**
       * Resets the form to its default state.
       * 
       * @public
       * @returns {void}
       */
      reset() {
        _.each(this.elements$, (element$) => {
          element$.reset()
        })

        if (!_.isEmpty(this.wizard$)) {
          this.wizard$.reset()
        }

        if (!_.isEmpty(this.tabs$)) {
          this.tabs$.reset()
        }

        this.fire('reset')
      },

    /**
     * Fires a callback only if all async processes finished and
     * no invalid elements were found.
     * 
     * @public
     * @param {function} callback the function to call
     * @returns {void}
     */
    proceed(callback) {
      if (this.busy) {
        this.$_waitForAsync(callback)
      }
      else if (this.invalid) {
        return
      }
      else {
        callback()
      }
    },

    /**
     * Transforms form data to [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) object and sends it to the endpoint.
     * 
     * @public
     * @returns {void}
     */
    send() {
      this.submitting = true

      axios[this.method](this.endpoint, this.formData)
        .then((response) => {
          this.submitting = false

          if (response.data.payload && response.data.payload.updates) {
            this.update(response.data.payload.updates)
          }
          
          this.fire('response', response)
        })
        .catch((error) => {
          this.submitting = false

          console.error(error)
        })
    },

    /**
     * Transforms form data into [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
     * 
     * @public
     * @param {object} data data to transform
     * @returns {void}
     */
    createFormData(data) {
      return formData(data)
    },

    /**
     * Disabled validation.
     * 
     * @public
     * @returns {void}
     */
    disableValidation() {
      this.validation = false
    },

    /**
     * Enables validation.
     * 
     * @public
     * @returns {void}
     */
    enableValidation() {
      this.validation = true
    },

    /**
     * Set the language of a multilingual form.
     * 
     * @public
     * @param {string} code code of language to set
     * @returns {void}
     */
    setLanguage(code) {
      this.language = code

      this.fire('language', code)
    },

    updateSchema(schema) {
      this.$set(this, 'schema', schema)
    },

    /**
     * Triggered when form's data is changed.
     *
     * @public
     * @param {object} data data of the form (filtered)
     * @event change
     */
    handleChange(data){},

    /**
     * Triggered when the form is submitted. Can prevent further execution (element validation) if returns `false`.
     *
     * @public
     * @prevents 
     * @event submit
     */
    handleSubmit(){
      this.submit()
    },
        
    /**
     * Triggered when receives a response from the server upon submitting the form.
     *
     * @public
     * @param {object} response response object
     * @event response
     */
    handleResponse(response){},
        
    /**
     * Triggered when receives a success response from the server upon submitting the form.
     *
     * @public
     * @param {object} response response object
     * @event success
     */
    handleSuccess(response){},
        
    /**
     * Triggered when receives a fail response from the server upon submitting the form.
     *
     * @public
     * @param {object} response response object
     * @event fail
     */
    handleFail(response){},
        
    /**
     * Triggered when receives an error from the server upon submitting the form.
     *
     * @public
     * @param {object} error error object
     * @event error
     */
    handleError(errro){},
        
    /**
     * Triggered when user selects a language in a multilingual form.
     *
     * @public
     * @param {string} language the selected language's code
     * @event language
     */
    handleLanguage(language){},
        
    /**
     * Triggered when the form is resetted.
     *
     * @public
     * @event reset
     */
    handleReset(){},

    /**
     * Returns an element by its path.
     * 
     * @public
     * @param {string} path path of the element
     * @param {string} elements elements$ object to look elements for (leave blank)
     * @returns {void}
     */
    el$(path, elements) {
      if (elements === undefined) {
        elements = this.elements$
      }

      if (_.isEmpty(elements) || !path) {
        return null
      }
      
      var matches = path.match(/^[^.]+\./)

      if (matches) {
        var current = matches[0].replace('.', '')

        if (!elements[current]) {
          return null
        }

        return this.el$(
          path.replace(matches[0], ''),
          elements[current].children$
        )
      }
      else if (elements[path] !== undefined) {
        return elements[path]
      }

      return null
    },

    /**
     * Returns the siblings of an element.
     * 
     * @public
     * @param {string} path path of the element
     * @returns {void}
     */
    siblings$(path) {
      if (!/\.+/.test(path)) {
        return this.elements$
      }
      
      return this.el$(path.match(/.*(?=\.)/)[0]).children$
    },

    $_setElements$() {
      let elements$ = {}
      let elementRefs$ = _.isArray(this.$refs.elements$)
        ? this.$refs.elements$
        : this.$refs.elements$.$refs.elements$

      _.each(elementRefs$, (element$) => {
        elements$[element$.name] = element$
      })

      this.$set(this, 'elements$', elements$)
    },

    $_setButtons$() {
      let buttons$ = {}
      let buttonsRefs$ = _.isArray(this.$refs.buttons$)
        ? this.$refs.buttons$
        : this.$refs.buttons$.$refs.buttons$

      _.each(buttonsRefs$, (button$) => {
        buttons$[button$.name] = button$
      })

      this.$set(this, 'buttons$', buttons$)
    },

    $_setWizard$() {
      this.$set(this, 'wizard$', this.$refs.wizard$)
    },

    $_setTabs$() {
      this.$set(this, 'tabs$', this.$refs.tabs$)
    },

    /**
     * Determines if validation should occur on a specific event.
     * 
     * @private
     * @param {string} event event to examine
     * @returns {boolean}
     */
    $_shouldValidateOn(event) {
      return this.validateOn.split('|').indexOf(event) !== -1
    },

    /**
     * Waits for all async processes to finish, then invokes a callback.
     * 
     * @private
     * @param {function} callback the function to invoke
     * @returns {void}
     */
    $_waitForAsync(callback) {
      var unwatch = this.$watch('busy', () => {
        unwatch()
        this.proceed(callback)
      })
    },

    $_registerComponents() {
      let components = Object.assign({},
        this.extendedTheme.components,
        this.components,
        this.extendedTheme.elements,
        this.elements
      )

      _.each(components, (component, name) => {
        if (this.$options.components[name] !== undefined) {
          return
        }

        this.$options.components[name] = component
      })
    },

    $_isVueI18nInstalled: isVueI18nInstalled,

    __: translator,
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
    
    if (this.form.buttons && this.form.buttons.length > 0) {
      this.buttons = _.merge(this.form.buttons || [], this.buttons)
    }

    if (this.endpoint === null) {
      this.endpoint = this.form.endpoint || this.$laraform.config.endpoints.process
    }

    if (this.form.wizardControls !== undefined && this.wizardControls === null) {
      this.wizardControls = this.form.wizardControls
    } else if (this.wizardControls === null) {
      this.wizardControls = true
    }

    // if the component does not have a data value
    // and receives as a form prop, set it from that
    // otherwise get the default value from config
    _.each([
      'theme', 'columns', 'validateOn', 'labels',
      'formErrors', 'method', 'locale', 'languages',
      'language',
    ], (property) => {
      if (this[property] === null) {
        this[property] = this.form[property] !== undefined
          ? this.form[property]
          : this.$laraform.config[property]
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
  },
  beforeMount() {
    this.$_registerComponents()
  },
  mounted() {
    this.$_setElements$()
    this.$_setButtons$()
    this.$_setWizard$()
    this.$_setTabs$()
  }
}