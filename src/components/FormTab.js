// @todo: check required schema (eg. `elements` property) here and everywhere
import { computed, ref, toRefs, watch, onMounted, onBeforeMount, onBeforeUnmount, nextTick, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useConditions from './../composables/useConditions'
import useLabel from './../composables/useLabel'
import useEvents from './../composables/useEvents'
import { mergeComponentClasses } from './../utils/mergeClasses'
import normalize from './../utils/normalize'

export default {
  name: 'FormTab',
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

    tabClass: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },
  },
  setup(props, context)
  {  
    const { 
      name,
      label,
      elements,
      conditions,
      tabClass,
    } = toRefs(props)
    const { classKeys } = toRefs(context.data)
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes:
      baseClasses,
      components,
      mainClass,
      defaultClasses,
    } = useFormComponent(props, context)

    const {
      available,
    } = useConditions(props, context, { form$ })

    const {
      isLabelComponent
    } = useLabel(props, context, { component$: form$, labelDefinition: label })

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: ['active', 'inactive'],
    })

    // ================ DATA ================

    /**
     * Determines whether the tab is active.
     * 
     * @type {boolean}
     * @default false
     */
    const active = ref(false)

    // ============== COMPUTED ==============

    const elements$ = computed(() => {
      return form$.value.elements$
    })

    const tabs$ = computed(() => {
      return form$.value.tabs$
    })

    /**
     * Returns the components of elements within the tab.
     * 
     * @type {object}
     */
    const children$ = computed(() => {
      return _.filter(elements$.value, (element$, key) => {
        return elements.value.indexOf(key) !== -1
      })
    })

    /**
     * Determines whether the tab is visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return available.value
    })

    /**
     * Class of tab.
     * 
     * @type {string|array|object}
     */
    const class_ = computed(() => {
      return tabClass.value || null
    })

    /**
     * Determines whether the tab has any invalid elements.
     * 
     * @type {boolean}
     */
    const invalid = computed(() => {
      return _.some(children$.value, { available: true, invalid: true })   
    })

    /**
     * 
     * 
     * @private
     */
    const classes = computed(() => {
      let classList = _.clone(baseClasses.value)

      classList = mergeComponentClasses(classList, {
        [classKeys.value.state]: {
          [classList.active]: active.value,
          [classList.inactive]: !active.value,
          [classList.valid]: !invalid.value,
          [classList.invalid]: invalid.value,
        }
      })

      // Add tabs's class to main class
      if (class_ !== null) {
        classList = mergeComponentClasses(classList, {
          [mainClass.value]: class_.value
        })
      }

      return classList
    })
    
    /**
     * 
     * 
     * @private
     */
    const tab$ = computed(() => {
      return form$.value.tabs$.tabs$[name.value]
    })

    // =============== METHODS ==============

    /**
     * Selects the tab to become the active tab.
     *
     * @public
     * @returns {void}
     */
    const select = () => {
      if (active.value) {
        return
      }

      tabs$.value.select(tab$.value)

      activate()
    }

    /**
     * Activates the tab.
     *
     * @public
     * @returns {void}
     */
    const activate = () => {
      if (active.value) {
        return
      }

      active.value = true

      _.each(children$.value, (element$) => {
        element$.activate()
      })

      fire('active')
    }

    /**
     * Deactivates the step.
     *
     * @public
     * @returns {void}
     */
    const deactivate = () => {
      if (!active.value) {
        return
      }

      active.value = false

      _.each(children$.value, (element$) => {
        element$.deactivate()
      })

      fire('inactive')
    }

    // no export
    /**
     * 
     * 
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

    // no export
    /**
     * 
     * 
     * @private
     */
    const removeFromParent = ($parent, removeFromParent) => {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.splice($parent.tabs$Array.map(t$=>normalize(t$.name)).indexOf(normalize(name.value)), 1)
      }
      else {
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== WATCHERS ==============

    watch(children$, () => {
      if (!active.value) {
        return
      } 

      _.each(children$.value, (element$) => {
        element$.activate()
      })
    }, { deep: false, lazy: true })

    // ================ HOOKS ===============

    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tab mount
      nextTick(() => {
        if (conditions.value.length == 0) {
          return
        }

        _.each(children$.value, (element$) => {
          _.each(conditions.value, (condition) => {
            element$.conditions.push(condition)
          })
        })
      })
    })
    
    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent)
    })

    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent)
    })

    return {
      form$,
      theme,
      elements$,
      active,
      events,
      listeners,
      children$,
      visible,
      invalid,
      classes,
      mainClass,
      defaultClasses,
      components,
      available,
      isLabelComponent,
      tab$,
      select,
      activate,
      deactivate,
      on,
      off,
      fire,
    }
  },
}