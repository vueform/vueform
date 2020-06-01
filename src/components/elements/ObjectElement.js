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
  computed: {

    /**
     * Schema of child elements.
     * 
     * @type {object}
     * @ignore
     */
    children() {
      var children = _.cloneDeep(this.schema.schema)
      
      if (!_.isEmpty(this.defaultValue)) {
        _.each(this.defaultValue, (value, name) => {
          children[name].default = value
        })
      }

      return children
    },

    /**
     * Child components.
     * 
     * @type {object}
     * @default {}
     */
    children$() {
      let children$ = {}

      _.each(this.$refs.children$, (element$) => {
        children$[element$.name] = element$
      })

      return children$
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
     * The element's error.
     * 
     * @type {string}
     */
    error() {
      return null
    },
  },
}