export default {
  name: 'RadiogroupSlotRadio',
  props: {
    el$: {
      type: Object,
      required: true
    },
    item: {
      type: [Object, String, Number, Array],
      required: true
    },
    value: {
      type: [Object, String, Number, Array],
      required: true
    },
  },
}