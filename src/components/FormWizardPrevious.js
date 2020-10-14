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
  init(props, context)
  {  
    const { wizard$ } = toRefs(props)
    
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const visible = computed(() => {
      if (current$ && current$.value && current$.value.buttons && current$.value.buttons.previous === false) {
        return false
      }

      return true
    })

    const disabled = computed(() => {
      return wizard$.value.isAtFirstStep
    })

    const current$ = computed(() => {
      return wizard$.value.current$
    })

    const baseLabel = computed(() => {
      if (current$ && current$.value && current$.value.labels && current$.value.labels.previous) {
        return current$.value.labels.previous
      }
      
      return form$.value.__('laraform.wizard.previous')
    })

    const descriptor = computed(() => {
      return {
        label: baseLabel.value
      }
    })

    // =============== METHODS ==============

    const previous = () => {
      wizard$.value.previous()
    }

    // ============ DEPENDENCIES ============

    const { label, isLabelComponent } = useLabel(props, context, {
      descriptor,
      form$,
    })

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      components,
      visible,
      disabled,
      current$,
      label,
      isLabelComponent,

      // Methods
      previous,
    }
  },
}