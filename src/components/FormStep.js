import filter from 'lodash/filter'
import some from 'lodash/some'
import each from 'lodash/each'
import { toRefs, ref, computed, onMounted, nextTick, watch, onBeforeMount, onBeforeUnmount, getCurrentInstance, markRaw } from 'vue'
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
      label: stepLabel_,
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
     * The label of the step.
     *
     * @type {string|Component}
     * @default null
     */
    const stepLabel = ref(stepLabel_.value && typeof stepLabel_.value === 'object' ? markRaw(stepLabel_.value) : stepLabel_.value)

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
     * The form elements' components.
     *
     * @type {object}
     */
    const elements$ = computed(() => {
      return form$.value.elements$
    })
    
    /**
     * The parent [`FormSteps`](form-steps) component.
     *
     * @type {FormSteps}
     */
    const steps$ = computed(() => {
      return form$.value.steps$ || /* istanbul ignore next: failsafe only, step can not exist by itself */ {}
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
      return Object.keys(steps$?.value?.steps$||/* istanbul ignore next: failsafe only, step can not exist by itself */{}).indexOf(name.value)
    })

    /**
     * Whether the step is the first.
     *
     * @type {boolean}
     */
    const isFirst = computed(() => {
      return index.value === 0
    })

    /**
     * Whether the step is the first.
     *
     * @type {boolean}
     */
    const isLast = computed(() => {
      return steps$.value.last$.name === name.value
    })

    /**
     * The elements' components in the step.
     *
     * @type {object}
     */
    const children$ = computed(() => {
      return filter(elements$.value, (element$, key) => {
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
      return some(children$.value, { available: true, invalid: true })
    })

    /**
      * Whether the step has any pending elements.
      *
      * @type {boolean}
      */
    const pending = computed(() => {
      return some(children$.value, { available: true, pending: true })
    })

    /**
      * Whether the step has any debouncing elements.
      *
      * @type {boolean}
      */
    const debouncing = computed(() => {
      return some(children$.value, { available: true, debouncing: true })
    })

    /**
      * Whether all the elements in the step were already validated at least once.
      *
      * @type {boolean}
      */
    const validated = computed(() => {
      return !some(children$.value, { available: true, validated: false })
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
     * @type {FormStep}
     */
    const step$ = computed(() => {
      return form$.value.steps$?.steps$[name.value]
    })

    // =============== METHODS ==============


    /**
     * Validate all elements within the step (async).
     *
     * @returns {Promise}
     */
    const validate = async () => {
      // only skip validation if the elements
      // are validated and none is invalid and
      // elements get revalidated on change
      if (validated.value && !invalid.value && form$.value.shouldValidateOnChange) {
        return
      }

      await asyncForEach(children$.value, async (element$) => {
        /* istanbul ignore else */
        if ((!element$.validated || element$.invalid || !form$.value.shouldValidateOnChange) && element$.available && !element$.isStatic) {
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
      if (isDisabled.value || !steps$.value?.select) {
        return
      }

      steps$.value?.select(step$.value)

      each(children$.value, (element$) => {
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
    const addChildConditions = () => {
      /* istanbul ignore else */
      if (conditionList.value.length == 0) {
        return
      }
      
      Object.values(children$.value).forEach((element$) => {
        element$.addConditions('step', conditionList.value)
      })
    }

    /**
      * Remove conditions of the elements of the step.
      *
      * @returns {void}
      * @private
      */
    const removeChildConditions = () => {
      Object.values(children$.value).forEach((element$) => {
        element$.removeConditions('step')
      })
    }

    /**
      * Resets conditions of the elements of the step.
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
    * @param {VNode} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    const removeFromParent = ($parent, removeFromParent) => {
      if ($parent.steps$Array) {
        $parent.steps$Array.splice($parent.steps$Array.map(t$=>normalize(t$.name)).indexOf(normalize(name.value)), 1)
      }
      else {
        /* @todo:adam test later */
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
      /* istanbul ignore else */
      if (!active.value) {
        return
      }
      
      each(children$.value, (element$) => {
        element$.activate()
      })
    }, { deep: false, lazy: true })

    watch(stepLabel_, () => {
      stepLabel.value = stepLabel_.value && typeof stepLabel_.value === 'object' ? markRaw(stepLabel_.value) : stepLabel_.value
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
      // which is later than the steps mount
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
      steps$,
      elements$,
      active,
      isDisabled,
      isFirst,
      isLast,
      completed,
      events,
      listeners,
      children$,
      visible,
      invalid,
      pending,
      classes,
      Templates,
      template,
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
      conditionList,
      validate,
      activate,
      deactivate,
      enable,
      disable,
      complete,
      uncomplete,
      select,
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