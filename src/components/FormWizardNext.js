import { computed, toRefs } from 'composition-api'
import { invalid } from 'moment'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormWizardNext',
  props: {
    wizard$: {
      type: Object,
    },
  },
  init(props, context)
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
      if (!wizard$.value) {
        return false
      }

      if (wizard$.value.isAtLastStep) {
        return false
      }

      if (current$ && current$.value && current$.value.buttons && current$.value.buttons.next === false) {
        return false
      }

      return true
    })

    /**
     * 
     * 
     * @private
     */
    const disabled = computed(() => {
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
    const baseLabel = computed(() => {
      if (current$ && current$.value && current$.value.labels && current$.value.labels.next) {
        return current$.value.labels.next
      }
      
      return form$.value.__('laraform.wizard.next')
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
      label,
      isLabelComponent,
      next,
    }
  },
}