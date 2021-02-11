import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectSlotSingleLabel',
  props: {
    value: {
      required: true
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