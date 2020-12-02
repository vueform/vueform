import { computed } from 'composition-api'

export default {
  name: 'BaseElement',
  provide() {
    return {
      el$: computed(() => {
        return this
      })
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
    
    embed: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    el$() {
      return this
    }
  },
}