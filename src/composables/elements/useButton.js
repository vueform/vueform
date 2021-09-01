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

  /**
   * 
   * 
   * @type {boolean}
   */
  const isLoading = computed(() => {
    if (typeof loading.value === 'function') {
      return loading.value(form$.value, el$.value)
    }
    
    if (submits.value && (form$.value.submitting || form$.value.preparing || form$.value.isLoading)) {
      return true
    }
    
    return loading.value
  })

  /**
   * 
   * 
   * @type {boolean}
   */
  const isButtonLabelComponent = computed(() => {
    return buttonLabel.value !== null && typeof buttonLabel.value === 'object'
  })

  /**
   * 
   * 
   * @type {object}
   */
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

  // =============== METHODS ==============

  /**
   *
   *
   * @param {Event} e* event
   * @returns {void}
   */
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