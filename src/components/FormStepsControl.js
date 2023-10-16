import { computed, toRefs, nextTick } from 'vue'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormStepsControl',
  slots: ['default'],
  props: {
    type: {
      type: [String],
      required: true
    },
    labels: {
      type: [Boolean],
      required: false,
      default: true,
      private: true,
    },
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {
    const {
      type,
      labels,
    } = toRefs(props)

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

    // ============== COMPUTED ==============

    /**
     * The label definition of the component.
     *
     * @type {string|function|Component}
     * @private
     */
    const baseLabel = computed(() => {
      /* istanbul ignore next: can not tell if returned  */
      if (!labels.value) {
        return null
      }
      
      let stepLabels = current$ && current$.value ? current$.value.labels : /* istanbul ignore next: failsafe only */ null
      
      switch (type.value) {
        case 'previous':
          return stepLabels && stepLabels.previous ? stepLabels.previous : form$.value.translations.vueform.steps.previous
        case 'next':
          return stepLabels && stepLabels.next ? stepLabels.next : form$.value.translations.vueform.steps.next
        case 'finish':
          return stepLabels && stepLabels.finish ? stepLabels.finish : (
            stepLabels && stepLabels.next ? stepLabels.next : form$.value.translations.vueform.steps.finish
          )
      }
    })

    const {
      isLabelComponent,
      label,
    } = useLabel(props, context, { component$: form$, labelDefinition: baseLabel })

    // ============== COMPUTED ==============

    /**
     * The [`FormSteps`](form-steps) component.
     *
     * @type {FormSteps}
     * @private
     */
    const steps$ = computed(() => {
      return form$.value.steps$
    })

    /**
     * The currently active [`FormStep`](form-step) component.
     *
     * @type {FormStep}
     * @private
     */
    const current$ = computed(() => {
      return steps$.value ? steps$.value.current$ : /* istanbul ignore next: failsafe only */ undefined
    })

    /**
     * Whether the control should be visible.
     *
     * @type {boolean}
     */
    const visible = computed(() => {
      let buttons = current$ && current$.value ? current$.value.buttons : /* istanbul ignore next: failsafe only */ null

      switch (type.value) {
        case 'previous':
          return !buttons ? true : buttons.previous !== false

        case 'next':
          return steps$.value && !steps$.value.isAtLastStep && (!buttons || buttons.next !== false)

        case 'finish':
          return steps$.value && steps$.value.isAtLastStep
      }
    })

    /**
     * Whether the control should be disabled.
     *
     * @type {boolean}
     */
    const isDisabled = computed(() => {
      switch (type.value) {
        case 'previous':
          return steps$.value && steps$.value.isAtFirstStep

        case 'next':
          return current$.value !== undefined && current$.value.index !== undefined &&
            // only disable next because of invalidity
            // if element validations are triggered on
            // change, otherwise it might occur that the
            // step has invalid fields, which values have
            // changed to valid, but still marked as invalid
            (
              (current$.value.invalid && form$.value.shouldValidateOnChange) ||
              current$.value.busy || form$.value.isLoading
            )

        case 'finish':
          // only disable finish because of invalidity
          // if element validations are triggered on
          // change, otherwise it might occur that the
          // form has invalid fields, which values have
          // changed to valid, but still marked as invalid
          return (steps$.value.invalid && form$.value.shouldValidateOnChange) ||
                steps$.value.busy || form$.value.submitting || form$.value.isDisabled || form$.value.isLoading
      }
    })

    /**
     * Whether the control is in loading state (except for previous).
     *
     * @type {boolean}
     */
    const isLoading = computed(() => {
      return type.value === 'previous' ? false : (form$.value.isLoading || form$.value.submitting)
    })

    // =============== METHODS ==============

    /**
     * Go to the previous form step.
     *
     * @returns {void}
     */
    const previous = () => {
      steps$.value.previous()
    }

    /**
     * Complete the current step and go to the next one (async). If the form's [`validateOn`](vueform#option-validate-on) prop or `config.validateOn` contains `'step'` also validates the elements within the step before moving forward (and stay if there's any error).
     *
     * @returns {Promise}
     */
    const next = async () => {
      /* istanbul ignore else */
      if (form$.value.shouldValidateOnStep) {
        await current$.value.validate()
      }
      
      if (current$.value.invalid) {
        return
      }

      current$.value.complete()
      steps$.value.next()
    }

    /**
     * Complete the final step and submit the form (async).
     *
     * @returns {Promise}
     */
    const finish = async () => {
      steps$.value.fire('finish')

      steps$.value.complete()
      steps$.value.submit()
    }

    /**
     * Handles `click` event.
     *
     * @returns {void}
     * @param {Event} e* event object
     * @private
     */
    const handleClick = (e) => {
      switch (type.value) {
        case 'previous':
          previous()
          break
        case 'next':
          next()

          if (e.key === 'Enter' || e.key === ' ') {
            nextTick(() => {
              nextTick(() => {
                let firstEl$ = current$?.value.children$?.find(el$ => el$.name === current$?.value.elements?.[0])

                if (!firstEl$) {
                  return
                }

                firstEl$.focus()
              })
            })
          }
          break
        case 'finish':
          finish()
          break
      }
    }

    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      steps$,
      classes,
      Templates,
      template,
      visible,
      isDisabled,
      isLoading,
      current$,
      label,
      isLabelComponent,
      previous,
      next,
      finish,
      handleClick,
    }
  },
}