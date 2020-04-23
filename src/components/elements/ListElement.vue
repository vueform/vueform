<script>
  import NestedElement from './../../mixins/NestedElement'
  import MultiValidation from './../../mixins/MultiValidation'
  import CanBeDisabled from './../../mixins/CanBeDisabled'

  export default {
    mixins: [NestedElement, MultiValidation, CanBeDisabled],
    name: 'ListElement',
    props: {
      /**
       * The element schema containing it's options.
       * 
       * @default {
       *  "element": { "type": "object", "description": "Schema of a child element if a single element should be used as list item. Either `element` or `object` should be used." },
       *  "object": { "type": "object", "description": "Schema of an object type element if an object type element should be used as list item. Either `element` or `object` should be used." },
       *  "initial": { "type": "number", "description": "Initial number of child instances." },
       *  "sort": { "type": "boolean", "description": "Whether the list items can be sorted by drag n drop." },
       *  "storeOrder": { "type": "string", "description": "The name of the element which should contain the order of the list item in case of an object list." },
       *  "order": { "type": "string", "description": "The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`." },
       *  "orderBy": { "type": "string", "description": "When using an object list the list items will be ordered by this element's values." },
       *  "default": { "type": "string", "description": "Value of element when the form is initially loaded or reseted." },
       *  "disabled": { "type": "boolean", "description": "Whether the field is *disabled*." }
       * }
       */
      schema: {
        type: Object,
        required: true
      },
    },
    data() {
      return {

        /**
        * Initial number of child instances.
        * 
        * @type {number}
        * @default 1
        */
        initial: 1,

        /**
        * Whether the list items can be sorted by drag n drop.
        * 
        * @type {boolean}
        * @default false
        */
        sort: false,

        /**
        * The name of the element which should contain the order of the list item in case of an object list.
        * 
        * @type {string}
        * @default null
        */
        storeOrder: null,

        /**
        * The default order direction of list items when data is loaded. Possible values: `null`, `'ASC'`, `'DESC'`.
        * 
        * @type {string}
        * @default null
        */
        order: null,

        /**
        * When using an object list the list items will be ordered by this element's values. If `storeOrder` is defined, `orderBy` will be equal to that unless specified otherwise.
        * 
        * @type {string}
        * @default null
        */
        orderBy: null,

        /**
        * Value of element when the form is initially loaded or reseted.
        * 
        * @type {array} 
        * @default null
        */
        defaultValue: null,

        /**
        * Child instances.
        * 
        * @type {array} 
        * @default []
        */
        instances: [],

        /**
        * Child components.
        * 
        * @type {object} 
        * @default {}
        */
        children$: [],

        /**
        * Helper property for v-sortable directive.
        * 
        * @type {object}
        * @default {...}
        * @ignore
        */
        sortable: {
          sort: null,
          onUpdate: this.handleSort,
        },

        /**
         * Helper property used to store available events for the element.
         * 
         * @private
         * @type {array}
         * @default []
         */
        events: [
          'change', 'add', 'remove', 'sort'
        ],
      }
    },
    computed: {

      /**
       * An object containing the element `name` as a key and its `value` as value.
       * 
       * @type {object}
       */
      data() {
        var data = []

        _.each(this.children$, (element$) => {
          data.push(element$.data[element$.name])
        })

        return {
          [this.name]: data
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

        var filtered = []

        _.each(this.children$, (element$) => {
          filtered.push(element$.filtered[element$.name])
        })

        return {
          [this.name]: filtered
        }
      },

      /**
       * The schema of a child.
       * 
       * @type {object}
       */
      prototype() {
        return this.isObject()
          ? Object.assign({}, this.schema.object, {type: 'object'})
          : this.schema.element
      },

      /**
       * Helper property used to determine the element's 'null' value.
       * 
       * @type {array}
       * @ignore
       */
      null() {
        return []
      },

      /**
       * Returns the list of elements which should be required by the component.
       * 
       * @returns {array}
       * @ignore
       */
      elements_() {
        return this.isObject()
          ? ['object']
          : [this.schema.element.type.replace('-', '')]
      },

      /**
       * Returns the list of components which should be required by the component.
       * 
       * @returns {array}
       * @ignore
       */
      components_() {
        if (this.isObject()) {
          return []
        }

        if (this.schema.element.component && typeof this.schema.element.component == 'string') {
          return [this.schema.element.component]
        }

        return []
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
        this.clear()

        var length = this.available
          ? _.keys(data[this.name]).length
          : this.initial

        for (var i = 0; i < length; i++) {
          this.insert()
        }
        
        // nextTick is required because children$ reflects
        // $refs, which only refreshed after DOM rerender
        // therefore when inserting new elements children$
        // will only contain them once they are rendered
        this.$nextTick(() => {
          _.each(this.children$, (element$) => {
            // order loaded data by it's
            // order field if should be ordered
            var value = data[this.name]

            if (this.isObject() && this.orderBy) {
              value = _.sortBy(value, this.orderBy)

              if (this.order == 'DESC') {
                value = value.reverse()
              }
            }
            else if (this.order) {
              value = value.sort()
              
              if (this.order == 'DESC') {
                value = value.reverse()
              }
            }

            element$.load(value)
          })
        })
      },

      /**
       * Resets the element to it's default state.
       *
       * @public
       * @returns {void}
       */
      reset() {
        if (this.disabled) {
          return
        }
        
        this.clear()

        // nextTick is required because the children
        // elements has to first rerender, otherwise
        // their values would be kept because even
        // we add new instances their keys are the
        // same and Vue wouldn't make difference
        this.$nextTick(() => {
          this.$_setInitialInstances()
        })

        this.resetValidators()
      },

      /**
       * Clears the value of the element.
       *
       * @public
       * @returns {void}
       */
      clear() {
        this.instances = _.clone(this.null)
      },

      /**
       * Adds a child to the `instances`. Returns the index of the added children.
       *
       * @public
       * @param {any} data data to be set for added child.
       * @returns {number}
       */
      add(data) {
        if (data === undefined) {
          data == null
        }

        if (this.disabled) {
          return
        }

        var index = this.insert(data)

        this.fire('add', index)

        this.handleChange()

        return index
      },

      /**
       * Removes a child by it's index.
       *
       * @public
       * @param {index} index index of child to be removed.
       * @returns {void}
       */
      remove(index) {
        if (this.disabled) {
          return
        }

        this.fire('remove', index)

        this.instances.splice(index, 1)

        // refreshes children's order store value
        this.$_refreshOrderStore()

        this.handleChange()
      },

      /**
       * Inserts a new child to `instances` with data. Returns the index of the inserted children.
       *
       * @private
       * @param {any} data data for child to be inserted.
       * @returns {number}
       */
      insert(data) {
        if (data === undefined) {
          data == null
        }

        var key = this.$_next()

        var schema = Object.assign({}, _.cloneDeep(this.prototype), {
          key: key,
        })

        // passing over default values to children
        if (data !== null) {
          schema = Object.assign({}, schema, {
            default: data,
          })
        }

        // adding order data if it should be stored
        if (this.isObject() && this.storeOrder) {
          schema.schema[this.storeOrder].default = this.instances.length + 1
        }

        this.instances.push(schema)

        if (!this.initial) {
          // nextTick is required because once a new
          // children is added, first the DOM needs 
          // to be rendered to be contained in $refs
          this.$nextTick(() => {
            // if the initial was 0 the children$ variable
            // must be initalized on adding the first child
            // otherwise it would be `undefined`
            this.$_initChildren()
          })
        }

        var index = this.instances.length - 1

        return index
      },

      /**
       * Determines if the list items are objects.
       *
       * @private
       * @returns {boolean}
       */
      isObject() {
        return this.schema.object !== undefined
      },

      /**
       * Determines if the element's value is an array.
       *
       * @private
       * @returns {boolean}
       */
      isArrayType() {
        return true
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
          // nextTick is required because the `value`
          // comes from children$ which only refreshes
          // once DOM is reloaded
          this.$nextTick(() => {
            this.validateValidators()
          })
        }
      },

      /**
       * Triggered when the user adds a new list item or `.add()` method is invoked.
       *
       * @public
       * @param {array} indexes index(es) of added list items.
       * @event add
       */
      handleAdd() { /* Used only for docs */ },

      /**
       * Triggered when the user removes a list item or `.remove()` method is invoked.
       *
       * @public
       * @param {number} index index of child to be removed.
       * @event remove
       */
      handleRemove() { /* Used only for docs */ },

      /**
       * Triggered when the user changes the order of the list items.
       *
       * @public
       * @param {object} indexes an object containing `newIndex` and `oldIndex`.
       * @event sort
       */
      handleSort(indexes) {
        var oldIndex = indexes.oldIndex
        var newIndex = indexes.newIndex

        if (this.disabled) {
          return
        }
        
        this.instances.splice(newIndex, 0, this.instances.splice(oldIndex, 1)[0])
        this.children$.splice(newIndex, 0, this.children$.splice(oldIndex, 1)[0])

        // refreshes children's order store value
        this.$_refreshOrderStore()

        this.fire('sort', {newIndex, oldIndex})
      },

      /**
       * Helper method used to refresh the element's value which stores the order.
       *
       * @private
       * @returns {void}
       */
      $_refreshOrderStore() {
        if (this.isObject() && this.storeOrder) {
          // nextTick is required because children$
          // only refreshes on DOM rerender because
          // it's based on ref
          this.$nextTick(() => {
            _.each(this.children$, (element$, index) => {
              element$.update({
                [this.storeOrder]: index + 1
              })
            })
          })
        }
      },

      /**
       * Helper method used to retrieve the next key for a new instance.
       *
       * @private
       * @returns {number}
       */
      $_next() {
        return this.instances.length
          ? _.max(_.map(_.keys(_.keyBy(this.instances, 'key')), Number)) + 1
          : 0
      },

      /**
       * Inits the element.
       * 
       * @private 
       * @returns {void}
       */
      $_initElement() {
        this.$_copy([
          'initial', 'sort', 'storeOrder', 'order',
          'orderBy', 
        ])

        this.sortable.sort = this.disabled ? false : this.sort
        this.sortable.filter = '.not-sortable'

        if (this.storeOrder && !this.orderBy) {
          this.orderBy = this.storeOrder
        }

        if (this.defaultValue && this.defaultValue.length > this.initial) {
          this.initial = this.defaultValue.length
        }

        this.$_setInitialInstances()
      },
      
      /**
       * Sets initial instances when the element is initalized.
       * 
       * @private 
       * @returns {void}
       */
      $_setInitialInstances() {
        if (this.initial > 0) {
          for (var i = 0; i < this.initial; i++) {
            this.insert(this.defaultValue && this.defaultValue[i] ? this.defaultValue[i] : null)
          }
        }
      },
      
      /**
       * Sets `children$` property from rendered child components.
       * 
       * @private 
       * @returns {void}
       */
      $_initChildren() {
        if (this.$refs.children$ !== undefined && _.isEmpty(this.children$)) {
          this.children$ = this.$refs.children$
        }
      },
    },
    mounted() {
      this.$_initChildren()
    },
  }
</script>