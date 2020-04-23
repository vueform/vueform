<script>
  import NestedElement from './../../mixins/NestedElement'
  import ChildrenValidation from './../../mixins/ChildrenValidation'

  export default {
    mixins: [NestedElement, ChildrenValidation],
  	name: 'GroupElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "schema": { "type": "object", "description": "Schema of a child elements." }
       * }
       */
      schema: {
        type: Object,
        required: true
      },
    },
    computed: {
      /**
       * The value of the element.
       * 
       * @type {any}
       */
      value: {
        get() {
          return this.data
        },
        set(value) {
          throw new Error('A nested element\'s value cannot be set directly. Use .update() or .load() method.')
        }
      },

      /**
       * An object containing the element `name` as a key and its `value` as value.
       * 
       * @type {object}
       */
      data() {
        var data = {}

        _.each(this.children$, (element$) => {
          data = Object.assign({}, data, element$.data)
        })

        return data
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
        
        var filtered = {}

        _.each(this.children$, (element$) => {
          filtered = Object.assign({}, filtered, element$.filtered)
        })

        return filtered
      },

      /**
       * Helper property used to determine the element's 'null' value.
       * 
       * @type {object}
       * @ignore
       */
      null() {
        return {}
      },

      /**
       * Helper property used to pass a data object to children.
       * 
       * @type {object}
       * @ignore
       */
      heritage() {
        return {
          available: this.available,
          // path: this.parent && this.parent.path ? this.parent.path : null
          // Experimental -> required for form$.siblings$ when deeply nested
          // elements trying to reach their siblings$
          path: this.parent && this.parent.path
            ? this.parent.path + '.' + this.name
            : this.name
        }
      },

      /**
       * Schema of child elements.
       * 
       * @type {object}
       * @ignore
       */
      children() {
        return this.schema.schema
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
        _.each(this.children$, (element$) => {
          element$.load(data)
        })
      },
    },
    mounted() {
      this.children$ = {}

      _.each(this.$refs.children$, (element$) => {
        this.children$[element$.name] = element$
      })
    },
  }
</script>