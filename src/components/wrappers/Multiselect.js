import { ref, toRefs, computed } from 'composition-api'

export default {
  name: 'Multiselect',
  props: {
    value: {
      required: true,
    },
    id: {
      type: [String, Number],
      required: false,
      default: '',
    },
    name: {
      type: [String, Number],
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: 'label',
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    mode: {
      type: String,
      required: false,
      default: 'single', // single|multi|tags
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  init(props, context) {
    const { value, options, mode, closeOnSelect, } = toRefs(props)

    const isOpen = ref(false)

    const filteredOptions = computed(() => {
      return options.value
    })

    const hasSelected = computed(() => {
      switch (mode.value) {
        case 'single':
          return !!value.value

        case 'multi':
        case 'tags':
          return !!value.value.length
      }
    })

    const nullValue = computed(() => {
      switch (mode.value) {
        case 'single':
          return null

        case 'multi':
        case 'tags':
          return []
      }
    })

    const open = () => {
      isOpen.value = true
    }

    const close = () => {
      isOpen.value = false
    }

    const toggle = () => {
      isOpen.value ? close() : open()
    }

    const update = (val) => {
      switch (mode.value) {
        case 'single':
          context.emit('input', val)
          break
      }
    } 

    const clear = (option) => {
      update(nullValue.value)
    }

    const select = (option) => {
      switch (mode.value) {
        case 'single':
          update(option)
          break

        case 'multi':
        case 'tags':
          update([...value.value].concat(option))
          break
      }
    }

    const deselect = (option) => {
      switch (mode.value) {
        case 'single':
          clear()
          break
      }
    }

    const isSelected = (option) => {
      switch (mode.value) {
        case 'single':
          return _.isEqual(value.value, option)
          break
      }
    }

    const handleOptionClick = (option) => {
      switch (mode.value) {
        case 'single':
          if (isSelected(option)) {
            deselect(option)
            return
          }

          clear()
          select(option)

          if (closeOnSelect.value) {
            close()
          }
          break
      }
    }

    return {
      isOpen,
      filteredOptions,
      hasSelected,

      open,
      close,
      toggle,
      select,
      deselect,
      clear,
      isSelected,
      handleOptionClick,
    }
  }
}