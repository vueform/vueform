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

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const visible = computed(() => {
      if (wizard$.value.isAtLastStep) {
        return false
      }

      if (current$ && current$.value && current$.value.buttons && current$.value.buttons.next === false) {
        return false
      }

      return true
    })

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

    const current$ = computed(() => {
      return wizard$.value.current$
    })

    const baseLabel = computed(() => {
      if (current$ && current$.value && current$.value.labels && current$.value.labels.next) {
        return current$.value.labels.next
      }
      
      return form$.value.__('laraform.wizard.next')
    })

    const descriptor = computed(() => {
      return {
        label: baseLabel.value
      }
    })

    // =============== METHODS ==============

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
      next,
    }
  },
}