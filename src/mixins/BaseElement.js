import _ from 'lodash'
import MergesElementClasses from './MergesElementClasses'
import Localized from './Localized'
import HasEvents from './HasEvents'
import HasHooks from './HasHooks'

export default {
  name: 'BaseElement',
  mixins: [MergesElementClasses, HasEvents, HasHooks, Localized],
  inject: ['theme', 'form$'],
  provide() {
    const _this = this
  
    return {
      get el$ () {
        return _this.el$
      },
    }
  },
  props: {

    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "id": { "type": "string", "description": "The 'id' attribute of the field." },
     *  "label": { "type": "string", "description": "Label of the element." },
     *  "description": { "type": "string", "description": "Description of the element." },
     *  "class": { "type": "str|arr|obj", "description": "HTML class of the element. Can use [Vue syntaxes](https://vuejs.org/v2/guide/class-and-style.html#ad)." },
     *  "classes": { "type": "object", "description": "Override theme [classes](style-and-theme#classes-property) for this element." },
     *  "rules": { "type": "str|arr", "description": "Validation [rules](validation#rule-definition) to be applied for the element." },
     *  "messages": { "type": "object", "description": "Override default validation rule [messages](validation#custom-messages)." },
     *  "conditions": { "type": "array", "description": "[Conditions](conditions) to be applied for the element." },
     *  "columns": { "type": "num|object", "description": "Definition of [column sizes](rendering#defining-column-sizes)." },
     *  "error": { "type": "boolean", "description": "Whether the element should display it's first error, if any." },
     *  "submit": { "type": "boolean", "description": "Whether the element's value should be submitted." },
     *  "component": { "type": "object", "description": "The Vue Component to be used for the element." },
     *  "formatData": { "type": function", "description": "A function that formats data before gets merged with form `data`. Should return an `object` with one key which is the name of the element and which has the actual value. Params:<br>**name**: the name of the element<br>**value**: the original value of the element<br>**el$**: the element component" },
     *  "formatLoad": { "type": function", "description": "A function that formats data before [.load](#method-load) to the element. Should return the same data type as the element's original. Params:<br>**name**: the name of the element<br>**value**: the original value of the element<br>**el$**: the element component" },
     *  "before": { "type": "string", "description": "Text or HTML to be placed before the field. If `before` slot is provided this will not appear." },
     *  "between": { "type": "string", "description": "Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear." },
     *  "after": { "type": "string", "description": "Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear." },
     *  "slots": { "type": "object", "description": "[Slots](rendering#element-slots) for the element." },
     *  "onChanged": { "type": "function", "description": "Triggered when the element's value is changed by the user. It is not triggered if the value is changed programmatically." },
     *  "beforeCreate": { "type": "function", "description": "Triggered in the element's `beforeCreate` lifecycle hook." },
     *  "created": { "type": "function", "description": "Triggered in the element's `created` lifecycle hook." },
     *  "beforeMount": { "type": "function", "description": "Triggered in the element's `beforeMount` lifecycle hook." },
     *  "mounted": { "type": "function", "description": "Triggered in the element's `mounted` lifecycle hook." },
     *  "beforeUpdate": { "type": "function", "description": "Triggered in the element's `beforeUpdate` lifecycle hook." },
     *  "updated": { "type": "function", "description": "Triggered in the element's `updated` lifecycle hook." },
     *  "beforeDestroy": { "type": "function", "description": "Triggered in the element's `beforeDestroy` lifecycle hook." },
     *  "destroyed": { "type": "function", "description": "Triggered in the element's `destroyed` lifecycle hook." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },

    /**
     * The *name* of the input field.
     */
    name: {
      type: [Number, String],
      required: true
    },
    
    /**
     * The element's parent.
     * 
     * @ignore
     */
    parent: {
      type: Object,
      required: false,
      default: () => ({})
    },
  },
  data() {
    return {
      /**
       * Helper property used to store the element value.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      currentValue: null,

      /**
       * Helper property used to store the element previous value.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      previousValue: null,

      /**
       * Whether the element was hidden programmatically with `.show()` / `.hide()` methods.
       * 
       * @type {boolean} 
       * @default false
       */
      hidden: false,

      /**
       * Whether the element is hidden internally by other components, like tabs or wizard steps.
       * 
       * @type {boolean} 
       * @default true
       */
      active: true,

      /**
       * Element slots.
       * 
       * @type {object}
       * @default {
       *  "label": {
       *    "description": "Contains the label of the element.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "before": {
       *    "description": "Vue component to be rendered before the field.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "between": {
       *    "description": "Vue component to be rendered between the field and it's description, if any.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "after": {
       *    "description": "Vue component to be rendered after the field's error message, if any.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "description": {
       *    "description": "Contains the description of the element.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  },
       *  "error": {
       *    "description": "Contains the error of the element.",
       *    "attributes": {
       *      "el$": {"type": "object", "description": "The element component."}
       *    }
       *  }
       * }
       */
      slots: {
        info: null,
        label: null,
        before: null,
        between: null,
        after: null,
        description: null,
        error: null,
        message: null,
      },

      /**
       * Slots that should not be added to $slots object once found in schema.
       * 
       * @private
       * @type {array}
       * @default []
       */
      skipSlots: [],

      /**
       * Helper property used to store available events for the element.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: [
        'change',
      ],
    }
  },
  watch: {
    schema: {
      handler() {
        this.$_assignSlots()
        this.$forceUpdate()
      },
      deep: true,
      immediate: false
    },
  },
  computed: {

    /**
     * The value of the element.
     * 
     * @type {any}
     */
    value: {
      // need to be a setter/getter variable
      // because in some cases it must behave
      // in a custom way, but it needs a store
      // which is currentValue
      get() {
        return this.currentValue
      },
      set(value) {
        this.previousValue = _.clone(this.currentValue)

        this.currentValue = value
      }
    },

    /**
     * Helper property used for tracking the field's value.
     * 
     * @type {any}
     * @ignore
     */
    model: {
      // this is what provided to the input field
      // by default it's basically the same as
      // value, however in some cases (like
      // when translating) can be custom
      get() {
        return this.value
      },
      set(value) {
        this.value = value
      }
    },

    /**
     * An object containing the element `name` as a key and its `value` as value.
     * 
     * @type {object}
     */
    data() {
      return this.formatData(this.name, this.value, this)
    },

    /**
     * An object containing the element `name` as a key and its `value` as value only if the element is available and `submit` is not set to `false`.
     * 
     * @type {object}
     */
    filtered() {
      if (!this.available || !this.submit) {
        return {}
      }

      return this.data
    },

    default: {
      get() {
        return this.schema.default !== undefined
          ? this.schema.default
          : this.null
      },
      set(value) {
        this.$set(this.schema, 'default', value)
      },
    },

    defaultValue() {
      return this.default
    },

    /**
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {any}
     * @ignore
     */
    null() {
      return null
    },

    /**
     * The path of the element using dot `.` syntax.
     * 
     * @type {string} 
     */
    path() {
      return this.parent && this.parent.path
        ? this.parent.path + '.' + this.name
        : this.name
    },

    /**
     * Returns element rules
     * 
     * @type {array|string|object}
     * @ignore
     */
    rules: {
      get() {
        return this.schema.rules
      },
      set(value) {
        this.$set(this.schema, 'rules', value)
      }
      
    },

    /**
     * Helper property used to determine a generic name for the element.
     * 
     * @type {object}
     * @ignore
     */
    genericName() {
      if (this.label) {
        return this.label
      } else if (this.placeholder) {
        return this.placeholder
      } else {
        return _.upperFirst(this.name)
      }
    },

    /**
     * Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`.
     * 
     * @type {boolean} 
     */
    visible() {
      return this.available && !this.hidden && this.active
    },

    /**
     * Whether the element has any unmet conditions.
     * 
     * @type boolean
     */
    available() {
      return true
    },

    components() {
      return Object.assign({}, this.theme.components, this.schema.components || {})
    },

    /**
     * Helper property used to determine internally if a label should be
     * rendered for the element.
     * 
     * @type {object}
     * @ignore
     */
    hasLabel() {
      return this.$laraform.config.labels || this.label
    },

    /**
    * The 'id' attribute of the field.
    * 
    * @type {string} 
    * @default null
    */
    id: {
      get() {
        return this.schema.id || this.name
      },
      set(value) {
        this.$set(this.schema, 'id', value)
      }
    },

    /**
    * Whether the element's value should be submitted.
    * 
    * @type {boolean} 
    * @default true
    */
    submit: {
      get() {
        return this.schema.submit !== undefined
          ? this.schema.submit
          : true
      },
      set(value) {
        this.$set(this.schema, 'submit', value)
      }
    },

    /**
     * Whether the element should display it's first error, if any.
     * 
     * @type {boolean} 
     * @default true
     */
    displayError: {
      get() {
        return this.schema.error !== undefined
          ? this.schema.error
          : true
      },
      set(value) {
        this.$set(this.schema, 'error', value)
      }
    },

    /**
     * Whether the element should be readonly.
     * 
     * @type {boolean} 
     * @default false
     */
    readonly: {
      get() {
        return this.schema.readonly !== undefined ? this.schema.readonly : false
      },
      set(value) {
        this.$set(this.schema, 'readonly', value)
      }
    },

    /**
     * Label of the element.
     * 
     * @type {string} 
     * @default ''
     */
    label: {
      get() {
        return this.schema.label || null
      },
      set(value) {
        this.$set(this.schema, 'label', value)
      }
    },

    /**
     * Description of the element.
     * 
     * @type {string} 
     * @default null
     */
    description: {
      get() {
        return this.schema.description || null
      },
      set(value) {
        this.$set(this.schema, 'description', value)
      }
    },

    /**
     * Info icon appears next to the element's label.
     * 
     * @type {string} 
     * @default null
     * @ignore
     */
    info: {
      get() {
        return this.schema.info || null
      },
      set(value) {
        this.$set(this.schema, 'info', value)
      }
    },

    /**
     * Overrides default validation rule [messages](validation#custom-messages).
     * 
     * @type {object} 
     * @default null
     */
    messages: {
      get() {
        return this.schema.messages || {}
      },
      set(value) {
        this.$set(this.schema, 'messages', value)
      }
    },

    /**
     * [Conditions](conditions) to be applied for the element.
     * 
     * @type {array} 
     * @default []
     */
    conditions: {
      get() {
        return this.schema.conditions || []
      },
      set(value) {
        this.$set(this.schema, 'conditions', value)
      }
    },

    /**
    * HTML class of the element. Can use [Vue syntaxes](https://vuejs.org/v2/guide/class-and-style.html#ad).
    * 
    * @type {string} 
    * @default null
    */
    class: {
      get() {
        return this.schema.class || null
      },
      set(value) {
        this.$set(this.schema, 'class', value)
      }
    },

    classes: {
      get() {
        return this.mergedClasses
      },
      set(value) {
        this.$set(this.schema, 'classes', value)
      }
    },

    addClasses: {
      get() {
        return this.schema.addClasses || {}
      },
      set(value) {
        this.$set(this.schema, 'addClasses', value)
      }
    },
    
    mainClass() {
      return _.keys(this.defaultClasses)[0]
    },

    /**
     * Calulated column sizes and classes for the element.
     * 
     * @type {object} 
     * @default {}
     */
    columns: {
      get() {
        return {
          classes: {
            element: 'col-lg-12',
            label: 'col-lg-12',
            field: 'col-lg-12',
          }
        }
        // return this.theme.utils.columns(this)
      },
      set(value) {
        this.$set(this.schema, 'columns', value)
      }
    },

    /**
     * A function that formats data before gets merged with form `data`.
     * 
     * @type {function}
     */
    formatData: {
      get() {
        return this.schema.formatData !== undefined ? this.schema.formatData : this.defaultFormatData
      },
      set(value) {
        this.$set(this.schema, 'formatData', value)
      }
    },

    /**
     * A function that formats data before [.load](#method-load) to the element.
     * 
     * @type {function}
     */
    formatLoad: {
      get() {
        return this.schema.formatLoad !== undefined ? this.schema.formatLoad : this.defaultFormatLoad
      },
      set(value) {
        this.$set(this.schema, 'formatLoad', value)
      }
    },

    /**
     * Text or HTML to be placed before the field. If `before` slot is provided this will not appear.
     * 
     * @type {string}
     */
    before: {
      get() {
        return this.schema.before || null
      },
      set(value) {
        this.$set(this.schema, 'before', value)
      }
    },

    /**
     * Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear.
     * 
     * @type {string}
     */
    between: {
      get() {
        return this.schema.between || null
      },
      set(value) {
        this.$set(this.schema, 'between', value)
      }
    },

    /**
     * Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear.
     * 
     * @type {string}
     */
    after: {
      get() {
        return this.schema.after || null
      },
      set(value) {
        this.$set(this.schema, 'after', value)
      }
    },

    /**
     * Determines if the element's value is a file.
     *
     * @private
     * @returns {boolean}
     */
    isFileType() {
      return false
    },

    /**
     * Determines if the element's value is an image.
     *
     * @private
     * @returns {boolean}
     */
    isImageType() {
      return false
    },

    /**
     * Determines if the element's value is an array.
     *
     * @private
     * @returns {boolean}
     */
    isArrayType() {
      return false
    },

    /**
     * Determines if the element is multilingual
     *
     * @private
     * @returns {boolean}
     */
    isMultilingual() {
      return false
    },

    el$() {
      return this
    },
  },
  methods: {

    /**
     * Prepares the element for submission.
     *
     * @public
     * @returns {void}
     */
    async prepare() { },

    /**
     * Loads data for element or clears the element if the element's key is not found in the `data` object.  Sets `dirty` to `false`.
     *
     * @public
     * @param {object} data an object containing data for the element using its **name as key**
     * @returns {void}
     */
    load(data) {
      if (this.available && data && data[this.name] !== undefined) {
        this.update(this.formatLoad(data[this.name], this))

        this.$nextTick(() => {
          this.clean()
        })
        return
      }

      this.clear()
      this.resetValidators()
        
      this.$nextTick(() => {
        this.clean()
      })
    },

    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @param {boolean} triggerChange whether the element should trigger `change` event
     * @param {boolean} validate whether the element should be validated (default: `false`)
     * @returns {void}
     */
    update(value, triggerChange, validate) {
      if (triggerChange === undefined) {
        let validate = false
      }

      if (validate === undefined) {
        let validate = false
      }

      this.$set(this, 'value', value)

      if (triggerChange) {
        this.handleChange()
      }

      if (validate) {
        this.validate()
      }
    },

    /**
     * Resets the element to it's default state.
     *
     * @public
     * @returns {void}
     */
    reset() {
      this.value = _.clone(this.default)

      this.resetValidators()
    },

    /**
     * Clears the value of the element.
     *
     * @public
     * @returns {void}
     */
    clear() {
      this.value = _.clone(this.null)
    },

    /**
     * Sets the `hidden` property of the element to `false`.
     *
     * @public
     * @returns {void}
     */
    hide() {
      this.hidden = true
    },

    /**
     * Sets the `hidden` property of the element to `true`.
     *
     * @public
     * @returns {void}
     */
    show() {
      this.hidden = false
    },

    // @private
    
    /**
     * Sets the `active` property of the element to `true`.
     *
     * @private
     * @returns {void}
     */
    activate() {
      this.active = true
    },

    /**
     * Sets the `active` property of the element to `false`.
     *
     * @private
     * @returns {void}
     */
    deactivate() {
      this.active = false
    },

    /**
     * The default logic to be used to `formatData`.
     *
     * @public
     * @param {string} name the name of the element
     * @param {any} value the original value of the element
     * @param {component} el$ the element component
     * @returns {object}
     */
    defaultFormatData(name, value, el$) {
      return {
        [name]: value
      }
    },

    /**
     * The default logic to be used to `formatLoad`.
     *
     * @public
     * @param {data} data loaded data for the element
     * @param {component} el$ the element component
     * @returns {any}
     */
    defaultFormatLoad(data, el$) {
      return data
    },
      
    /**
     * Handles the keyup event of the input field if the field has free text input.
     * 
     * @private 
     * @param {string|number} newValue the value after change
     * @param {string|number} oldValue the value before change
     * @returns {void}
     */
    handleKeyup(newValue, oldValue) {
      if (this.readonly) {
        return
      }

      this.handleChange()
    },

    /**
     * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed. Can prevent further execution (element validation) if returns `false`.
     *
     * @public
     * @prevents 
     * @param {string|number} oldValue the value before change
     * @param {string|number} newValue the value after change
     * @event change
     */
    handleChange(oldValue, newValue) {
      if (this.fire('change', this.currentValue, this.previousValue) === false) {
        return
      }

      if (this.form$.$_shouldValidateOn('change')) {
        this.validate()
      }
    },

    /**
     * Inits the element's events.
     * 
     * @private 
     * @returns {void}
     */
    $_initEvents() {
      _.each(this.events, (event) => {
        var listener = this.schema['on' + _.upperFirst(event)]

        if (listener !== undefined) {
          this.on(event, listener)
        }
      })
    },

    /**
     * Inits the element.
     * 
     * @private 
     * @returns {void}
     */
    $_initElement() {
      this.previousValue = _.clone(this.null)
      this.value = _.clone(this.default)
    },

    $_assignSlots() {
      _.each(this.schema.slots, (slot, name) => {
        if (this.skipSlots.indexOf(name) !== -1) {
          return
        } 

        let instance = new slot({
          propsData: {
            el$: this.el$,
          }
        })

        instance.$mount()

        this.$set(this.$slots, name, [instance._vnode])
      })
    },
    $_initDirting() {
      this.$watch('value', () => {
        this.dirt()
      }, { deep: true })
    },
  },
  beforeCreate() {
    if (this.$options.propsData.schema.beforeCreate) {
      this.$options.propsData.schema.beforeCreate.call(this)
    }
  },
  created() {
    this.$_initElement()
    this.$_initEvents()
  },
  mounted() {
    this.$_assignSlots()
    this.$_initDirting()
  },
  updated() {
    this.$_assignSlots()
  },
}