
import { ref, watch, nextTick, computed, inject, onBeforeUnmount, onMounted, toRefs } from 'vue'
import useElementComponent from './../composables/useElementComponent'
import useEvents from './../composables/useEvents'

export default {
  name: 'ElementAddonOptions',
  emits: ['select', 'open', 'close'],
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

    /**
     * Whether the country selector is open.
     *
     * @type {boolean}
     */
    const isOpen = ref(false)

    /**
     * The container div.
     *
     * @type {HTMLElement}
     */
    const selector = ref(null)

    /**
     * The dropdown container div.
     *
     * @type {HTMLElement}
     */
    const dropdown = ref(null)

    /**
     * The left position of the dropdown.
     *
     * @type {number|undefined}
     */
    const left = ref(undefined)

    /**
     * The right position of the dropdown.
     *
     * @type {number|undefined}
     */
    const right = ref(undefined)
    
    /**
     * The top position of the dropdown.
     *
     * @type {number|undefined}
     */
    const top = ref(undefined)
    
    /**
     * The bottom position of the dropdown.
     *
     * @type {number|undefined}
     */
    const bottom = ref(undefined)

    /**
     * The current search term.
     *
     * @type {string}
     */
    const search = ref('')

    /**
     * Store for search timeout.
     *
     * @type {object}
     */
    const searchTimeout = ref(null)

    /**
     * Store for resize timeout.
     *
     * @type {object}
     */
    const resizeTimeout = ref(null)

    /**
     * Whether selection on hover is disabled.
     *
     * @type {boolean}
     */
    const hoverDisabled = ref(false)

    /**
     * Whether the option list is from top to bottom.
     *
     * @type {boolean}
     */
    const fullHeight = ref(false)

    /**
     * The currently selected option.
     *
     * @type {object}
     */
    const selected = ref({})

    /**
     * The currently pointed option.
     *
     * @type {object}
     */
    const pointed = ref({})

    // ============== COMPUTED ==============

    /**
     * The option that should be focused according to current [`search`](#property-search) term.
     *
     * @type {array}
     */
    const focused = computed(() => {
      if (!search.value) {
        return {}
      }

      return options.value.find(o => o.label.toLowerCase().startsWith(search.value.toString().toLowerCase()))
    })

    /**
     * Additional `style` attribute for the dropdown (position values).
     *
     * @type {object}
     */
    const style = computed(() => {
      return {
        left: left.value !== undefined ? `${left.value}px` : undefined,
        right: right.value !== undefined ? `${right.value}px` : undefined,
        top: top.value !== undefined ? `${top.value}px` : undefined,
        bottom: bottom.value !== undefined ? `${bottom.value}px` : 'auto',
      }
    })

    // =============== METHODS ==============

    /**
     * Closes the dropdown.
     * 
     * @returns {void}
     */
    const close = () => {
      top.value = undefined
      bottom.value = undefined
      fullHeight.value = false
      isOpen.value = false
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      search.value = ''
      context.emit('close')
    }

    /**
     * Opens the dropdown.
     * 
     * @returns {void}
     */
    const open = async () => {
      isOpen.value = true

      await nextTick()

      if (selector.value.closest('[dir="rtl"]')) {
        right.value = window.innerWidth - (selector.value.offsetLeft + selector.value.offsetWidth)
      } else {
        left.value = selector.value.offsetLeft
      }

      resizeDropdown()

      scrollToSelected()

      setTimeout(() => {
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleKeydown)
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
      }, 0)

      context.emit('open')
    }

    /**
     * Scroll the dropdown to an option.
     * 
     * @param {object} option* an option object form [`options`](#option-options).
     * @returns {void}
     */
    const scrollToOption = (option) => {
      if (fullHeight.value) {
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

    /**
     * Scroll to the currently selected option (async).
     * 
     * @returns {void}
     */
    const scrollToSelected = async () => {
      await nextTick()

      const option = document.querySelector(`[data-dropdown-for="${el$.value.fieldId}"] [data-selected="true"]`)

      if (!option) {
        return
      }

      scrollToOption(option)
    }

    /**
     * Resizes the dropdown to best fit into screen.
     * 
     * @returns {void}
     */
    const resizeDropdown = () => {
      if (dropdown.value.getBoundingClientRect().height >= window.innerHeight - 32) {
        fullHeight.value = true
        top.value = 16
        bottom.value = 16
      } else {
        fullHeight.value = false
        
        top.value = selector.value.getBoundingClientRect().top

        if (dropdown.value.getBoundingClientRect().height > window.innerHeight - selector.value.getBoundingClientRect().top - 16) {
          bottom.value = 16
        } else {
          bottom.value = undefined
        }
      }
    }

    /**
     * Select an option.
     * 
     * @param {object} option* an option object form [`options`](#option-options).
     * @returns {void}
     */
    const selectOption = (option) => {
      selected.value = option
      fire('select', option)
    }

    /**
     * Removes the selected option.
     * 
     * @returns {void}
     */
    const reset = () => {
      selected.value = {}
      fire('select', {})
    }

    /**
     * Handles pointing an option (sets [`pointed`](#property-pointed)).
     * 
     * @param {object} option* an option object form [`options`](#option-options).
     * @returns {void}
     */
    const handleOptionPoint = (option) => {
      if (hoverDisabled.value) {
        return
      }

      pointed.value = option
    }

    /**
     * Handle the click of an option.
     * 
     * @param {object} option* an option object form [`options`](#option-options).
     * @returns {void}
     */
    const handleOptionClick = (option) => {
      selectOption(option)
      close()
      el$.value.input.focus()
    }

    /**
     * Handles the click of collapsed element.
     * 
     * @params {Event} event* the Event
     * @returns {void}
     */
    const handleSelectorClick = (e) => {
      open()
    }

    /**
     * Handles the keydown even of the collapsed element when focused (async.
     * 
     * @params {Event} event* the Event
     * @returns {void}
     */
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

    /**
     * Handles clicking outside of the dropdown once opened (closes it).
     * 
     * @params {Event} event* the Event
     * @returns {void}
     */
    const handleClickOutside = (e) => {
      if (!dropdown.value.contains(e.target)) {
        close()
      }
    }

    /**
     * Handles the keydown event when the dropdown is open.
     * 
     * @params {Event} event* the Event
     * @returns {void}
     */
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

    /**
     * Handles the window resize event (closes the dropdown if open).
     * 
     * @returns {void}
     */
    const handleResize = () => {
      close()
    }

    /**
     * Handles the window scroll event (resizes the dropdown if needed).
     * 
     * @returns {void}
     */
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
      scrollToSelected,
      selectOption,
      reset,
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