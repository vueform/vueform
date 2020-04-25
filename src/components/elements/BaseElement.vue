<script>
  export default {
    name: 'BaseElement',
    inject: ['theme'],
    provide() {
      return {
        el$: this.el$,
      }
    },
    props: {
      schema: {
        type: Object,
        required: true
      },
      name: {
        type: String,
        required: true
      },
    },
    computed: {
      label() {
        return this.schema.label
      },
      slots() {
        let slots = {}

        _.each(this.schema.slots, (slot, name) => {
          let instance = new slot({
            propsData: {
              el$: this.el$
            }
          })

          instance.$mount()

          slots[name] = instance._vnode
        })

        return slots
      },
      el$() {
        return this
      }
    },
    watch: {
      schema: {
        handler() {
          this.assignSlots()
          this.$forceUpdate()
        },
        deep: true,
        immediate: false
      }
    },
    methods: {
      remove() {
        this.$emit('remove', this.name)
      },
      assignSlots() {
        _.each(this.schema.slots, (slot, name) => {
          let instance = new slot({
            propsData: {
              el$: this.el$
            }
          })

          instance.$mount()

          this.$set(this.$slots, name, [instance._vnode])
        })
      }
    },
    created() {
      this.assignSlots()
    }
  }
</script>