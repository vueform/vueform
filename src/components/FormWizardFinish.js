import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'FormWizardFinish',
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
      return wizard$.value.isAtLastStep
    })


    const disabled = computed(() => {
      // only disable finish because of invalidity
      // if element validations are triggered on
      // change, otherwise it might occur that the
      // form has invalid fields, which values have
      // changed to valid, but still marked as invalid
      return (wizard$.value.invalid && form$.value.$_shouldValidateOn('change')) ||
            wizard$.value.busy || form$.value.submitting || form$.value.disabled
    })

    const current$ = computed(() => {
      return wizard$.value.current$
    })

    const visible$ = computed(() => {
      return wizard$.value.visible$
    })

    const baseLabel = computed(() => {
      if (current$ && current$.value && current$.value.labels && current$.value.labels.finish) {
        return current$.value.labels.finish
      }
      
      return form$.value.__('laraform.wizard.finish')
    })

    const descriptor = computed(() => {
      return {
        label: baseLabel.value
      }
    })

    // =============== METHODS ==============

    const finish = () => {
      if (wizard$.value.handleFinish() === false) {
        return
      }

      if (form$.value.$_shouldValidateOn('submit')) {
        _.each(visible$.value, (step$) => {
          step$.validate()
        })
      }

      wizard$.value.finish(() => {
        wizard$.value.submit()
      })
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
      visible$,
      label,
      isLabelComponent,

      // Methods
      finish,
    }
  },
}