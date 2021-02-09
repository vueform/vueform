import { computed, toRefs } from 'composition-api'
import FormButton from './FormButton'

export default {
  name: 'FormButtonSubmit',
  mixins: [FormButton],
  setup(props, context)
  {
    const { button } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      theme,
      align,
      loading,
      disabled,
      mainClass,
      classes,
      components,
      label,
      isLabelComponent,
      setLoading,
      disable,
      enable,
    } = FormButton.setup(props, context)
  
    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const isDisabled = computed(() => {
      let disabledByFunction = typeof button.value.disabled == 'function'
        ? button.value.disabled(form$.value)
        : form$.value.submitting || (form$.value.invalid && form$.value.shouldValidateOnChange)

      return disabledByFunction || disabled.value
    })

    /**
     * 
     * 
     * @private
     */
    const isLoading = computed(() => {
      let loadingByFunction = typeof button.value.loading == 'function'
        ? button.value.loading(form$.value)
        : form$.value.submitting

      return loadingByFunction || loading.value
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const handleClick = () => {
      if (disabled.value || loading.value) {
        return
      }

      if (typeof button.value.onClick == 'function') {
        button.value.onClick(form$.value)
      } else {
        form$.value.submit()
      }
    }

    return {
      el$,
      form$,
      theme,
      align,
      loading,
      disabled,
      isLoading,
      isDisabled,
      mainClass,
      classes,
      components,
      label,
      isLabelComponent,
      setLoading,
      disable,
      enable,
      handleClick,
    }
  },
}