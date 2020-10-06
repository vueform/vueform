import _ from 'lodash'

export default {
  name: 'BaseElement',
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

    parent: {
      type: Object,
      required: false,
      default: () => ({})
    },
  },
  computed: {
    el$() {
      return this
    },
  },
}