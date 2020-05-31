import _ from 'lodash'
import Vue from 'vue'
import MergesElementClasses from './../../mixins/MergesElementClasses'
import UsesPlugins from './../../mixins/UsesPlugins'

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
      type: String,
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
       * Helper property used to store the element states.
       * 
       * @private
       * @type {object}
       * @default {}
       */
      memory: null,

      a: 'fdsa'
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

    available() {
      return true
    },

    submit() {
      return this.schema.submit !== undefined
        ? this.schema.submit
        : true
    },

    label() {
      return this.schema.label
    },
    class() {
      return this.schema.class || null
    },
    classes() {
      return this.mergedClasses
    },
    addClasses() {
      return this.schema.addClasses || {}
    },
    components() {
      return Vue.observable(Object.assign({}, this.theme.components, this.schema.components || {}))
    },
    columns() {
      return this.theme.utils.columns(this)
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
        this.assignSlots()
        this.$forceUpdate()
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    assignSlots() {
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
  mounted() {
    this.assignSlots()
  },
  updated() {
    this.assignSlots()
  },
}