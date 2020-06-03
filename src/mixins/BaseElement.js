import _ from 'lodash'
import Vue from 'vue'
import MergesElementClasses from './MergesElementClasses'
import UsesPlugins from './UsesPlugins'

export default {
  name: 'BaseElement',
  mixins: [UsesPlugins, MergesElementClasses],
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
    schema: {
      type: Object,
      required: true
    },
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
       * Helper property used to store the element states.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      memory: null,

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
     * Whether the element is visible. It's `false` if `available` or `active` is `false` or `hidden` is `true`.
     * 
     * @type {boolean} 
     */
    visible() {
      return this.available && !this.hidden && this.active
    },

    available() {
      return true
    },

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

    label: {
      get() {
        return this.schema.label
      },
      set(value) {
        this.$set(this.schema, 'label', value)
      }
    },
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
    components() {
      return Vue.observable(Object.assign({}, this.theme.components, this.schema.components || {}))
    },
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
    hasLabel() {
      return this.$laraform.config.labels || this.label
    },
    el$() {
      return this
    },
  },
  watch: {
    schema: {
      handler() {
        this.$_assignSlots()
        this.$forceUpdate()
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    fire() {

    },
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

    $_initElement() {
      this.value = _.clone(this.default)
    },

    $_assignSlots() {
      _.each(this.schema.slots, (slot, name) => {
        let instance = new slot({
          propsData: {
            el$: this.el$
          }
        })

        instance.$mount()

        this.$set(this.$slots, name, [instance._vnode])
      })
    }
  },
  created() {
    this.$_initElement()
  },
  mounted() {
    this.$_assignSlots()
  },
  updated() {
    this.$_assignSlots()
  },
}