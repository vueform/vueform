import { toRefs, computed } from 'composition-api'
import { mergeComponentClasses } from './../../utils/mergeClasses'

const base = function (props, context, dependencies)
{
  const {
    buttonLabel,
    buttonType,
    href,
    target,
    loading,
    onClick,
    resets,
    submits,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const isDisabled = dependencies.isDisabled

  // ============== COMPUTED ==============

  const isLoading = computed(() => {
    return typeof loading.value === 'function' ? loading.value(form$.value) : loading.value
  })

  const isButtonLabelComponent = computed(() => {
    return buttonLabel.value !== null && typeof buttonLabel.value === 'object'
  })

  const button = computed(() => {
    const button = {}

    switch (buttonType.value) {
      case 'anchor':
        button.href = href.value
        button.target = target.value
        break

      case 'button':
        button.disabled = isDisabled.value
        break
    }

    return button
  })

  const handleClick = (e) => {
    if (href.value.length > 0) {
      e.preventDefault()
    }

    if (isDisabled.value || isLoading.value) {
      return
    }

    if (resets.value) {
      form$.value.reset()
    }

    if (submits.value) {
      form$.value.submit()
    }

    if (typeof onClick.value == 'function') {
      onClick.value(form$.value)
    }
  }

  return {
    isButtonLabelComponent,
    button,
    isLoading,
    handleClick,
  }
}

export default base