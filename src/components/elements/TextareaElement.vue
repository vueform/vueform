<script>
  import BaseElement from './../../mixins/BaseElement'
  import BaseValidation from './../../mixins/BaseValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'
  import autosize from 'autosize'

  export default {
    name: 'TextareaElement',
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
    data () {
      return {
        
        /**
        * Whether the textarea should grow automatically as user inserts new lines.
        * 
        * @type {boolean} 
        * @default true
        */
        autogrow: true,

        /**
        * Initial number of rows of the textarea.
        * 
        * @type {number}
        * @default 3
        */
        rows: 3,

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {string} 
        * @default null
        */
        defaultValue: null,

        /**
        * The placeholder of the element.
        * 
        * @type {string} 
        * @default null
        */
        placeholder: null,

        /**
        * The floating label of the element.
        * 
        * @type {string} 
        * @default null
        */
        floating: null,

        /**
        * Whether the form element is *readonly*.
        * 
        * @type {boolean} 
        * @default false
        */
        readonly: false,
      }
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
        this.value = this.available && data && data[this.name] !== undefined
            ? data[this.name]
            : this.null

        this.autosize()
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

        this.autosize()
      },

      /**
       * Resets the element to it's default state.
       *
       * @public
       * @returns {void}
       */
      reset() {
        this.value = this.defaultValue

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
          autosize.update(this.$refs.textarea)
        })
      },
    },
    created() {
      this.$_copy([
        'autogrow', 'rows',
      ])
    },
    mounted() {
      if (this.autogrow) {
        autosize(this.$refs.textarea)
      }
    },
  }
</script>