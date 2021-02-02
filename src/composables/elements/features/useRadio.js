import computedOption from './../../../utils/computedOption'
import { toRefs, onMounted } from 'composition-api'

const base = function (props, context, dependencies)
{
  const { schema, name } = toRefs(props)

  // ============ DEPENDENCIES ============

  const update = dependencies.update
  const radioValue = dependencies.radioValue
  const nullValue = dependencies.nullValue
  const id = dependencies.id

  // ============== COMPUTED ==============

  /**
  * Name of the input field.
  * 
  * @type {string} 
  * @default "=name"
  */
  const fieldName = computedOption('fieldName', schema, name.value)

  // =============== METHODS ==============

  /**
   * Checks the radio.
   *
   * @param {boolean} triggerChange whether the element should trigger `change` event
   * @returns {void}
   */
  const check = () => {
    update(radioValue.value)
  }

  /**
   * Unhecks the radio.
   *
   * @param {boolean} triggerChange whether the element should trigger `change` event
   * @returns {void}
   */
  const uncheck = () => {
    update(nullValue.value)
  }

  // =============== HOOKS ================

  onMounted(() => {
    document.getElementsByName(fieldName.value).forEach((element) => {
      element.addEventListener('change', () => {
        if (element.id != id.value) {
          update(nullValue.value)
        }
      })
    })
  })

  return {
    fieldName,
    check,
    uncheck,
  }
}

export default base