import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormWizardPrevious',
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
    const label = computed(() => {
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
    const isLabelComponent = computed(() => {
      return label.value !== null && typeof label.value === 'object'
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
    }
  },
}