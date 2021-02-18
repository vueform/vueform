import { ref, computed, toRefs, nextTick, watch, onMounted, onBeforeMount, onBeforeUnmount, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormWizard',
  emits: ['submit'],
  props: {
    /**
     * Steps definition.
     */
    steps: {
      type: Object,
      required: false
    },
  },
  setup(props, context)
  { 
    const {
      steps
    } = toRefs(props)
    
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: ['next', 'previous', 'finish', 'select']
    })

    // ================ DATA ================

    /**
     * 
     * 
     * @private
     */
    const steps$Array = ref([])

    // no export
    /**
     * 
     * 
     * @private
     */
    const unwatchInvalid = ref(null)

    /**
     * 
     * 
     * @private
     */
    const exists = ref(true)

    // ============== COMPUTED ==============

    const elements$ = computed(() => {
      return form$.value.elements$
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
     * Object of wizardStep$ components.
     * 
     * @type {object}
     * @default {}
     */
    const steps$ = computed(() => {
      let steps$ = {}

      _.each(steps$Array.value, (step$) => {
        steps$[step$.name] = step$
      })

      return steps$
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
     * @type {component<FormWizardStep>}
     */
    const first$ = computed(() => {
      return _.find(visible$.value, (step) => {
        return step.visible
      })
    })

    /**
     * Returns the current [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {component<FormWizardStep>}
     */
    const current$ = computed(() => {
      var current = _.find(steps$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * Returns the next [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {component<FormWizardStep>}
     */
    const next$ = computed(() => {
      return _.find(visible$.value, (step) => {
        return step.index > current$.value.index && step.visible
      })
    })

    /**
     * Returns the previous [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {component<FormWizardStep>}
     */
    const previous$ = computed(() => {
      return _.findLast(visible$.value, (step) => {
        return step.index < current$.value.index && step.visible
      })
    })

    /**
     * Returns the first invalid [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {component<FormWizardStep>}
     */
    const firstInvalid$ = computed(() => {
      return _.find(visible$.value, { invalid: true })
    })

    /**
     * Returns the first [wizardStep$](reference/frontend-wizard-step) component which is not done yet.
     * 
     * @type {component<FormWizardStep>}
     */
    const firstNonDone$ = computed(() => {
      return _.find(visible$.value, { done: false })
    })

    /**
     * Returns the last enabled [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {component<FormWizardStep>}
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
      return _.findLast(visible$.value, { visible: true }).index === current$.value.index
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
        enableUntil = false
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
      fire('next', next$.value)

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
      fire('previous', previous$.value)

      previous$.value.select()
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
     * @returns {component<FormWizardStep>}
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

      fire('select', step$, curr$)
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
      enableUntil(lastEnabled$.value !== undefined ? lastEnabled$.value.index : first$.value.index)
    }

    // no export
    /**
     * 
     * 
     * @private
     */
    const assignToParent = ($parent, assignToParent) => {
      if ($parent.wizard$ !== undefined) {
        form$.value.$set($parent, 'wizard$', $this)
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
      if ($parent.wizard$ !== undefined) {
        form$.value.$set($parent, 'wizard$', null)
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
          first$.value.enable()
        }

        if (current$.value.index === undefined) {
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
      // which is later than the wizard mount
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
      elements$,
      steps$Array,
      events,
      listeners,
      exists,
      classes,
      mainClass,
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