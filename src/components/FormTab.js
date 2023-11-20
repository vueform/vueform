import filter from 'lodash/filter'
import some from 'lodash/some'
import each from 'lodash/each'
// @todo:adam check required schema (eg. `elements` property) here and everywhere
import { computed, ref, toRefs, watch, onMounted, onBeforeMount, onBeforeUnmount, nextTick, getCurrentInstance, markRaw } from 'vue'
import useFormComponent from './../composables/useFormComponent'
import useConditions from './../composables/useConditions'
import useLabel from './../composables/useLabel'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormTab',
  emits: ['activate', 'inactivate'],
  slots: ['default'],
  props: {
    /**
     * Name of tab within [tabs](reference/frontend-form#prop-tabs) object.
     */
    name: {
      type: [String, Number],
      required: true,
    },

    label: {
      type: [String, Object, Function],
      required: false,
      default: null
    },

    elements: {
      type: [Array],
      required: false,
      default: () => ([])
    },

    conditions: {
      type: [Array],
      required: false,
      default: () => ([])
    },
    
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null,
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null,
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    view: {
      required: false,
      type: [String],
      default: undefined,
    },

    onActivate: {
      type: [Function],
      required: false,
      default: null,
      private: true,
    },

    onInactivate: {
      type: [Function],
      required: false,
      default: null,
      private: true,
    },
  },
  setup(props, context)
  {
    const {
      name,
      label,
      elements,
    } = toRefs(props)

    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
    } = useFormComponent(props, context)

    const {
      available,
      conditionList,
      updateConditions,
    } = useConditions(props, context, { form$ })

    const {
      isLabelComponent,
      label: tabLabel_,
    } = useLabel(props, context, { component$: form$, labelDefinition: label })

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
     * Whether the tab is active.
     *
     * @type {boolean}
     * @default false
     */
    const active = ref(false)

    /**
     * The label of the tab.
     *
     * @type {string|Component}
     * @default null
     */
    const tabLabel = ref(tabLabel_.value && typeof tabLabel_.value === 'object' ? markRaw(tabLabel_.value) : tabLabel_.value)

    // ============== COMPUTED ==============

    /**
     * The components of highest level form elements.
     *
     * @type {object}
     */
    const elements$ = computed(() => {
      return form$.value.elements$
    })

    /**
     * The parent [`FormTabs`](form-tabs) component.
     *
     * @type {FormTabs}
     */
    const tabs$ = computed(() => {
      return form$.value.tabs$
    })

    /**
     * Index of this tab among the other tabs which are not hidden by unmet conditions.
     *
     * @type {number}
     */
    const index = computed(() => {
      return Object.keys(tabs$?.value?.tabs$||/* istanbul ignore next: tab can not stand by itself */{}).indexOf(name.value)
    })

    /**
     * Whether the tab is the first.
     *
     * @type {boolean}
     */
    const isFirst = computed(() => {
      return index.value === 0
    })

    /**
     * Whether the tab is the first.
     *
     * @type {boolean}
     */
    const isLast = computed(() => {
      return tabs$.value.last$.name === name.value
    })

    /**
     * The components of form elements within the tab.
     *
     * @type {object}
     */
    const children$ = computed(() => {
      return filter(elements$.value, (element$, key) => {
        return elements.value.indexOf(key) !== -1
      })
    })

    /**
     * Whether the tab should be visible.
     *
     * @type {boolean}
     */
    const visible = computed(() => {
      return available.value
    })

    /**
     * Whether the tab has any invalid elements.
     *
     * @type {boolean}
     */
    const invalid = computed(() => {
      return some(children$.value, { available: true, invalid: true })
    })
    
    /**
     * The tab's component.
     *
     * @type {FormTab}
     */
    const tab$ = computed(() => {
      return form$.value.tabs$.tabs$[name.value]
    })

    // =============== METHODS ==============

    /**
     * Deactivate all other tabs and set the current one as active.
     *
     * @returns {void}
     */
    const select = () => {
      if (active.value || !tabs$.value?.select) {
        return
      }

      tabs$.value?.select(tab$.value)

      activate()
    }

    /**
     * Activate the tab.
     *
     * @returns {void}
     */
    const activate = () => {
      if (active.value) {
        return
      }

      active.value = true

      each(children$.value, (element$) => {
        element$.activate()
      })

      fire('activate')
    }

    /**
     * Deactivate the tab.
     *
     * @returns {void}
     */
    const deactivate = () => {
      if (!active.value) {
        return
      }

      active.value = false

      each(children$.value, (element$) => {
        element$.deactivate()
      })

      fire('inactivate')
    }

    /**
      * Apply conditions of the tab to its elements.
      *
      * @returns {void}
      * @private
      */
    const addChildConditions = () => {
      if (conditionList.value.length == 0) {
        return
      }

      Object.values(children$.value).forEach((element$) => {
        element$.addConditions('tab', conditionList.value)
      })
    }

    /**
      * Remove conditions of the elements of the tab.
      *
      * @returns {void}
      * @private
      */
    const removeChildConditions = () => {
      Object.values(children$.value).forEach((element$) => {
        element$.removeConditions('tab')
      })
    }

    /**
      * Resets conditions of the elements of the tab.
      *
      * @returns {void}
      * @private
      */
    const resetChildConditions = () => {
      removeChildConditions()
      addChildConditions()
    }

    /**
     * Set the component to the parent as if `refs` were used.
     *
     * @param {VNode} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
     * @private
     */
    const assignToParent = ($parent, assignToParent) => {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.push($this)
      }
      else {
        assignToParent($parent.$parent, assignToParent)
      }
    }

    /**
    * Removes the component from the parent.
    *
    * @param {VNode} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    const removeFromParent = ($parent, removeFromParent) => {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.splice($parent.tabs$Array.map(t$=>normalize(t$.name)).indexOf(normalize(name.value)), 1)
      }
      else {
        /* @todo:adam test later */
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== WATCHERS ==============

    watch(children$, () => {
      /* istanbul ignore else */
      if (!active.value) {
        return
      }

      each(children$.value, (element$) => {
        element$.activate()
      })
    }, { deep: false, lazy: true })

    watch(tabLabel_, () => {
      tabLabel.value = tabLabel_.value && typeof tabLabel_.value === 'object' ? markRaw(tabLabel_.value) : tabLabel_.value
    })

    watch(conditionList, (n, o) => {
      if (!n?.length) {
        removeChildConditions()
      } else {
        addChildConditions()
      }
    })

    // ================ HOOKS ===============

    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tab mount
      nextTick(() => {
        addChildConditions()
      })
    })
    
    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent)
    })

    onBeforeUnmount(() => {
      removeChildConditions()
      removeFromParent($this.$parent, removeFromParent)
    })

    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      elements$,
      index,
      isFirst,
      isLast,
      active,
      events,
      listeners,
      children$,
      visible,
      invalid,
      classes,
      Templates,
      template,
      available,
      isLabelComponent,
      tabLabel,
      tab$,
      tabs$,
      conditionList,
      select,
      activate,
      deactivate,
      on,
      off,
      fire,
      addChildConditions,
      removeChildConditions,
      resetChildConditions,
      updateConditions,
    }
  },
}