import { toRefs, onMounted, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    fieldName,
    name,
    radioValue,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const update = dependencies.update
  const nullValue = dependencies.nullValue
  const fieldId = dependencies.fieldId

  // =============== METHODS ==============

  /**
   * Checks the radio.
   *
   * @returns {void}
   */
  const check = () => {
    update(radioValue.value)
  }

  /**
   * Unhecks the radio.
   *
   * @returns {void}
   */
  const uncheck = () => {
    update(nullValue.value)
  }

  // =============== HOOKS ================

  onMounted(() => {
    document.getElementsByName(fieldName.value || name.value).forEach((element) => {
      element.addEventListener('change', () => {
        if (element.id != fieldId.value) {
          update(nullValue.value)
        }
      })
    })
  })

  return {
    check,
    uncheck,
  }
}

export default base