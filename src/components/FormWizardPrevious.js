import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormWizardPrevious',
  props: {
    wizard$: {
      type: Object,
    }
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
      if (current$ && current$.value && current$.value.buttons && current$.value.buttons.previous === false) {
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
      return wizard$.value && wizard$.value.isAtFirstStep
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
      if (current$ && current$.value && current$.value.labels && current$.value.labels.previous) {
        return current$.value.labels.previous
      }
      
      return form$.value.__('laraform.wizard.previous')
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
    const previous = () => {
      wizard$.value.previous()
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
      previous,
    }
  },
}