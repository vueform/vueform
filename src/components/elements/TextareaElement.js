import BaseElement from './../../mixins/BaseElement'
import BaseValidation from './../../mixins/BaseValidation'
import CanBeDisabled from './../../mixins/CanBeDisabled'
import $model from './../../directives/$model'

export default {
  name: 'TextareaElement',
  directives: {
    $model,
  },
  mixins: [BaseElement, BaseValidation, CanBeDisabled],
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "autogrow": { "type": "boolean", "description": "Whether the textarea should grow automatically as user inserts new lines." },
     *  "rows": { "type": "number", "description": "Initial number of rows of the textarea." },
     *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
     *  "placeholder": { "type": "string", "description": "The placeholder of the element." },
     *  "floating": { "type": "string", "description": "The floating label of the element." },
     *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." },
     *  "readonly": { "type": "boolean", "description": "Whether the field is *readonly*." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  watch: {
    autogrow(newValue, oldValue) {
      if (newValue === false && oldValue === true) {
        this.$laraform.services.autosize.destroy(this.$refs.textarea)
      }

      if (newValue === true && oldValue === false) {
        this.$laraform.services.autosize(this.$refs.textarea)
      } 
    }
  },
  computed: {
    /**
    * Whether the textarea should grow automatically as user inserts new lines.
    * 
    * @type {boolean} 
    * @default true
    */
    autogrow: {
      get() {
        return this.schema.autogrow !== undefined ? this.schema.autogrow : true
      },
      set(value) {
        this.$set(this.schema, 'autogrow', value)
      }
    },

    /**
    * Initial number of rows of the textarea.
    * 
    * @type {number}
    * @default 3
    */
    rows: {
      get() {
        return this.schema.rows !== undefined ? this.schema.rows : 3
      },
      set(value) {
        this.$set(this.schema, 'rows', value)
      }
    },

    /**
    * The placeholder of the element.
    * 
    * @type {string}
    */
    placeholder: {
      get() {
        return this.schema.placeholder || null
      },
      set(value) {
        this.$set(this.schema, 'placeholder', value)
      }
    },

    /**
    * The floating label of the element.
    * 
    * @type {string} 
    * @default null
    */
    floating: {
      get() {
        return this.schema.floating || null
      },
      set(value) {
        this.$set(this.schema, 'floating', value)
      }
    },

    /**
    * Whether the field is *readonly*.
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
  },
  methods: {
    /**
     * Updates the element's value.
     *
     * @public
     * @param {any} value the value to be set for the element
     * @returns {void}
     */
    update(value) {
      this.value = value

      this.autosize()
    },

    /**
     * Resets the element to it's default state.
     *
     * @public
     * @returns {void}
     */
    reset() {
      this.value = this.default

      this.autosize()
    },

    /**
     * Clears the value of the element.
     *
     * @public
     * @returns {void}
     */
    clear() {
      this.value = this.null

      this.autosize()
    },

    /**
     * Forces the recalculation of textarea rows.
     *
     * @public
     * @returns {void}
     */
    autosize() {
      if (!this.autogrow) {
        return
      }
      
      // nextTick is required because autosize requires
      // the dom element for updating height, which must
      // be first rerendered after value change
      this.$nextTick(() => {
        this.$laraform.services.autosize.update(this.$refs.textarea)
      })
    },
  },
  mounted() {
    if (this.autogrow) {
      this.$nextTick(() => {
        this.$laraform.services.autosize(this.$refs.textarea)
      })
    }
  },
}