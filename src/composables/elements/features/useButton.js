import { toRefs, computed } from 'composition-api'
import computedOption from '../../../utils/computedOption'

const base = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const components = dependencies.components
  
  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {string}
   * @default ""
   */
  const buttonLabel = computedOption('buttonLabel', schema, '')

  /**
   * 
   * 
   * @type {string}
   * @values "submit"|"anchor"|"button"
   * @default "button"
   */
  const buttonType = computedOption('buttonType', schema, 'button', ['submit', 'anchor', 'button'])

  /**
   * 
   * 
   * @type {string|array|object}
   * @default null
   */
  const buttonClass = computedOption('buttonClass', schema, null)

  /**
   * 
   * 
   * @type {function}
   * @default false
   */
  const disabled = computedOption('disabled', schema, false)

  /**
   * 
   * 
   * @type {function}
   * @default false
   */
  const loading = computedOption('loading', schema, false)

  /**
   * 
   * 
   * @type {string}
   * @default null
   */
  const href = computedOption('href', schema, null)

  /**
   * 
   * 
   * @type {string}
   * @default "_self"
   */
  const target = computedOption('target', schema, '_self')

  /**
   * 
   * 
   * @type {string}
   * @default "left"
   */
  const align = computedOption('align', schema, 'left')

  /**
   * 
   * 
   * @type {function}
   * @default null
   */
  const onClick = computedOption('onClick', schema, null)

  /**
   * 
   * 
   * @type {component<FormButton>}
   * @private
   */
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