import { ref, toRefs, computed, watch, nextTick } from 'composition-api'

export default {
  name: 'Multiselect',
  props: {
    value: {
      required: true,
    },
    id: {
      type: [String, Number],
      required: false,
      default: 'multiselect',
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
    trackBy: {
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
      default: 'single', // single|multiple|tags
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
    limit: {
      type: Number,
      required: false,
      default: 20,
    },
    maxHeight: {
      type: Number,
      required: false,
      default: 160,
    },
  },
  init(props, context) {
    const { value, options, mode,  searchable, trackBy, limit, maxHeight, id } = toRefs(props)

    const isOpen = ref(false)

    const search = ref(null)

    const input = ref(null)

    const multiselect = ref(null)

    const pointer = ref(null)

    const tabindex = computed(() => {
      return searchable.value ? -1 : 0
    })

    const contentMaxHeight = computed(() => {
      return `${maxHeight.value}px`
    })

    const filteredOptions = computed(() => {
      if (!search.value) {
        return options.value.slice(0, limit.value)
      }

      return options.value.filter((option, index) => {
        return option[trackBy.value].toLowerCase().trim().indexOf(
          search.value.toLowerCase().trim()
        ) !== -1
      }).slice(0, limit.value)
    })

    const multipleSelectionText = computed(() => {
      return value.value.length > 1
        ? `${value.value.length} options selected`
        : `${value.value.length} option selected`
    })

    const hasSelected = computed(() => {
      switch (mode.value) {
        case 'single':
          return !!value.value

        case 'multiple':
        case 'tags':
          return !!value.value.length
      }
    })

    const nullValue = computed(() => {
      switch (mode.value) {
        case 'single':
          return null

        case 'multiple':
        case 'tags':
          return []
      }
    })

    const open = () => {
      isOpen.value = true
      context.emit('open')
    }

    const close = () => {
      // isOpen.value = false
      context.emit('close')
    }

    const toggle = () => {
      isOpen.value ? close() : open()
    }

    const update = (val) => {
      context.emit('input', val)
    } 

    const clear = (option) => {
      update(nullValue.value)
    }

    const clearSearch = () => {
      search.value = null
    }

    const blurSearch = () => {
      if (!searchable.value) {
        return
      }

      input.value.blur()
    }

    const select = (option) => {
      switch (mode.value) {
        case 'single':
          update(option)
          break

        case 'multiple':
        case 'tags':
          update([...value.value].concat(option))
          break
      }

      context.emit('select', option)
    }

    const deselect = (option) => {
      switch (mode.value) {
        case 'single':
          clear()
          break

        case 'multiple':
          update(value.value.filter((val, i) => !_.isEqual(val, option)))
          break
      }

      context.emit('deselect', option)
    }

    const isSelected = (option) => {
      switch (mode.value) {
        case 'single':
          return _.isEqual(value.value, option)

        case 'multiple':
          return value.value.indexOf(option) !== -1
      }
    }

    const isPointed = (option) => {
      return _.isEqual(pointer.value, option)
    }

    const setPointer = (option) => {
      pointer.value = option
    }

    const clearPointer = () => {
      pointer.value = null
    }

    const selectPointer = () => {
      handleOptionClick(pointer.value)
    }

    const forwardPointer = (option) => {
      if (pointer.value === null) {
        setPointer(filteredOptions.value[0])
      }
      else {
        let nextIndex = filteredOptions.value.indexOf(pointer.value) + 1

        if (filteredOptions.value.length <= nextIndex) {
          nextIndex = 0
        }

        setPointer(filteredOptions.value[nextIndex])
      }

      nextTick(() => {
        adjustWrapperScrollToPointer()
      })
    }

    const backwardPointer = (option) => {
      let prevIndex = filteredOptions.value.indexOf(pointer.value) - 1

      if (prevIndex < 0) {
        prevIndex = filteredOptions.value.length - 1
      }

      setPointer(filteredOptions.value[prevIndex])

      nextTick(() => {
        adjustWrapperScrollToPointer()
      })
    }

    const adjustWrapperScrollToPointer = () => {
      let pointedOption = context.parent.$el.querySelector(`#${id.value} .is-pointed`)
      let wrapper = pointedOption.parentElement

      if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
        wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight
      }
      
      if (pointedOption.offsetTop < wrapper.scrollTop) {
        wrapper.scrollTop = pointedOption.offsetTop
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
          blurSearch()
          break

        case 'multiple':
          if (isSelected(option)) {
            deselect(option)
            return
          }

          select(option)
          clearSearch()
          break
      }
    }

    const handleEsc = (e) => {
      close()
      clearPointer()
      e.target.blur()
    }

    watch(search, (val) => {
      context.emit('search-change', val)
    })

    return {
      isOpen,
      filteredOptions,
      hasSelected,
      search,
      tabindex,
      input,
      multiselect,
      contentMaxHeight,
      pointer,
      multipleSelectionText,

      open,
      close,
      toggle,
      select,
      deselect,
      clear,
      isSelected,
      clearSearch,
      blurSearch,
      isPointed,
      setPointer,
      clearPointer,
      selectPointer,
      forwardPointer,
      backwardPointer,
      handleOptionClick,
      handleEsc,
    }
  }
}