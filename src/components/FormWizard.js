import { ref, computed, toRefs, nextTick, watch, onMounted } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'

export default {
  name: 'FormWizard',
  props: {
    /**
     * Steps definition.
     */
    steps: {
      type: Object,
      required: true
    },

    /**
     * Form element components.
     */
    elements$: {
      type: Object,
      required: true
    },
  },
  init(props, context)
  { 
    const { elements$, steps } = toRefs(props)

    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)
    const { events, listeners, on, off, fire, fireNext, firePrevious, fireFinish, fireSelect } = useEvents(props, context, { form$ }, {
      events: {
        next: [],
        previous: [],
        finish: [],
        select: [], // (step$, oldStep$)
      },
    })

    // // ================ DATA ================

    const wizardSteps$ = ref([])

    // ============== COMPUTED ==============

    /**
     * Object of wizardStep$ components.
     * 
     * @type {object}
     * @default {}
     */
    const steps$ = computed(() => {
      let steps$ = {}

      _.each(wizardSteps$.value, (step$) => {
        steps$[step$.name] = step$
      })

      return steps$
    })

    /**
     * Determines whether the wizard has any pending elements.
     * 
     * @type {boolean}
     */
    const pending = computed(() => {
      return _.some(visible$.value, { pending: true })
    })

    /**
     * Determines whether the wizard has any debouncing elements.
     * 
     * @type {boolean}
     */
    const debouncing = computed(() => {
      return _.some(visible$.value, { debouncing: true })
    })

    /**
     * Determines whether the wizard has any invalid elements.
     * 
     * @type {boolean}
     */
    const invalid = computed(() => {
      return _.some(visible$.value, { invalid: true })
    })

    /**
     * Determines whether all the steps are completetly filled out.
     * 
     * @type {boolean}
     */
    const done = computed(() => {
      return !_.some(visible$.value, { done: false })
    })

    /**
     * Determines whether the wizard has any pending or debouncing elements.
     * 
     * @type {boolean}
     */
    const busy = computed(() => {
      return pending.value || debouncing.value
    })

    /**
     * Returns the visible [wizardStep$](reference/frontend-wizard-step) components.
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
     * Returns the first [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    const first$ = computed(() => {
      return visible$.value[_.head(_.keys(visible$.value))]
    })

    /**
     * Returns the current [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    const current$ = computed(() => {
      var current = _.find(steps$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * Returns the next [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    const next$ = computed(() => {
      return visible$.value[_.keys(visible$.value)[current$.value.index + 1]]
    })

    /**
     * Returns the previous [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    const previous$ = computed(() => {
      return visible$.value[_.keys(visible$.value)[current$.value.index - 1]]
    })

    /**
     * Returns the first invalid [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    const firstInvalid$ = computed(() => {
      return _.find(visible$.value, { invalid: true })
    })

    /**
     * Returns the first [wizardStep$](reference/frontend-wizard-step) component which is not done yet.
     * 
     * @type {wizardStep$}
     */
    const firstNonDone$ = computed(() => {
      return _.find(visible$.value, { done: false })
    })

    /**
     * Returns the last enabled [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    const lastEnabled$ = computed(() => {
      return _.findLast(visible$.value, { disabled: false })
    })

    /**
     * Determines whether the wizard is at the last step.
     * 
     * @type {boolean}
     */
    const isAtLastStep = computed(() => {
      return _.size(visible$.value) === current$.value.index + 1
    })

    /**
     * Determines whether the wizard is at the first step.
     * 
     * @type {boolean}
     */
    const isAtFirstStep = computed(() => {
      return current$.value.index === 0
    })

    // =============== METHODS ==============


    /**
     * Moves to a step. If it is disabled, enables it.
     *
     * @public
     * @param {object} step key of step in [wizard](reference/frontend-form#prop-wizard)
     * @param {boolean} enableUntil whether steps should be enabled before destination step (default: false)
     * @returns {void}
     */
    const goTo = (step, enableUntil) => {
      if (enableUntil === undefined) {
        let enableUntil = false
      }

      var step = visible$.value[step]
      
      step.enable()
      step.select()

      if (enableUntil) {
        nextTick(() => {
          enableUntilLastEnabled()
        })
      }
    }

    /**
     * Moves to next step and enables it.
     *
     * @public
     * @returns {void}
     */
    const next = () => {
      fireNext(next$.value)

      next$.value.enable()
      next$.value.select()
    }

    /**
     * Moves to previous step.
     *
     * @public
     * @returns {void}
     */
    const previous = () => {
      firePrevious(previous$.value)

      previous$.value.select()
    }

    /**
     * Validates all elements and if everything is fine marks all steps as complete and initiates submission. If the form is invalid it will jump to the first step which has invalid elements.
     *
     * @public
     * @param {function} callback callback to call when the form is ready to submit
     * @returns {void}
     */
    const finish = (callback) => {
      if (pending.value) {
        return waitForAsync(callback)
      }

      if (invalid.value) {
        firstInvalid$.value.select()
        return
      }

      complete()

      callback()
    }

    /**
     * Marks each [wizardStep$](reference/frontend-wizard-step) as complete.
     *
     * @public
     * @returns {void}
     */
    const complete = () => {
      _.each(steps$.value, (step$) => {
        step$.complete()
      })
    }

    /**
     * Returns a specific [wizardStep$](reference/frontend-wizard-step).
     *
     * @public
     * @param {object} step key of step in [wizard](reference/frontend-form#prop-wizard)
     * @returns {wizardStep$}
     */
    const step$ = (step) => {
      return _.find(visible$.value, { name: step })
    }

    /**
     * Resets form and goes back to first step while disabling all others.
     *
     * @public
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
     * Enables all steps.
     *
     * @public
     * @returns {void}
     */
    const enableAllSteps = () => {
      _.each(steps$.value, (step$) => {
        step$.enable()
      })
    }

    /**
     * Emits submit event.
     *
     * @public
     * @returns {void}
     */
    const submit = () => {
      context.emit('submit')
    }

    /**
     * Triggered when a step is selected.
     *
     * @public
     * @param {object} step$ the selected step component
     * @event select
     */
    const select = (step$) => {
      let curr$ = current$.value

      _.each(elements$.value, (element$) => {
        element$.deactivate()
      })

      _.each(steps$.value, (step$) => {
        step$.deactivate()
      })

      fireSelect(step$, curr$)
    }

    /**
     * Enable steps until a certain index.
     * 
     * @private
     * @param {integer} index index of step
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
     * Enable steps until current step.
     * 
     * @private
     * @returns {void}
     */
    const enableUntilCurrent = () => {
      enableUntil(current$.value.index)
    }

    /**
     * Enable steps until last enabled.
     * 
     * @private
     * @returns {void}
     */
    const enableUntilLastEnabled = () => {
      enableUntil(lastEnabled$.value.index)
    }

    /**
     * Waits for all async processes to finish, then invokes a callback.
     * 
     * @private
     * @param {function} callback the function to invoke
     * @returns {void}
     */
    const waitForAsync = (callback) => {
      var unwatch = watch(busy, () => {
        unwatch()
        finish(callback)
      })
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
        if (_.isEmpty(lastEnabled$)) {
          first$.value.enable()
        }

        if (_.isEmpty(current$.value)) {
          first$.value.select()
        }
      })
    }, { deep: true, lazy: true })

    // =============== HOOKS ================

    onMounted(() => {
      if (_.isEmpty(steps.value)) {
        return
      }

      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the wizard mount
      nextTick(() => {
        if (_.isEmpty(current$.value)) {
          first$.value.enable()
          first$.value.select()
        }
        
        enableUntilCurrent()
        // if new steps are shown because of
        // changing conditions the ones before
        // the last active should be enabled
        watch(visible$, () => {
          enableUntilLastEnabled()
        })
      })
    })

    return {
      // Inject
      form$,
      theme,

      // Data
      wizardSteps$,
      events,
      listeners,

      // Computed
      classes,
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

      // Methods
      goTo,
      next,
      previous,
      finish,
      complete,
      step$,
      reset,
      enableAllSteps,
      submit,
      select,
      enableUntil,
      enableUntilCurrent,
      enableUntilLastEnabled,
      waitForAsync,
      on,
      off,
      fire,
      fireNext,
      firePrevious,
      fireFinish,
      fireSelect,
    }
  },
}