export default {
  props: {
    name: {
      required: true,
      type: [String, Number],
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => ([])
    },
    onBeforeCreate: {
      required: false,
      type: [Function],
      default: null,
    },
    onCreated: {
      required: false,
      type: [Function],
      default: null,
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      default: null,
    },
    onMounted: {
      required: false,
      type: [Function],
      default: null,
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      default: null,
    },
    onUpdated: {
      required: false,
      type: [Function],
      default: null,
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      default: null,
    },
    onUnmounted: {
      required: false,
      type: [Function],
      default: null,
    },
  }
}