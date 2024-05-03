
import { ref, watch, nextTick, computed, inject, onBeforeUnmount, onMounted, toRefs } from 'vue'
import useElementComponent from './../composables/useElementComponent'
import useEvents from './../composables/useEvents'

export default {
  name: 'ElementAddonOptions',
  emits: ['select'],
  props: {
    options: {
      type: Array,
      required: false,
      default: () => ([])
    },
    placeholder: {
      type: [String, Number, Object],
      required: false,
      default: ''
    },
  },
  setup(props, context)
  {
    const { options } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      el$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: context.emits,
    })

    // ================ DATA ================

    const isOpen = ref(false)
    const selector = ref(null)
    const dropdown = ref(null)
    const left = ref(undefined)
    const right = ref(undefined)
    const top = ref(undefined)
    const bottom = ref(undefined)
    const search = ref('')
    const searchTimeout = ref(null)
    const hoverDisabled = ref(false)
    const resizeTimeout = ref(null)
    const fullScreen = ref(false)

    const selected = ref({})
    const pointed = ref({})

    // ============== COMPUTED ==============

    const focused = computed(() => {
      if (!search.value) {
        return {}
      }

      return options.value.find(o => o.label.toLowerCase().startsWith(search.value.toString().toLowerCase()))
    })

    // =============== METHODS ==============

    const style = computed(() => {
      return {
        left: left.value !== undefined ? `${left.value}px` : undefined,
        right: right.value !== undefined ? `${right.value}px` : undefined,
        top: top.value !== undefined ? `${top.value}px` : undefined,
        bottom: bottom.value !== undefined ? `${bottom.value}px` : 'auto',
      }
    })

    const close = () => {
      top.value = undefined
      bottom.value = undefined
      fullScreen.value = false
      isOpen.value = false
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      search.value = ''
    }

    const open = async () => {
      isOpen.value = true

      await nextTick()

      if (selector.value.closest('[dir="rtl"]')) {
        right.value = window.innerWidth - (selector.value.offsetLeft + selector.value.offsetWidth)
      } else {
        left.value = selector.value.offsetLeft
      }

      resizeDropdown()

      scrollDropdown()

      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleKeydown)
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
      }, 0)
    }

    const scrollToOption = (option) => {
      if (fullScreen.value) {
        const selectorRect = selector.value.getBoundingClientRect()
        const optionRect = option.getBoundingClientRect()

        const targetCenterY = selectorRect.top + selectorRect.height / 2
        const optionCenterY = optionRect.top + optionRect.height / 2
        
        const centerDiff = targetCenterY - optionCenterY

        const newScrollTop = dropdown.value.scrollTop - centerDiff

        dropdown.value.scrollTop = newScrollTop
      } else {
        const optionRect = option.getBoundingClientRect()
        const dropdownRect = dropdown.value.getBoundingClientRect()

        const optionTopWithinDiv = optionRect.top - dropdownRect.top

        dropdown.value.scrollTop = optionTopWithinDiv + dropdown.value.scrollTop
      }
    }

    const scrollDropdown = async () => {
      await nextTick()

      const option = document.querySelector(`[data-dropdown-for="${el$.value.fieldId}"] [data-selected="true"]`)

      if (!option) {
        return
      }

      scrollToOption(option)
    }

    const resizeDropdown = () => {
      if (dropdown.value.getBoundingClientRect().height >= window.innerHeight - 32) {
        fullScreen.value = true
        top.value = 16
        bottom.value = 16
      } else {
        fullScreen.value = false
        
        top.value = selector.value.getBoundingClientRect().top

        if (dropdown.value.getBoundingClientRect().height > window.innerHeight - selector.value.getBoundingClientRect().top - 16) {
          bottom.value = 16
        } else {
          bottom.value = undefined
        }
      }
    }

    const selectOption = (option) => {
      selected.value = option
      fire('select', option)
    }

    const handleOptionPoint = (option) => {
      if (hoverDisabled.value) {
        return
      }

      pointed.value = option
    }

    const handleOptionClick = (option) => {
      selectOption(option)
      close()
      el$.value.input.focus()
    }

    const handleSelectorClick = (e) => {
      open()
    }

    const handleSelectorKeydown = async (e) => {
      if (isOpen.value) {
        return
      }

      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].indexOf(e.key) !== -1) {
        e.preventDefault()

        open()

        const index = selected.value.index !== undefined ? selected.value.index : pointed.value.index || 0
        const option = document.querySelector(`[data-dropdown-for="${el$.value.fieldId}"] [data-index="${index}"]`)

        pointed.value = options.value.find(c => c.index === index)

        await nextTick()

        option.focus()
      }
    }

    const handleClickOutside = (e) => {
      if (!dropdown.value.contains(e.target)) {
        close()
      }
    }

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        close()
        selector.value.focus()
        return
      }

      if (['Enter', ' '].indexOf(e.key) !== -1 && pointed.value?.index !== undefined) {
        e.preventDefault()
        selectOption(pointed.value)
        close()
        el$.value.input.focus()
        return
      }

      if (e.key === 'Tab') {
        e.preventDefault()
        close()
        el$.value.input.focus()
        return
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()

        const index = pointed.value.index === undefined ? -1 : pointed.value.index
        let nextIndex = index + 1

        if (options.value.length < nextIndex + 1) {
          nextIndex = 0
        }

        hoverDisabled.value = true

        pointed.value = options.value.find(c => c.index === nextIndex)

        const option = document.querySelector(`[data-dropdown-for="${el$.value.fieldId}"] [data-index="${nextIndex}"]`)

        scrollToOption(option)

        option.focus()

        setTimeout(() => {
          hoverDisabled.value = false
        }, 2)
        return
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()

        const index = pointed.value.index || 0
        let prevIndex = index - 1

        if (prevIndex < 0) {
          prevIndex = options.value.length - 1
        }

        hoverDisabled.value = true

        pointed.value = options.value.find(c => c.index === prevIndex)

        const option = document.querySelector(`[data-dropdown-for="${el$.value.fieldId}"] [data-index="${prevIndex}"]`)

        scrollToOption(option)

        option.focus()

        setTimeout(() => {
          hoverDisabled.value = false
        }, 0)
        return
      }

      if (e.key === 'Backspace' && search.value.length) {
        search.value = search.value.slice(0, -1)
        return
      }

      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        search.value += e.key
        hoverDisabled.value = true

        if (searchTimeout.value) {
          clearTimeout(searchTimeout.value)
        }

        searchTimeout.value = setTimeout(() => {
          search.value = ''
        }, 1000)

        setTimeout(() => {
          hoverDisabled.value = false
        }, 0)

      }
    }

    const handleResize = () => {
      close()
    }

    const handleScroll = () => {
      if (resizeTimeout.value) {
        clearTimeout(resizeTimeout.value)
      }

      resizeTimeout.value = setTimeout(() => {
        resizeDropdown()
      }, 50)
    }

    // =============== HOOKS ================

    onBeforeUnmount(() => {
      close()
    })

    // ============== WATCHERS ==============

    watch(focused, (option) => {
      if (!option || option.index === undefined) {
        return
      }

      let optionEl = document.querySelector(`[data-index="${option.index}"]`)
      scrollToOption(optionEl)
      pointed.value = option
      optionEl.focus()
    })

    return {
      form$,
      el$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,

      events,
      listeners,
      on,
      off,
      fire,

      isOpen,
      selector,
      dropdown,
      left,
      right,
      top,
      bottom,
      style,
      search,
      searchTimeout,
      hoverDisabled,
      selected,
      pointed,

      focused,

      close,
      scrollToOption,
      scrollDropdown,
      selectOption,
      handleOptionPoint,
      handleOptionClick,
      handleSelectorClick,
      handleSelectorKeydown,
      handleClickOutside,
      handleKeydown,
      handleResize,
    }
  }
}