import utils from './../utils'
import columns from './../utils/columns'
import Localized from './Localized'
import HasConditions from './HasConditions'
import HasEvents from './HasEvents'

export default {
  name: 'BaseElement',
  inject: ['form$', 'theme', 'layout'],
  provide() {
    return {
      theme: this.extendedTheme,
    }
  },
  mixins: [Localized, HasConditions, HasEvents],
  props: {
    /**
     * The *name* of the input field.
     */
    name: {
      type: [Number, String],
      required: true
    },

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
     * The element's parent.
     * 
     * @ignore
     */
    parent: {
      type: Object,
      required: false
    },
  },
  data() {
    return {

      /**
      * The 'id' attribute of the field.
      * 
      * @type {string} 
      * @default null
      */
      id: null,

      /**
      * HTML class of the element. Can use [Vue syntaxes](https://vuejs.org/v2/guide/class-and-style.html#ad).
      * 
      * @type {string} 
      * @default null
      */
      class: null,

      /**
       * Label of the element.
       * 
       * @type {string} 
       * @default ''
       */
      label: '',

      /**
       * Description of the element.
       * 
       * @type {string} 
       * @default null
       */
      description: null,

      /**
       * Info icon appears next to the element's label.
       * 
       * @type {string} 
       * @default null
       * @ignore
       */
      info: null,

      /**
       * Overrides default validation rule [messages](validation#custom-messages).
       * 
       * @type {object} 
       * @default null
       */
      messages: {},
      
      /**
       * [Conditions](conditions) to be applied for the element.
       * 
       * @type {array} 
       * @default []
       */
      conditions: [],

      /**
       * Calulated column sizes and classes for the element.
       * 
       * @type {object} 
       * @default {}
       */
      columns: {},

      /**
       * Whether the element should display it's first error, if any.
       * 
       * @type {boolean} 
       * @default true
       */
      displayError: true,

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
      * Whether the element's value should be submitted.
      * 
      * @type {boolean} 
      * @default true
      */
      submit: true,

      /**
       * Text or HTML to be placed before the field. If `before` slot is provided this will not appear.
       * 
       * @type {string}
       */
      before: null,

      /**
       * Text or HTML to be placed between the field and it's description (if any). If `between` slot is provided this will not appear.
       * 
       * @type {string}
       */
      between: null,

      /**
       * Text or HTML to be placed after the field's error message (if any). If `after` slot is provided this will not appear.
       * 
       * @type {string}
       */
      after: null,

      /**
       * Triggered in the element's `beforeCreate` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      beforeCreate: null,

      /**
       * Triggered in the element's `created` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      created: null,
      
      /**
       * Triggered in the element's `beforeMount` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      beforeMount: null,
      
      /**
       * Triggered in the element's `mounted` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      mounted: null,
      
      /**
       * Triggered in the element's `beforeUpdate` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      beforeUpdate: null,
      
      /**
       * Triggered in the element's `updated` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      updated: null,
      
      /**
       * Triggered in the element's `beforeDestroy` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      beforeDestroy: null,
      
      /**
       * Triggered in the element's `destroyed` lifecycle hook.
       * 
       * @type {function} 
       * @default null
       */
      destroyed: null,

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
      },
    
      // @private

      /**
       * Helper property used to store the elements value.
       * 
       * @private
       * @type {any}
       * @default null
       */
      memory: null,

      /**
       * Helper property used to store available events for the element.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: [
        'change'
      ],
    }
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
      // which is memory
      get() {
        return this.memory
      },
      set(value) {
        this.memory = value
      }
    },

    /**
     * An object containing the element `name` as a key and its `value` as value.
     * 
     * @type {object}
     */
    data() {
      return {
        [this.name]: this.value
      }
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
     * Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`.
     * 
     * @type {boolean} 
     */
    visible() {
      return this.available && !this.hidden && this.active
    },

    /**
     * Whether the element has no value filled in.
     * 
     * @type {boolean}
     */
    empty() {
      return this.value == this.null || this.value === ''
    },

    /**
     * The element's component.
     * 
     * @type {object}
     */
    el$() {
      return this
    },

    // @private

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
     * Helper property used to determine the element's 'null' value.
     * 
     * @type {any}
     * @ignore
     */
    null() {
      return null
    },

    /**
     * Helper property used to pass a data object to children.
     * 
     * @type {object}
     * @ignore
     */
    heritage() {
      // nothing to pass
    },

    /**
     * Helper property used to determine a generic name for the element.
     * 
     * @type {object}
     * @ignore
     */
    attribute() {
      if (this.label) {
        return this.label
      } else if (this.placeholder) {
        return this.placeholder
      } else {
        return this.name
      }
    },

    /**
     * Helper property used to determine the component's name.
     * 
     * @type {string}
     * @ignore
     */
    component() {
      return this.$options.name
    },

    /**
     * Helper property used to determine element's full class list.
     * 
     * @type {array}
     * @ignore
     */
    elementClass() {
      var elementClass = [this.theme.classes.elementPrefix + _.kebabCase(this.component)]

      if (this.class) {
        elementClass.push(this.class)
      }

      return elementClass
    },

    /**
     * Helper property used to provide modified theme for sub-components.
     * 
     * @type {object}
     * @ignore
     */
    extendedTheme() {
      return _.merge({}, this.theme, {
        classes: this.schema.classes || {}
      })
    },

    /**
     * Helper property used to determine internally if a label should be
     * rendered for the element.
     * 
     * @type {object}
     * @ignore
     */
    hasLabel() {
      // By default do not show labels if it's
      // disabled on a form level
      if (this.label === '' && !this.form$.labels) {
        return false
      }

      return this.label !== false
    },
  },
  methods: {
    
    /**
     * Loads data for element or clears the element if the element's key is not found in the `data` object.
     *
     * @public
     * @param {object} data an object containing data for the element using its **name as key**
     * @returns {void}
     */
    load(data) {
      if (this.available && data && data[this.name] !== undefined) {
        this.value = data[this.name]
        return
      }

      this.clear()
      this.resetValidators()
    },

    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @returns {void}
     */
    update(value) {
      this.value = value
    },

    /**
     * Resets the element to it's default state.
     *
     * @public
     * @returns {void}
     */
    reset() {
      this.value = _.clone(this.defaultValue)

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
     * Updates the columns property with new [column sizes](rendering#defining-column-sizes).
     *
     * @public
     * @param {number|object} column size definition
     * @returns {void}
     */
    updateColumns(column) {
      this.columns = columns(this.form$.columns, column, this.theme.grid, {
        hasLabel: this.hasLabel,
      })
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
     * Handles the keyup event of the input field if the field has free text input.
     * 
     * @private 
     * @returns {void}
     */
    handleKeyup() {
      if (this.readonly) {
        return
      }

      if (this.fire('change') === false) {
        return
      }

      if (this.form$.$_shouldValidateOn('change')) {
        this.validate()
      }
    },

    /**
     * Triggered when the user changes the value of the element. Does not trigger if the `value` is programmatically changed. Can prevent further execution (element validation) if returns `false`.
     *
     * @public
     * @prevents 
     * @event change
     */
    handleChange() {
      if (this.fire('change') === false) {
        return
      }

      if (this.form$.$_shouldValidateOn('change')) {
        this.validate()
      }
    },

    /**
     * Inits the element's data properties.
     * 
     * @private 
     * @returns {void}
     */
    $_initData() {
      this.$_copy([
        'conditions', 'messages', 'beforeCreate', 'created',
        'beforeMount', 'mounted', 'beforeUpdate', 'updated',
        'beforeDestroy', 'destroyed', 'before', 'after',
        'between', {'error': 'displayError'}, 'description', 'label',
        'info', 'class',

        {'default': 'defaultValue'}, 'placeholder', 'floating',
        'disabled', 'readonly', 'submit', 'id',
      ]);

      this.$_merge([
        'options', 'slots',
      ])

      if (this.id === null) {
        this.id = this.name
      }

      this.columns = columns(this.form$.columns, this.schema.columns, this.theme.grid, {
        hasLabel: this.hasLabel,
      })
    },

    /**
     * Inits the element.
     * 
     * @private 
     * @returns {void}
     */
    $_initElement() {
      this.value = this.defaultValue !== null
        ? _.clone(this.defaultValue)
        : _.clone(this.null)
    },

    /**
     * Inits the options of the element if any.
     * 
     * @private 
     * @returns {void}
     */
    $_initOptions() {
      if (!this.schema.options) {
        return
      }

      this.options = Object.assign({}, this.options, this.schema.options)
    },

    /**
     * Inits the slots of the element if any.
     * 
     * @private 
     * @returns {void}
     */
    $_initSlots() {
      if (this.schema.slots) {
        this.slots = Object.assign({}, this.slots, this.schema.slots)
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
     * Merges options from schema with a property's value.
     * 
     * @private 
     * @param {object} options options to be merged
     * @returns {void}
     */
    $_merge(options) {
      _.each(options, (option) => {
        if (this.schema[option]) {
          this[option] = Object.assign({}, this[option], this.schema[option])
        }
      })
    },

    /**
     * Copies options from schema to data properties.
     * 
     * @private 
     * @param {object} options options to be copied
     * @returns {void}
     */
    $_copy(options) {
      _.each(options, (option) => {
        if (typeof option == 'object') {
          if (this.schema[_.keys(option)[0]] !== undefined) {
            this[_.values(option)[0]] = this.schema[_.keys(option)[0]]
          }
        }
        else if (this.schema[option] !== undefined) {
          this[option] = this.schema[option]
        }
      })
    },
  },
  beforeCreate() {
    if (this.beforeCreate) {
      this.beforeCreate()
    }
  },
  created() {
    this.$_initData()
    this.$_initElement()
    this.$_initEvents()

    if (this.created) {
      this.created()
    }
  },
  beforeMount() {
    _.each(this.components, (component, name) => {
      this.$options.components[name] = component || this.theme.components[name]
    })

    if (this.beforeMount) {
      this.beforeMount()
    }
  },
  mounted() {
    // nextTick is need  because value
    // changes are possible on default
    // settings and loading
    this.$nextTick(() => {
      this.$watch('value', () => {
        this.dirt()
      }, { deep: true })
    })

    if (this.mounted) {
      this.mounted()
    }
  },
  beforeUpdate() {
    if (this.beforeUpdate) {
      this.beforeUpdate()
    }
  },
  updated() {
    if (this.updated) {
      this.updated()
    }
  },
  beforeDestroy() {
    if (this.beforeDestroy) {
      this.beforeDestroy()
    }
  },
  destroyed() {
    if (this.destroyed) {
      this.destroyed()
    }
  },
}