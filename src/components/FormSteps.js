import _ from 'lodash'
import { ref, computed, toRefs, nextTick, watch, onMounted, onBeforeMount, onBeforeUnmount, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormSteps',
  emits: ['select', 'next', 'previous', 'finish'],
  slots: ['default'],
  setup(props, context)
  { 
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context)

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: ['select', 'next', 'previous', 'finish']
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
     */
    const exists = ref(true)

    // ============== COMPUTED ==============

    /**
     * The form steps definition.
     * 
     * @type {object}
     */
    const steps = computed(() => {
      return form$.value.options.steps
    })

    /**
     * The components of highest level form elements.
     * 
     * @type {object}
     */
    const elements$ = computed(() => {
      return form$.value.elements$
    })

    /**
     * Whether there are any steps in `pending` state.
     * 
     * @type {boolean}
     */
    const pending = computed(() => {
      return _.some(visible$.value, { pending: true })
    })

    /**
     * Whether there are any steps in `debouncing` state.
     * 
     * @type {boolean}
     */
    const debouncing = computed(() => {
      return _.some(visible$.value, { debouncing: true })
    })

    /**
     * Whether there are any steps in `invalid` state.
     * 
     * @type {boolean}
     */
    const invalid = computed(() => {
      return _.some(visible$.value, { invalid: true })
    })

    /**
     * Whether all the steps are `done`.
     * 
     * @type {boolean}
     */
    const done = computed(() => {
      return !_.some(visible$.value, { done: false })
    })

    /**
     * Whether there are any steps in `busy` state.
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

      _.each(steps$Array.value, (step$) => {
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

      _.each(steps$.value, (step$) => {
        if (step$.visible) {
          stepList$[step$.name] = step$
        }
      })

      return stepList$
    })

    /**
     * The first visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    const first$ = computed(() => {
      return _.find(visible$.value, (step) => {
        return step.visible
      })
    })

    /**
     * The current [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    const current$ = computed(() => {
      var current = _.find(steps$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * The next visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    const next$ = computed(() => {
      return _.find(visible$.value, (step) => {
        return step.index > current$.value.index && step.visible
      })
    })

    /**
     * The previous visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    const previous$ = computed(() => {
      return _.findLast(visible$.value, (step) => {
        return step.index < current$.value.index && step.visible
      })
    })

    /**
     * The first invalid & visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    const firstInvalid$ = computed(() => {
      return _.find(visible$.value, { invalid: true })
    })

    /**
     * The first visible [`FormStep`](form-step) component which is not done yet.
     * 
     * @type {component}
     */
    const firstNonDone$ = computed(() => {
      return _.find(visible$.value, { done: false })
    })

    /**
     * The last enabled & visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    const lastEnabled$ = computed(() => {
      return _.findLast(visible$.value, { disabled: false })
    })

    /**
     * Whether the steps is at the last step.
     * 
     * @type {boolean}
     */
    const isAtLastStep = computed(() => {
      const last = _.findLast(visible$.value, { visible: true })

      if (!current$.value || !last) {
        return false
      }

      return last.index === current$.value.index
    })

    /**
     * Whether the steps is at the first step.
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
     * @param {object} index* index of step to go to
     * @param {boolean} enableUntil whether steps should be enabled up to the selected step (default: false)
     * @returns {void}
     */
    const goTo = (index, enableUntil = false) => {
      var step = visible$.value[index]
      
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
      _.each(steps$.value, (step$) => {
        step$.complete()
      })
    }

    /**
     * Returns a specific [`FormStep`](form-step) by index.
     *
     * @param {object} index* index of the step
     * @returns {component}
     */
    const step$ = (index) => {
      return _.find(visible$.value, { name: index })
    }

    /**
     * Jump back to first visible step and disable all others.
     *
     * @returns {void}
     */
    const reset = () => {
      _.each(steps$.value, (step$) => {
        step$.uncomplete()
        step$.disable()
      })

      first$.value.enable()
      first$.value.select()
    }

    /**
     * Enable all steps.
     *
     * @returns {void}
     */
    const enableAllSteps = () => {
      _.each(steps$.value, (step$) => {
        step$.enable()
      })
    }

    /**
     * Invokes the form's `submit` event. If the form has any validation errors it will jump to the first step with error.
     *
     * @returns {void}
     */
    const submit = () => {
      // manually triggering form's submit event
      let form = form$.value.$el.nodeName === 'FORM' ? form$.value.$el : form$.value.$el.querySelector('form')
      form.dispatchEvent(new Event('submit'))

      if (invalid.value) {
        firstInvalid$.value.select()
        return
      }

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
     * @param {component} step$ the [`FormStep`](form-step) component to select
     * @returns {void}
     * @private
     */
    const select = (step$) => {
      let curr$ = current$.value

      _.each(elements$.value, (element$) => {
        element$.deactivate()
      })

      _.each(steps$.value, (step$) => {
        step$.deactivate()
      })

      fire('select', step$, curr$)
    }

    /**
     * Enable steps until a certain index.
     * 
     * @param {integer} index index of the step
     * @returns {void}
     */
    const enableUntil = (index) => {
      _.each(steps$.value, (step$) => {
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
      if (!lastEnabled$.value && !first$.value) {
        return
      }

      enableUntil(lastEnabled$.value !== undefined ? lastEnabled$.value.index : first$.value.index)
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
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    const removeFromParent = ($parent, removeFromParent) => {
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', null)
      }
      else {
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== WATCHERS ==============

    watch(elements$, (newValue, oldValue) => {
      let newElements$ = _.difference(_.keys(newValue), _.keys(oldValue))

      _.each(newElements$, (newElement$) => {
        elements$.value[newElement$].deactivate()
      })
    }, { deep: false, lazy: true })

    watch(steps, () => {
      nextTick(() => {
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

      _.each(newValue, (t, name) => {
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
      theme,
      steps,
      elements$,
      steps$Array,
      events,
      listeners,
      exists,
      classes,
      mainClass,
      defaultClasses,
      components,
      steps$,
      pending,
      debouncing,
      invalid,
      done,
      busy,
      visible$,
      first$,
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