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
      private: true,
    },
    onCreated: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onMounted: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onUpdated: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
    onUnmounted: {
      required: false,
      type: [Function],
      default: null,
      private: true,
    },
  }
}