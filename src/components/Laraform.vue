<template>
  <form
    :class="formClass"
    @submit.prevent="handleSubmit"
    ref="form$"
  >
    <FormErrors
      v-if="formErrors && errors.length"
      :errors="errors"
    />

    <FormLanguageSelector
      v-if="multilingual"
      @changeLanguage="setLanguage"
    />

    <FormWizard
      v-if="hasWizard"
      :steps="wizard"
      :elements$="elements$"
      @submit="handleSubmit"
      ref="wizard$"
    />

    <FormTabs
      v-if="hasTabs"
      :tabs="tabs"
      :elements$="elements$"
      ref="tabs$"
    />

    <FormElements
      :schema="schema"
      :wizard$="wizard$"
      :tabs$="tabs$"
      ref="elements$"
    />

    <FormWizardControls
      v-if="hasWizard"
      :wizard$="wizard$"
    />

    <FormButtons
      v-if="!hasWizard"
      :buttons="buttons"
    />
  </form>
</template>

<script>
  import HasEvents from './../mixins/HasEvents'
  import RefDirective from './../directives/ref'
  import ConditionDirective from './../directives/condition'

  export default {
    mixins: [HasEvents],
    name: 'Laraform',
    provide() {
      return {
        form$: this,
        // @doc: cannot be switched after init
        layout: this.selectedLayout,
        // @doc: cannot be switched after init
        locale: this.selectedLocale,
        // @doc: cannot be switched after init
        theme: this.extendedTheme,
      }
    },
    directives: {
      ref: RefDirective,
      condition: ConditionDirective,
    },
    props: {
      /**
       * Form options object for external customization.
       */
      form: {
        type: Object,
        default: () => ({})
      },

      /**
       * Vuex store state path.
       */
      storePath: {
        type: String,
        default: null,
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
         * Timezone of the form.
         * 
         * @type {string}
         * @default config.timezone
         */
        timezone: null,
        
        /**
         * Forced timezone of the user.
         * 
         * @type {string}
         * @default config.userTimezone
         */
        userTimezone: null,
        
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
        
        /**
         * Default column sizes for elements.
         * 
         * @type {object}
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
        
        /**
         * Theme layout of the form.
         * 
         * @type {string}
         * @default config.layout
         */
        layout: null,
        
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
         * List of events separated by `|` when validation should occur.
         * 
         * @type {string}
         * @default config.validateOn
         */
        validateOn: null,
        
        /**
         * Whether errors should be displayed above form.
         * 
         * @type {boolean}
         * @default config.formErrors
         */
        formErrors: null,

        /**
         * Form key to be sent when submitting data.
         * 
         * @type {string}
         * @default null
         */
        key: null,
        
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
         * The <form> DOM element.
         * 
         * @type {object}
         * @default -
         */
        form$: null,

        // elements: {},
      } 
    },
    beforeMount() {
      var components = Object.assign({}, this.extendedTheme.components, this.components)

      _.each(components, (component, name) => {
        this.$options.components[name] = component
      })

      var elements = Object.assign({}, this.extendedTheme.elements, this.elements)

      _.each(elements, (component, name) => {
        this.$options.components[name] = component
      })
    },
    created() {
      // if the component does not have a key data
      // and it receives as a prop, should set it
      if (this.key === null) {
        this.key = this.form.key || null
      }

      if (this.class === null) {
        this.class = this.form.class || null
      }

      // same for multilingual
      if (this.multilingual === null) {
        this.multilingual = this.form.multilingual !== undefined ? this.form.multilingual : false
      }

      if (this.endpoint === null) {
        this.endpoint = this.form.endpoint || laraform.config.endpoints.process
      }

      if (this.form['buttons'] && this.form.buttons.length > 0) {
        this.buttons = _.merge(this.form.buttons || [], this.buttons)
      }

      if (this.form.with) {
        _.each(this.form.with, (value, key) => [
          this[key] = value
        ])
      }

      // if the component does not have a data value
      // and receives as a form prop, set it from that
      // otherwise get the default value from config
      _.each([
        'theme', 'columns', 'locale', 'languages', 'layout',
        'language', 'timezone', 'userTimezone', 'validateOn',
        'labels', 'formErrors', 'method'
      ], (property) => {
        if (this[property] === null) {
          this[property] = this.form[property] !== undefined
            ? this.form[property]
            : laraform.config[property]
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

      this.$_initEvents()

      // nextTick is required because user
      // will define events in some hook
      // so listeners will only be available
      // after that
      this.$nextTick(() => {
        if (this.listeners.change) {
          this.$watch('data', () => {
            this.fire('change')
          }, { deep: true })
        }
      })
    },
    mounted() {
      this.form$ = this.$refs.form$

      this.elements$ = {}

      // if FormElement is used to render elements
      // then it will have the elements$ ref which
      // will contain the elements, otherwise it's
      // available directly
      var elements$ = _.isArray(this.$refs.elements$)
        ? this.$refs.elements$
        : this.$refs.elements$.$refs.elements$

      _.each(elements$, (element$) => {
        this.elements$[element$.name] = element$
      })

      this.tabs$ = this.$refs.tabs$
      this.wizard$ = this.$refs.wizard$

      if (this.model) {
        if (!_.isEmpty(this.model)) {
          this.load(this.model)
        }
      }

      // load data if available
      if (this.form.data && !_.isEmpty(this.form.data)) {
        this.load(this.form.data)
      }

      this.$emit('mounted')
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

        _.each(this.elements$, (element$) => {
          if (!element$.available) {
            return
          }

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
        // only disable submit because of invalidity
        // if element validations are triggered on
        // change, otherwise it might occur that the
        // form has invalid fields, which values have
        // changed to valid, but still marked as invalid
        return (this.invalid && this.$_shouldValidateOn('change')) ||
             this.busy ||
             this.submitting
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

      /**
       * The locale object of the selected locale.
       * 
       * @ignore
       * @type {object}
       */
      selectedLocale() {
        // calculating locale manually as it is
        // not available at the time of `provide` 
        var locale = !_.isEmpty(this.locale)
          ? this.locale
          : (this.form.locale || laraform.config.locale)

        return laraform.locales[locale]
      },

      /**
       * The selected theme's file with local extensions.
       * 
       * @ignore
       * @type {object}
       */
      extendedTheme() {
        // calculating theme manually as it is
        // not available at the time of `provide` 
        var theme = !_.isEmpty(this.theme)
          ? this.theme
          : (this.form.theme || laraform.config.theme)

        var classes = !_.isEmpty(this.classes)
          ? this.classes
          : (this.form.classes || {})

        var elements = laraform.elements

        // this.config is not available at the time
        // `provide` is initalized, so need to work
        // from global laraformConfig
        return _.merge({}, laraform.config.themes[theme],
          { classes: classes },
          { elements: elements },
        )
      },

      /**
       * The class of selected theme layout.
       * 
       * @ignore
       * @type {object}
       */
      selectedLayout() {
        // calculating locale manually as it is
        // not available at the time of `provide` 
        return !_.isEmpty(this.layout)
          ? this.layout
          : (this.form.layout || laraform.config.layout)
      },

      /**
       * The CSS classes of the form.
       * 
       * @type {array}
       */
      formClass() {
        let formClass = [this.extendedTheme.classes.form]

        if (this.selectedLayout) {
          formClass.push(this.extendedTheme.layouts[this.selectedLayout])
        }

        if (this.class) {
          formClass.push(this.class)
        }

        return formClass

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
      }
    },
    watch: {
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
        _.each(this.elements$, (element$) => {

          // only validate those which
          // have not been validated yet
          // or if the form still has
          // invalid fields
          if ((!element$.validated || this.invalid) && element$.available) {
            element$.validate()
          }
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
       * @private
       * @param {string} path path of the element
       * @returns {void}
       */
      siblings$(path) {
        if (!/\.+/.test(path)) {
          return this.elements$
        }
        
        return this.el$(path.match(/.*(?=\.)/)[0]).children$
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
        var data = this.formData({
          key: this.key,
          data: this.filtered,
        })

        this.submitting = true

        axios[this.getMethod()](this.endpoint, data)
          .then((response) => {
            this.submitting = false

            if (response.data.payload && response.data.payload.updates) {
              this.update(response.data.payload.updates)
            }
            
             this.fire('response', response)

            if (response.data.status) {
              this.fire(response.data.status, response)
            }
          })
          .catch((error) => {
            this.submitting = false

            this.fire('error', error)
            // this.fire('response', error.response)
            // this.fire('fail', error.response)
          })
      },

      /**
       * Transforms form data into [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
       * 
       * @public
       * @param {object} data data to transform
       * @param {object} formData FormData object (leave blank)
       * @param {string} namespace namespace to use (leave blank)
       * @returns {void}
       */
      formData(data, formData, namespace) {
        if (formData === undefined) {
           formData = new FormData()
        }

        if (namespace === undefined) {
          namespace = ''
        }

        if (_.isArray(data)) {
          _.each(data, (value, key) => {
            this.formData(value, formData, namespace + '[' + key + ']');
          })
        } else if (_.isPlainObject(data)) {
          _.each(data, (value, key) => {
            this.formData(value, formData, namespace ? namespace + '[' + key + ']' : key);
          })
        } else {
             formData.append(namespace, data === null ? '' : data);
        }

        return formData;
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
       * Retrieves the form submission method.
       * 
       * @public
       * @returns {string}
       */
      getMethod() {
        return this.method ? this.method.toLowerCase() : 'post'
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
      handleResponse(){},
          
      /**
       * Triggered when receives a success response from the server upon submitting the form.
       *
       * @public
       * @param {object} response response object
       * @event success
       */
      handleSuccess(){},
          
      /**
       * Triggered when receives a fail response from the server upon submitting the form.
       *
       * @public
       * @param {object} response response object
       * @event fail
       */
      handleFail(){},
          
      /**
       * Triggered when receives an error from the server upon submitting the form.
       *
       * @public
       * @param {object} error error object
       * @event error
       */
      handleError(){},
          
      /**
       * Triggered when user selects a language in a multilingual form.
       *
       * @public
       * @event language
       */
      handleLanguage(){},
          
      /**
       * Triggered when the form is resetted.
       *
       * @public
       * @event reset
       */
      handleReset(){},

      /**
       * Translates a tag.
       * 
       * @public
       * @param {string} expr the tag to translate
       * @param {object} data variables for translation tag
       * @returns {string}
       */
      __(expr, data) {
        if (data === undefined) {
          data = {}
        }

        var translation = _.get(this.selectedLocale, expr)

        _.each(data, (value, key) => {
          translation = translation.replace(':' + key, value)
        })

        return translation
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

      /**
       * Inits form events.
       * 
       * @private
       * @param {function} callback the function to invoke
       * @returns {void}
       */
      $_initEvents() {
        _.each(this.events, (func, event) => {
          if (this[event] !== undefined) {
            this.$set(this.events, event, this[event])
          }
        })  
      },
    },
  }

</script>