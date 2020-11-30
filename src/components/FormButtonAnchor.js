import { toRefs } from 'composition-api'
import computedOption from '../utils/computedOption'
import FormButton from './FormButton'

export default {
  name: 'FormButtonAnchor',
  mixins: [FormButton],
  init(props, context)
  {
    const { button } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      el$, form$, theme, align, loading, disabled, mainClass, classes, components,
      label, isDisabled, isLoading, isLabelComponent, available, conditions,
      setLoading, disable, enable,
    } = FormButton.init(props, context)
  
    // ============== COMPUTED ==============

    const href = computedOption('href', button, '')

    const target = computedOption('target', button, '_self')

    // =============== METHODS ==============

    const handleClick = (e) => {
      if (href.value === '') {
        e.preventDefault()
      }

      if (disabled.value || loading.value) {
        return
      }

      if (typeof button.value.onClick == 'function') {
        button.value.onClick(form$.value)
      }
    }

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
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
      available,
      conditions,
      href,
      target,

      // Methods
      setLoading,
      disable,
      enable,
      handleClick,
    }
  },
}