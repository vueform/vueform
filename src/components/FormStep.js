import _ from 'lodash'
import { toRefs, ref, computed, onMounted, nextTick, watch, onBeforeMount, onBeforeUnmount, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useConditions from './../composables/useConditions'
import useLabel from './../composables/useLabel'
import useEvents from './../composables/useEvents'
import asyncForEach from './../utils/asyncForEach'
import normalize from './../utils/normalize'

export default {
  name: 'FormStep',
  emits: ['activate', 'inactivate', 'enable', 'disable', 'complete'],
  slots: ['default'],
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

    addClass: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },

    onActive: {
      type: [Function],
      required: false,
      default: null,
      private: true,
    },

    onInactive: {
      type: [Function],
      required: false,
      default: null,
      private: true,
    },

    onDisable: {
      type: [Function],
      required: false,
      default: null,
      private: true,
    },

    onEnable: {
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
      conditions,
      addClass,
    } = toRefs(props)

    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context, {}, {
      addClasses: [
        ['container', 'container_active', computed(() => active.value)],
        ['container', 'container_inactive', computed(() => !active.value)],
        ['container', 'container_disabled', computed(() => isDisabled.value)],
        ['container', 'container_enabled', computed(() => !isDisabled.value)],
        ['container', 'container_completed', computed(() => completed.value)],
        ['container', 'container_incompleted', computed(() => !completed.value)],
        ['container', 'container_valid', computed(() => !invalid.value)],
        ['container', 'container_invalid', computed(() => invalid.value)],
        ['container', 'container_pending', computed(() => pending.value)],
        ['container', computed(() => addClass.value || null), ref(true)],
      ]
    })

    const {
      available,
    } = useConditions(props, context, { form$ })

    const {
      isLabelComponent,
      label: stepLabel_,
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
     * The label of the step.
     * 
     * @type {string|component}
     * @default null
     */
    const stepLabel = ref(stepLabel_.value)

    /**
     * Whether the step is active.
     * 
     * @type {boolean}
     * @default false
     */
    const active = ref(false)

    /**
     * Whether the step is disabled.
     * 
     * @type {boolean}
     * @default true
     */
    const isDisabled = ref(true)

    /**
     * Whether the step is completed.
     * 
     * @type {boolean}
     * @default false
     */
    const completed = ref(false)

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
     * The parent [`FormSteps`](form-steps) component.
     * 
     * @type {component}
     */
    const steps$ = computed(() => {
      return form$.value.steps$ || {}
    })

    /**
     * The label definition of the component.
     * 
     * @type {string}
     * @private
     */
    const baseLabel = computed(() => {
      return label.value
    })

    /**
     * Index of this step among the other steps which are not hidden by unmet conditions.
     * 
     * @type {number}
     */
    const index = computed(() => {
      if (!steps$.value || !steps$.value.steps$) {
        return undefined
      }

      return Object.keys(steps$.value.steps$).indexOf(name.value)
    })

    /**
     * The components of form elements within the step.
     * 
     * @type {object}
     */
    const children$ = computed(() => {
      return _.filter(elements$.value, (element$, key) => {
        return elements.value.indexOf(key) !== -1
      })
    })

    /**
     * Whether the step should be visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return available.value
    })

    /**
      * Whether the step has any invalid elements.
      * 
      * @type {boolean}
      */
    const invalid = computed(() => {
      return _.some(children$.value, { available: true, invalid: true })
    })

    /**
      * Whether the step has any pending elements.
      * 
      * @type {boolean}
      */
    const pending = computed(() => {
      return _.some(children$.value, { available: true, pending: true })   
    })

    /**
      * Whether the step has any debouncing elements.
      * 
      * @type {boolean}
      */
    const debouncing = computed(() => {
      return _.some(children$.value, { available: true, debouncing: true })   
    })

    /**
      * Whether all the elements in the step has been validated.
      * 
      * @type {boolean}
      */
    const validated = computed(() => {
      return !_.some(children$.value, { available: true, validated: false })
    })

    /**
      * Whether the step has any busy elements.
      * 
      * @type {boolean}
      */
    const busy = computed(() => {
      return pending.value || debouncing.value
    })

    /**
      * Whether the step is done (completed, validated has no invalid or pending elements).
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
     * The step's component.
     * 
     * @type {component}
     */
    const step$ = computed(() => {
      return form$.value.steps$.steps$[name.value]
    })

    // =============== METHODS ==============


    /**
     * Validate all elements within the step (async).
     *
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
     * Activate the step.
     *
     * @returns {void}
     */
    const activate = () => {
      if (active.value) {
        return
      }

      active.value = true

     fire('activate')
    }

    /**
     * Deactivate the step.
     *
     * @returns {void}
     */
    const deactivate = () => {
      if (!active.value) {
        return
      }

      active.value = false

      fire('inactivate')
    }

    /**
     * Enable the step.
     *
     * @returns {void}
     */
    const enable = () => {
      if (!isDisabled.value) {
        return
      }

      isDisabled.value = false

      fire('enable')
    }

    /**
     * Disable the step.
     *
     * @returns {void}
     */
    const disable = () => {
      if (isDisabled.value) {
        return
      }
      
      isDisabled.value = true

      fire('disable')
    }

    /**
     * Complete the step.
     *
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
     * Uncomplete the step.
     *
     * @returns {void}
     */
    const uncomplete = () => {
      completed.value = false
    }

    /**
     * Deactivate all other steps and set the current one as active.
     *
     * @returns {void}
     */
    const select = () => {
      if (isDisabled.value) {
        return
      }

      steps$.value.select(step$.value)

      _.each(children$.value, (element$) => {
        element$.activate()
      })

      activate()
    }

    /**
      * Apply conditions of the step to its elements.
      * 
      * @returns {void}
      * @private
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

    /**
     * Set the component to the parent as if `refs` were used.
     * 
     * @param {component} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
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

    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
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
      isDisabled,
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