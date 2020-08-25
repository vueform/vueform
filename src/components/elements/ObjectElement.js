import NestedElement from './../../mixins/NestedElement'
import ChildrenValidation from './../../mixins/ChildrenValidation'

export default {
  name: 'ObjectElement',
  mixins: [NestedElement, ChildrenValidation],
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
  data() {
    return {
      /**
       * Child components.
       * 
       * @type {object}
       * @default {}
       */
      children$: {},
    }
  },
  watch: {
    schema: {
      handler() {
        this.$nextTick(() => {
          this.$_setChildren$()
        })
      },
      deep: true,
      immediate: false,
    },
  },
  computed: {

    /**
     * Schema of child elements.
     * 
     * @type {object}
     * @ignore
     */
    children() {
      var children = _.cloneDeep(this.schema.schema)
      
      if (!_.isEmpty(this.default)) {
        _.each(this.default, (value, name) => {
          children[name].default = value
        })
      }

      return children
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
  },
  methods: {
    $_setChildren$() {
      let children$ = {}

      _.each(this.$refs.children$, (element$) => {
        children$[element$.name] = element$
      })

      this.children$ = children$
    }
  },
  mounted() {
    this.$_setChildren$()
  },
}