import { ref, toRefs, computed, watch, nextTick } from 'composition-api'

export default {
  name: 'Multiselect',
  emits: [
    'open', 'close', 'select', 'deselect', 
    'input', 'search-change', 'tag'
  ],
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
      default: -1,
    },
    maxHeight: {
      type: Number,
      required: false,
      default: 160,
    },
    hideSelectedTag: {
      type: Boolean,
      required: false,
      default: true,
    },
    createTag: {
      type: Boolean,
      required: false,
      default: false,
    },
    appendNewTag: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  init(props, context) {
    const { value, options, mode,  searchable, trackBy, limit, maxHeight, id, hideSelectedTag, createTag, label, appendNewTag } = toRefs(props)

    const isOpen = ref(false)

    const search = ref(null)

    const input = ref(null)

    const multiselect = ref(null)

    const pointer = ref(null)

    const appendedOptions = ref([])

    const resolvedOptions = ref(options.value instanceof Promise ? [] : options.value)

    const tabindex = computed(() => {
      return searchable.value ? -1 : 0
    })

    const tagsSearchWidth = computed(() => {
      if (search.value) {
        return `${search.value.length}ch`
      }

      if (!hasSelected.value) {
        return '100%'
      }

      return '1ch'
    })

    const contentMaxHeight = computed(() => {
      return `${maxHeight.value}px`
    })

    const filteredOptions = computed(() => {
      let filteredOptions = resolvedOptions.value

      if (createdTag.value.length) {
        filteredOptions = createdTag.value.concat(filteredOptions)
      }

      if (appendedOptions.value.length) {
        filteredOptions = filteredOptions.concat(appendedOptions.value)
      }

      if (search.value) {
        filteredOptions = filteredOptions.filter((option) => {
          return normalize(option[trackBy.value]).indexOf(normalize(search.value)) !== -1
        })
      }

      if (hideSelectedTag.value) {
        filteredOptions = filteredOptions.filter((option) => !shouldHideOption(option))
      }

      if (limit.value > 0) {
        filteredOptions = filteredOptions.slice(0, limit.value)
      }

      return filteredOptions
    })

    const createdTag = computed(() => {
      if (createTag.value === false || !search.value) {
        return []
      }

      return optionExistsWithTracyBy(search.value) ? [] : [{
        [label.value]: search.value,
        [trackBy.value]: search.value,
        value: search.value,
      }]
    })

    const optionExist = (option) => {
      return _.findIndex(resolvedOptions.value.concat(appendedOptions.value), option) !== -1
    }

    const optionExistsWithTracyBy = (val) => {
      return _.findIndex(resolvedOptions.value.concat(appendedOptions.value),
        (option) => normalize(option[trackBy.value]) == normalize(val)
      ) !== -1
    }

    const shouldHideOption = (option) => {
      return mode.value === 'tags' && hideSelectedTag.value && isSelected(option)
    }

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

    const appendOption = (option) => {
      appendedOptions.value.push(option)
    }

    const normalize = (str) => {
      if (typeof str !== 'string') {
        return str
      }

      return str.toLowerCase().trim()
    }

    const open = () => {
      isOpen.value = true
      context.emit('open')
    }

    const close = () => {
      isOpen.value = false
      context.emit('close')
    }

    const toggle = () => {
      isOpen.value ? close() : open()
    }

    const remove = (option) => {
      deselect(option)
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

        case 'tags':
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

        case 'tags':
        case 'multiple':
          return _.findIndex(value.value, option) !== -1
      }
    }

    const isPointed = (option) => {
      return _.isEqual(pointer.value, option)
    }

    const setPointer = (option) => {
      pointer.value = option
    }

    const setPointerFirst = () => {
      pointer.value = filteredOptions.value[0] || null
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
        let next = _.findIndex(filteredOptions.value, pointer.value) + 1

        if (filteredOptions.value.length <= next) {
          next = 0
        }

        setPointer(filteredOptions.value[next])
      }

      nextTick(() => {
        adjustWrapperScrollToPointer()
      })
    }

    const backwardPointer = () => {
      let prevIndex = _.findIndex(filteredOptions.value, pointer.value) - 1

      if (prevIndex < 0) {
        prevIndex = filteredOptions.value.length - 1
      }

      setPointer(filteredOptions.value[prevIndex])

      nextTick(() => {
        adjustWrapperScrollToPointer()
      })
    }

    const adjustWrapperScrollToPointer = () => {
      let pointedOption = document.querySelector(`#${id.value} .is-pointed`)
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

        case 'tags':
          if (isSelected(option)) {
            deselect(option)
            return
          }

          if (!optionExist(option) && createTag.value) {
            context.emit('tag', option.value)

            if (appendNewTag) {
              appendOption(option)
            }

            clearSearch()
          }

          select(option)
          break
      }
    }

    const handleEsc = (e) => {
      close()
      clearPointer()
      e.target.blur()
    }

    const handleBackspace = (e) => {
      update([...value.value].slice(0,-1))
    }

    const handleTagsSearchBackspace = (e) => {
      if (search.value !== null) {
        e.stopPropagation()
      }

      if (search.value === '') {
        search.value = null
      }
    }

    watch(search, (val) => {
      setPointerFirst()
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
      tagsSearchWidth,
      appendedOptions,

      open,
      close,
      toggle,
      select,
      deselect,
      remove,
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
      handleBackspace,
      handleTagsSearchBackspace,
      handleEsc,
    }
  }
}