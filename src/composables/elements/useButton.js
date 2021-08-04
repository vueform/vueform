import { toRefs, computed } from 'composition-api'

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
  const el$ = dependencies.el$

  // ============== COMPUTED ==============

  const isLoading = computed(() => {
    if (typeof loading.value === 'function') {
      return loading.value(form$.value, el$.value)
    }
    
    if (submits.value && (form$.value.submitting || form$.value.preparing)) {
      return true
    }
    
    return loading.value
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

    if (isLoading.value) {
      button.tabindex = -1
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