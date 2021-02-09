import { toRefs, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    buttonLabel,
    buttonType,
    buttonClass,
    disabled,
    loading,
    href,
    target,
    align,
    onClick,
    component
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const components = dependencies.components
  
  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {component<FormButton>}
   * @private
   */
  const buttonComponent = computed(() => {
    if (component.value) {
      return component.value
    }

    let type = buttonType.value || 'button'

    switch(type) {
      case 'button':
        return components.value.FormButton

      default:
        let component = components.value['FormButton' + _.upperFirst(type)]

        if (!component) {
          throw new TypeError('Button component not found: "FormButton' + _.upperFirst(type) + '"')
        }

        return component
    }
  })

  /**
   * 
   * 
   * @type {object}
   * @private
   */
  const button = computed(() => {
    return {
      label: buttonLabel.value,
      class: buttonClass.value,
      disabled: disabled.value,
      loading: loading.value,
      href: href.value,
      target: target.value,
      align: align.value,
      onClick: onClick.value,
    }
  })

  return {
    buttonComponent,
    button,
  }
}

export default base