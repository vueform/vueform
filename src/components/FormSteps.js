import some from 'lodash-es/some'
import each from 'lodash-es/each'
import find from 'lodash-es/find'
import findLast from 'lodash-es/findLast'
import difference from 'lodash-es/difference'
import keys from 'lodash-es/keys'
import { ref, computed, provide, nextTick, watch, onMounted, onBeforeMount, onBeforeUnmount, getCurrentInstance } from 'vue'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormSteps',
  emits: ['select', 'next', 'previous', 'finish'],
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {
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
     * The child [`FormStep`](form-step) components.
     *
     * @type {array}
     * @default []
     */
    const steps$Array = ref([])

    /**
     * Helper to store a watcher.
     *
     * @type {object}
     * @default null
     */
    const unwatchInvalid = ref(null)

    /**
     * Helper prop used for checking if the component exists.
     *
     * @type {boolean}
     * @private
     */
    const exists = ref(true)

    // ============== COMPUTED ==============

    /**
     * The object containing steps defined in [`Vueform`](vueform#option-steps).
     *
     * @type {object}
     */
    const steps = computed(() => {
      return form$.value.options.steps
    })

    /**
     * The form elements' components.
     *
     * @type {object}
     */
    const elements$ = computed(() => {
      return form$.value.elements$
    })

    /**
     * Whether there are any steps in [`pending`](form-step#property-pending) state.
     *
     * @type {boolean}
     */
    const pending = computed(() => {
      return some(visible$.value, { pending: true })
    })

    /**
     * Whether there are any steps in [`debouncing`](form-step#property-debouncing) state.
     *
     * @type {boolean}
     */
    const debouncing = computed(() => {
      return some(visible$.value, { debouncing: true })
    })

    /**
     * Whether there are any steps in [`invalid`](form-step#property-invalid) state.
     *
     * @type {boolean}
     */
    const invalid = computed(() => {
      return some(visible$.value, { invalid: true })
    })

    /**
     * Whether all the steps are [`done`](form-step#property-done).
     *
     * @type {boolean}
     */
    const done = computed(() => {
      return !some(visible$.value, { done: false })
    })

    /**
     * Whether there are any steps in [`busys`](form-step#property-busys) state.
     *
     * @type {boolean}
     */
    const busy = computed(() => {
      return pending.value || debouncing.value
    })

    /**
     * The child [`FormStep`](form-step) components with indexed keys.
     *
     * @type {object}
     */
    const steps$ = computed(() => {
      let steps$ = {}

      each(steps$Array.value, (step$) => {
        steps$[step$.name] = step$
      })

      return steps$
    })

    /**
     * All the visible [`FormStep`](form-step) components.
     *
     * @type {object}
     */
    const visible$ = computed(() => {
      var stepList$ = {}

      each(steps$.value, (step$) => {
        if (step$.visible) {
          stepList$[step$.name] = step$
        }
      })

      return stepList$
    })

    /**
     * The first visible [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const first$ = computed(() => {
      return find(visible$.value, (step) => {
        return step.visible
      })
    })

    /**
     * The last visible [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const last$ = computed(() => {
      return Object.values(visible$.value).pop()
    })

    /**
     * The current [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const current$ = computed(() => {
      var current = find(steps$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * The next visible [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const next$ = computed(() => {
      return find(visible$.value, (step) => {
        return step.index > current$.value.index && step.visible
      })
    })

    /**
     * The previous visible [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const previous$ = computed(() => {
      return findLast(visible$.value, (step) => {
        return step.index < current$.value.index && step.visible
      })
    })

    /**
     * The first invalid & visible [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const firstInvalid$ = computed(() => {
      return find(visible$.value, { invalid: true })
    })

    /**
     * The first visible [`FormStep`](form-step) component which is not done yet.
     *
     * @type {FormStep|undefined}
     */
    const firstNonDone$ = computed(() => {
      return find(visible$.value, { done: false })
    })

    /**
     * The last enabled & visible [`FormStep`](form-step) component.
     *
     * @type {FormStep|undefined}
     */
    const lastEnabled$ = computed(() => {
      return findLast(visible$.value, { isDisabled: false })
    })

    /**
     * Whether is at the last step.
     *
     * @type {boolean}
     */
    const isAtLastStep = computed(() => {
      const last = findLast(visible$.value, { visible: true })
      
      // @todo:adam !current$.value will never be null or undefined, hardcoded {}
      /* istanbul ignore next: !last not worth the effort */
      if (!current$.value || !last) {
        return false
      }
      
      return last.index === current$.value.index
    })

    /**
     * Whether is at the first step.
     *
     * @type {boolean}
     */
    const isAtFirstStep = computed(() => {
      return current$.value.index === 0
    })

    // =============== METHODS ==============


    /**
     * Go to a step and enable it. Optionally enable all steps up to it.
     *
     * @param {string} name* name of step to go to
     * @param {boolean} enableUntil whether steps should be enabled up to the selected step (default: `false`)
     * @returns {void}
     */
    const goTo = (name, enableUntil = false) => {
      var step = visible$.value[name]
      
      step.enable()
      step.select()

      if (enableUntil) {
        nextTick(() => {
          enableUntilLastEnabled()
        })
      }
    }

    /**
     * Move to next step and enable it.
     *
     * @returns {void}
     */
    const next = () => {
      fire('next', next$.value)

      next$.value.enable()
      next$.value.select()
    }

    /**
     * Move to previous step.
     *
     * @returns {void}
     */
    const previous = () => {
      fire('previous', previous$.value)

      previous$.value.select()
    }

    /**
     * Mark each [`FormStep`](form-step) as complete.
     *
     * @returns {void}
     */
    const complete = () => {
      each(steps$.value, (step$) => {
        step$.complete()
      })
    }

    /**
     * Returns a specific [`FormStep`](form-step) component by index.
     *
     * @param {string} name* name of the step
     * @returns {FormStep|undefined}
     */
    const step$ = (name) => {
      return find(visible$.value, { name: name })
    }

    /**
     * Jump back to first visible step and disable all others.
     *
     * @returns {void}
     */
    const reset = () => {
      each(steps$.value, (step$) => {
        step$.uncomplete()
        step$.disable()
      })

      first$.value.enable()
      first$.value.select()
    }

    /**
     * Enables all steps.
     *
     * @returns {void}
     */
    const enableAllSteps = () => {
      each(steps$.value, (step$) => {
        step$.enable()
      })
    }

    /**
     * Invokes the form's `submit` event. If the form has any validation errors it will jump to the first step with error.
     *
     * @returns {Promise}
     */
    const submit = async () => {
      // Replaced with next because Vue didn't handle component's submit event in FFX
      // let form = form$.value.$el.nodeName === 'FORM' ? form$.value.$el : form$.value.$el.querySelector('form')
      // form.dispatchEvent(new Event('submit'))

      await form$.value.submit()

      if (invalid.value) {
        firstInvalid$.value.select()
        return
      }

      //@todo:adam it should not be necessary anymore since submit is async
      /* istanbul ignore next */
      unwatchInvalid.value = watch(invalid, (isInvalid) => {
        if (isInvalid) {
          firstInvalid$.value.select()
        }

        unwatchInvalid.value()
      })
    }

    /**
     * Select a step.
     *
     * @param {FormStep} step$* the [`FormStep`](form-step) component to select
     * @returns {void}
     * @private
     */
    const select = (step$) => {
      let curr$ = current$.value

      each(elements$.value, (element$) => {
        element$.deactivate()
      })

      each(steps$.value, (step$) => {
        step$.deactivate()
      })

      fire('select', step$, curr$)
    }

    /**
     * Enable steps until a certain index.
     *
     * @param {number} index* index of the step
     * @returns {void}
     */
    const enableUntil = (index) => {
      each(steps$.value, (step$) => {
        /* istanbul ignore else */
        if (step$.index <= index && step$.visible) {
          step$.enable()
        }
      })
    }

    /**
     * Enable all steps up to the current step.
     *
     * @returns {void}
     */
    const enableUntilCurrent = () => {
      enableUntil(current$.value.index)
    }

    /**
     * Enable all steps up to the last enabled.
     *
     * @returns {void}
     */
    const enableUntilLastEnabled = () => {
      /* istanbul ignore next: not reproducible only for Vue 2 Cli compatibility */
      if (!lastEnabled$.value && !first$.value) {
        return
      }
      
      enableUntil(lastEnabled$.value !== undefined ? lastEnabled$.value.index : first$.value.index)
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
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', $this)
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
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', null)
      }
      else {
        /* @todo:adam test later */
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== PROVIDE ===============

    provide('View', View)

    // ============== WATCHERS ==============
    
    /* istanbul ignore next: can not reproduce */
    watch(elements$, (newValue, oldValue) => {
      let newElements$ = difference(keys(newValue), keys(oldValue))
      
      each(newElements$, (newElement$) => {
        elements$.value[newElement$].deactivate()
      })
    }, { deep: false, lazy: true })

    watch(steps, () => {
      nextTick(() => {
        /* istanbul ignore next: nothing happens */
        if (lastEnabled$.value === undefined) {
          // first$.value.enable()
        }

        if (current$.value.index === undefined && first$.value) {
          first$.value.select()
        }
      })
    }, { deep: true, lazy: true })

    // Resort steps$Array when steps
    // order changes or a tab is removed
    watch(steps, (newValue) => {
      let newSteps$Array = []

      each(newValue, (t, name) => {
        newSteps$Array.push(steps$Array.value[steps$Array.value.map(t$=>normalize(t$.name)).indexOf(normalize(name))])
      })

      steps$Array.value = newSteps$Array
    }, { flush: 'post' })

    // =============== HOOKS ================
    
    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent)
    })

    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent)
    })

    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the steps mount
      nextTick(() => {
        if (current$.value === undefined || current$.value.index === undefined) {
          first$.value.enable()
          first$.value.select()
        }
        
        enableUntilCurrent()
        // if new steps are shown because of
        // changing conditions the ones before
        // the last active should be enabled
        watch(visible$, () => {
          enableUntilLastEnabled()
        }, { flush: 'post' })
      })
    })

    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      steps,
      elements$,
      steps$Array,
      events,
      listeners,
      exists,
      classes,
      Templates,
      template,
      steps$,
      pending,
      debouncing,
      invalid,
      done,
      busy,
      visible$,
      first$,
      last$,
      current$,
      next$,
      previous$,
      firstInvalid$,
      firstNonDone$,
      lastEnabled$,
      isAtLastStep,
      isAtFirstStep,
      goTo,
      next,
      previous,
      complete,
      step$,
      reset,
      enableAllSteps,
      submit,
      select,
      enableUntil,
      enableUntilCurrent,
      enableUntilLastEnabled,
      on,
      off,
      fire,
    }
  },
}