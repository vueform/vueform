import { computed, toRefs, nextTick } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'
import asyncForEach from './../utils/asyncForEach'

export default {
  name: 'FormWizardFinish',
  setup(props, context)
  {
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
    const visible = computed(() => {
      return wizard$.value && wizard$.value.isAtLastStep
    })

    /**
     * 
     * 
     * @private
     */
    const disabled = computed(() => {
      // only disable finish because of invalidity
      // if element validations are triggered on
      // change, otherwise it might occur that the
      // form has invalid fields, which values have
      // changed to valid, but still marked as invalid
      return (wizard$.value.invalid && form$.value.shouldValidateOnChange) ||
            wizard$.value.busy || form$.value.submitting || form$.value.disabled
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
    const visible$ = computed(() => {
      return wizard$.value ? wizard$.value.visible$ : []
    })

    /**
     * 
     * 
     * @private
     */
    const label = computed(() => {
      if (current$ && current$.value && current$.value.labels && current$.value.labels.finish) {
        return current$.value.labels.finish
      }
      
      return form$.value.__('laraform.wizard.finish')
    })

    /**
     * 
     * 
     * @private
     */
    const isLabelComponent = computed(() => {
      return label.value !== null && typeof label.value === 'object'
    })

    // =============== METHODS ==============

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
      visible$,
      label,
      isLabelComponent,
      finish,
    }
  },
}