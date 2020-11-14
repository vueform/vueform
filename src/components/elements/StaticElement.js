import BaseElement from './../../mixins/BaseElement'
import useStatic from './../../composables/elements/useStatic'

export default {
  name: 'StaticElement',
  mixins: [BaseElement],
  init: useStatic,
  props: {
    /**
     * The element schema containing it's options.
     * 
     * @default {
     *  "content": { "type": "obj|str", "description": "Content to be rendered. Either a string (HTML) or a Vue component. Vue component receives an `el$` prop, which refers to the element. " },
     *  "wrap": { "type": "boolean", "description": "Determines if the content should be rendered in a standard element layout." }
     * }
     */
    schema: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      messageBag: {},
    }
  },
  computed: {
    /**
     * Content to be rendered. Either a string, HTML or a Vue component. 
     * 
     * @type {obj|str} 
     */
    content() {
      return this.schema.content || null
    },

    /**
     * Determines if the content should be rendered in a standard element layout.
     * 
     * @type {boolean} 
     */
    wrap() {
      return this.schema.wrap !== undefined ? this.schema.wrap : true
    },

    /**
     * Determines if HTML content should be rendered for the element.
     * 
     * @type {boolean}
     */
    isHtml() {
      return typeof this.content == 'string'
    },
    /**
     * @ignore
     */
    value: {
      get() { },
      set() { },
    },
    /**
     * @ignore
     */
    model: {
      get() { },
      set() { },
    },
    /**
     * @ignore
     */
    data() {
      return {}
    },
    /**
     * @ignore
     */
    filtered() {
      return {}
    },
    /**
     * @ignore
     */
    dirty() {
      return false
    },
    /**
     * @ignore
     */
    validated() {
      return true
    },
    /**
     * @ignore
     */
    invalid() {
      return false
    },
    /**
     * @ignore
     */
    pending() {
      return false
    },
    /**
     * @ignore
     */
    debouncing() {
      return false
    },
    /**
     * @ignore
     */
    errors() {
      return []
    },
    /**
     * @ignore
     */
    error() {
      return
    }
  },
  methods: {
    /**
     * @private
     */
    validate() { },
    /**
     * @private
     */
    load() { },
    /**
     * @private
     */
    update() {},
    /**
     * @private
     */
    reset() {},
    /**
     * @private
     */
    clear() {},
    /**
     * @private
     */
    handleKeyup() {},
    /**
     * @private
     */
    handleChange() {},
    /**
     * @private
     */
    $_initElement() { },
  },
}