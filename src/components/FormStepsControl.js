import { computed, toRefs, ref } from 'composition-api'
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
      theme,
      classes,
      mainClass,
      templates,
      defaultClasses,
    } = useFormComponent(props, context, {}, {
      addClasses: [
        ['button', `button_${type.value}_enabled`, computed(() => !isDisabled.value)],
        ['button', `button_${type.value}_disabled`, computed(() => isDisabled.value)],
        ['button', `button_${type.value}_loading`, computed(() => isLoading.value)],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * The label definition of the component.
     * 
     * @type {string|function|component}
     * @private
     */
    const baseLabel = computed(() => {
      if (!labels.value) {
        return null
      }

      let stepLabels = current$ && current$.value ? current$.value.labels : null

      switch (type.value) {
        case 'previous':
          return stepLabels && stepLabels.previous ? stepLabels.previous : form$.value.__('vueform.steps.previous')
        case 'next':
          return stepLabels && stepLabels.next ? stepLabels.next : form$.value.__('vueform.steps.next')
        case 'finish':
          return stepLabels && stepLabels.finish ? stepLabels.finish : form$.value.__('vueform.steps.finish')
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
     * @private
     */
    const steps$ = computed(() => {
      return form$.value.steps$
    })

    /**
     * The currently active [`FormStep`](form-step) component.
     * 
     * @private
     */
    const current$ = computed(() => {
      return steps$.value ? steps$.value.current$ : undefined
    })

    /**
     * Whether the control should be visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      let buttons = current$ && current$.value ? current$.value.buttons : null

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
              current$.value.busy || form$.value.isDisabled || form$.value.isLoading
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
     * Whether the control should be in loading state (except for previous).
     * 
     * @type {boolean}
     */
    const isLoading = computed(() => {
      return type.value === 'previous' ? false : form$.value.isLoading
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
     * Complete the current step and go to the next one (async). If the form's `:validateOn` prop or `config.validateOn` contains `'step'` also validate the elements within the step before moving forward (and stay if there's any error).
     * 
     * @returns {void}
     */
    const next = async () => {
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
     * @returns {void}
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
     * @private
     */
    const handleClick = () => {
      switch (type.value) {
        case 'previous':
          previous()
          break
        case 'next':
          next()
          break
        case 'finish':
          finish()
          break
      }
    }

    return {
      form$,
      theme,
      steps$,
      classes,
      mainClass,
      defaultClasses,
      templates,
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