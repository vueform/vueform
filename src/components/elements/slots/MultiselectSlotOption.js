import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotOption',
  props: {
    option: {
      required: true
    },
    search: {
      required: false
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  },
  setup(props, context) {
    return {
      ...useElementComponent(props, context),
    }
  },
}