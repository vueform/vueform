import { toRefs, computed } from 'composition-api'
import computedOption from '../../../utils/computedOption'

const base = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const components = dependencies.components
  
  // ============== COMPUTED ==============

  const buttonLabel = computedOption('buttonLabel', schema, '')

  const buttonType = computedOption('buttonType', schema, 'button', ['submit', 'anchor', 'button'])

  const buttonClass = computedOption('buttonClass', schema, null)

  const disabled = computedOption('disabled', schema, false)

  const loading = computedOption('loading', schema, false)

  const href = computedOption('href', schema, null)

  const target = computedOption('target', schema, '_self')

  const align = computedOption('align', schema, 'left')

  const onClick = computedOption('onClick', schema, null)

  const buttonComponent = computed(() => {
    if (schema.value.component) {
      return schema.value.component        
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
    buttonLabel,
    buttonType,
    buttonClass,
    disabled,
    loading,
    href,
    target,
    align,
    onClick,
    buttonComponent,
    button,
  }
}

export default base