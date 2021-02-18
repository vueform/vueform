import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormWizardControl',
  emits: ['click'],
  props: {
    type: {
      type: [String],
      required: true
    }
  },
  setup(props, context)
  {  
    const {
      type
    } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const wizard$ = computed(() => {
      return form$.value.wizard$
    })

    /**
     * 
     * 
     * @private
     */
    const current$ = computed(() => {
      return wizard$.value ? wizard$.value.current$ : undefined
    })

    /**
     * 
     * 
     * @private
     */
    const isLabelComponent = computed(() => {
      return label.value !== null && typeof label.value === 'object'
    })


    /**
     * 
     * 
     * @private
     */
    const visible = computed(() => {
      let buttons = current$ && current$.value ? current$.value.buttons : null

      switch (type.value) {
        case 'previous':
          return !buttons ? true : buttons.previous !== false

        case 'next':
          return wizard$.value && !wizard$.value.isAtLastStep && (!buttons || buttons.next !== false)

        case 'finish':
          return wizard$.value && wizard$.value.isAtLastStep
      }
    })

    /**
     * 
     * 
     * @private
     */
    const disabled = computed(() => {
      switch (type.value) {
        case 'previous':
          return wizard$.value && wizard$.value.isAtFirstStep

        case 'next':
          return current$.value !== undefined && current$.value.index !== undefined &&
            // only disable next because of invalidity
            // if element validations are triggered on
            // change, otherwise it might occur that the
            // step has invalid fields, which values have
            // changed to valid, but still marked as invalid
            (
              (current$.value.invalid && form$.value.shouldValidateOnChange) ||  
              current$.value.busy
            )

        case 'finish':
          // only disable finish because of invalidity
          // if element validations are triggered on
          // change, otherwise it might occur that the
          // form has invalid fields, which values have
          // changed to valid, but still marked as invalid
          return (wizard$.value.invalid && form$.value.shouldValidateOnChange) ||
                wizard$.value.busy || form$.value.submitting || form$.value.disabled
      }
    })

    /**
     * 
     * 
     * @private
     */
    const label = computed(() => {
      let labels = current$ && current$.value ? current$.value.buttons : null

      switch (type.value) {
        case 'previous':
          return labels && labels.previous ? labels.previous : form$.value.__('laraform.wizard.previous')
        case 'next':
          return labels && labels.next ? labels.next : form$.value.__('laraform.wizard.next')
        case 'finish':
          return labels && labels.finish ? labels.finish : form$.value.__('laraform.wizard.finish')
      }
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const previous = () => {
      wizard$.value.previous()
    }
    /**
     * 
     * 
     * @private
     */
    const next = async () => {
      if (form$.value.shouldValidateOnStep) {
        await current$.value.validate()
      }

      if (current$.value.invalid) {
        return
      }

      current$.value.complete()
      wizard$.value.next()
    }

    /**
     * 
     * 
     * @private
     */
    const finish = async () => {
      wizard$.value.fire('finish')

      wizard$.value.complete()
      wizard$.value.submit()
    }

    /**
     * 
     * 
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
      wizard$,
      classes,
      mainClass,
      components,
      visible,
      disabled,
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