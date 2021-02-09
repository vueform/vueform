import { computed, toRefs, nextTick } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'
import asyncForEach from './../utils/asyncForEach'

export default {
  name: 'FormWizardFinish',
  props: {
    wizard$: {
      type: Object,
    },
  },
  setup(props, context)
  {  
    const { wizard$ } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

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
    const baseLabel = computed(() => {
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
    const descriptor = computed(() => {
      return {
        label: baseLabel.value
      }
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

    // ============ DEPENDENCIES ============

    const {
      label,
      isLabelComponent
    } = useLabel(props, context, {
      descriptor,
      component$: current$,
    })

    return {
      form$,
      theme,
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