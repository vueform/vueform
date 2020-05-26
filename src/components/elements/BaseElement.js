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
      model: null,
    }
  },
  computed: {
    available() {
      return true
    },
    value: {
      get() {
        return this.model
      },
      set(value) {
        this.model = value
      }
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
      return Vue.observable(_.merge({}, this.theme.components, this.schema.components || {}))
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