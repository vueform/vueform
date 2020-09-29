import ElementComponent from './../../../mixins/ElementComponent'

export default {
  name: 'FileSlotProgress',
  mixins: [ElementComponent],
  props: {
    el$: {
      required: true,
      type: Object,
    },
    progress: {
      required: true,
      type: [Number],
      default: 0,
    }
  },
}