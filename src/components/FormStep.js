import { toRefs, ref, computed, onMounted, nextTick, watch, onBeforeMount, onBeforeUnmount, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useConditions from './../composables/useConditions'
import useLabel from './../composables/useLabel'
import useEvents from './../composables/useEvents'
import { mergeComponentClasses } from './../utils/mergeClasses'
import asyncForEach from './../utils/asyncForEach'
import normalize from './../utils/normalize'

export default {
  name: 'FormStep',
  emits: ['select', 'active', 'inactive', 'enable', 'disable', 'complete'],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },

    label: {
      type: [String, Object, Function],
      required: false,
      default: null
    },

    labels: {
      type: [Object],
      required: false,
      default: () => ({})
    },

    buttons: {
      type: [Object],
      required: false,
      default: () => ({})
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

    stepClass: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },

    onActive: {
      type: [Function],
      required: false,
      default: null,
    },

    onInactive: {
      type: [Function],
      required: false,
      default: null,
    },

    onDisable: {
      type: [Function],
      required: false,
      default: null,
    },

    onEnable: {
      type: [Function],
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
      stepClass,
    } = toRefs(props)
    const { classKeys } = toRefs(context.data)
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes:
      baseClasses,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context)

    const {
      available,
    } = useConditions(props, context, { form$ })

    const {
      isLabelComponent,
      label: stepLabel,
    } = useLabel(props, context, { component$: form$, labelDefinition: label })

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: [
        'active', 'inactive', 'complete', 'enable', 'disable'
      ]
    })

    // ================ DATA ================

    /**
     * Determines whether the step is active.
     * 
     * @type {boolean}
     * @default false
     */
    const active = ref(false)

    /**
     * Determines whether the step is disabled.
     * 
     * @type {boolean}
     * @default true
     */
    const disabled = ref(true)

    /**
     * Determines whether the step is completed.
     * 
     * @type {boolean}
     * @default false
     */
    const completed = ref(false)

    // ============== COMPUTED ==============
    
    const steps$ = computed(() => {
      return form$.value.steps$
    })
    
    const elements$ = computed(() => {
      return form$.value.elements$
    })

    const index = computed(() => {
      return Object.keys(steps$.value.steps$).indexOf(name.value)
    })

    /**
      * Returns the components of elements within the step.
      * 
      * @type {object}
      */
    const children$ = computed(() => {
      return _.filter(elements$.value, (element$, key) => {
        return elements.value.indexOf(key) !== -1
      })
    })

    /**
     * Determines whether the step is visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return available.value
    })

    /**
      * Determines whether the step has any invalid elements.
      * 
      * @type {boolean}
      */
    const invalid = computed(() => {
      return _.some(children$.value, { available: true, invalid: true })   
    })

    /**
      * Determines whether the step has any pending elements.
      * 
      * @type {boolean}
      */
    const pending = computed(() => {
      return _.some(children$.value, { available: true, pending: true })   
    })

    /**
     * Class of step.
     * 
     * @type {string|array|object}
     */
    const class_ = computed(() => {
      return stepClass.value || null
    })
    
    /**
     * 
     * 
     * @private
     */
    const classes = computed(() => {
      let classList = baseClasses.value

      classList = mergeComponentClasses(classList, {
        [classKeys.value.state]: {
          [classList.active]: active.value,
          [classList.inactive]: !active.value,
          [classList.disabled]: disabled.value,
          [classList.enabled]: !disabled.value,
          [classList.completed]: completed.value,
          [classList.incompleted]: !completed.value,
          [classList.valid]: !invalid.value,
          [classList.invalid]: invalid.value,
          [classList.pending]: pending.value,
        }
      })

      // Add steps's class to main class
      if (class_.value !== null) {
        classList = mergeComponentClasses(classList, {
          [mainClass.value]: class_.value
        })
      }

      return classList
    })

    /**
     * Base label of step.
     * 
     * @private
     * @type {string}
     */
    const baseLabel = computed(() => {
      return label.value
    })

    /**
      * Determines whether the step has any debouncing elements.
      * 
      * @type {boolean}
      */
    const debouncing = computed(() => {
      return _.some(children$.value, { available: true, debouncing: true })   
    })

    /**
      * Determines whether all the elements in the step has been validated.
      * 
      * @type {boolean}
      */
    const validated = computed(() => {
      return !_.some(children$.value, { available: true, validated: false })
    })

    /**
      * Determines whether the step has any busy elements.
      * 
      * @type {boolean}
      */
    const busy = computed(() => {
      return pending.value || debouncing.value
    })

    /**
      * Determines whether the step is done (complete, validated has no invalid or pending elements).
      * 
      * @type {boolean}
      */
    const done = computed(() => {
      return completed.value
        && validated.value
        && !invalid.value
        && !pending.value
    })

    /**
     * 
     * 
     * @private
     */
    const step$ = computed(() => {
      return form$.value.steps$.steps$[name.value]
    })

    // =============== METHODS ==============


    /**
     * Validate the elements within the step.
     *
     * @public
     * @returns {void}
     */
    const validate = async () => {
      // only skip validation if the elements
      // are validated and none is invalid and
      // elements get revalidated on change
      if (validated.value && !invalid.value && form$.value.shouldValidateOnChange) {
        return 
      }

      await asyncForEach(children$.value, async (element$) => {
        if ((!element$.validated || element$.invalid || !form$.value.shouldValidateOnChange) && element$.available) {
          await element$.validate()
        }
      })
    }

    /**
     * Activates the step.
     *
     * @public
     * @returns {void}
     */
    const activate = () => {
      if (active.value) {
        return
      }

      active.value = true

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

      fire('inactive')
    }

    /**
     * Enables the step.
     *
     * @public
     * @returns {void}
     */
    const enable = () => {
      if (!disabled.value) {
        return
      }

      disabled.value = false

      fire('enable')
    }

    /**
     * Disables the step.
     *
     * @public
     * @returns {void}
     */
    const disable = () => {
      if (disabled.value) {
        return
      }
      
      disabled.value = true

      fire('disable')
    }

    /**
     * Completes the step.
     *
     * @public
     * @returns {void}
     */
    const complete = () => {
      if (completed.value) {
        return
      }

      completed.value = true

      fire('complete')
    }

    /**
     * Uncompletes the step.
     *
     * @public
     * @returns {void}
     */
    const uncomplete = () => {
      completed.value = false
    }

    /**
     * Selects the step to become the active step.
     *
     * @public
     * @returns {void}
     */
    const select = () => {
      if (disabled.value) {
        return
      }

      steps$.value.select(step$.value)

      _.each(children$.value, (element$) => {
        element$.activate()
      })

      activate()
    }

    /**
      * Apply conditions of the step to the elements within.
      * 
      * @private
      * @returns {void}
      */
    const forwardConditions = () => {
      if (conditions.value.length == 0) {
        return
      }

      _.each(children$.value, (element$) => {
        _.each(conditions.value, (condition) => {
          element$.conditions.push(condition)
        })
      })
    }

    // no export
    /**
     * 
     * 
     * @private
     */
    const assignToParent = ($parent, assignToParent) => {
      if ($parent.steps$Array) {
        $parent.steps$Array.push($this)
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
      if ($parent.steps$Array) {
        $parent.steps$Array.splice($parent.steps$Array.map(t$=>normalize(t$.name)).indexOf(normalize(name.value)), 1)
      }
      else {
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== WATCHERS ==============

    watch(visible, (val) => {
      // if a revealed step is earlier than the
      // current step, it should be enabled
      if (val && index.value < form$.value.steps$.current$.index) {
        enable()
      }
    })

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
      // which is later than the steps mount
      nextTick(() => {
        forwardConditions()
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
      steps$,
      elements$,
      active,
      disabled,
      completed,
      events,
      listeners,
      children$,
      visible,
      invalid,
      pending,
      classes,
      mainClass,
      defaultClasses,
      classKeys,
      components,
      available,
      baseLabel,
      debouncing,
      validated,
      busy,
      done,
      step$,
      isLabelComponent,
      stepLabel,
      index,
      validate,
      activate,
      deactivate,
      enable,
      disable,
      complete,
      uncomplete,
      select,
      forwardConditions,
      on,
      off,
      fire,
    }
  },
}