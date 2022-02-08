import { toRefs, onMounted, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  const {
    radioName,
    radioValue,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const update = dependencies.update
  const nullValue = dependencies.nullValue
  const fieldId = dependencies.fieldId
  const path = dependencies.path
  const value = dependencies.value
  const form$ = dependencies.form$

  // ============== COMPUTED ==============
  
  /**
   * The `name` attribute of the element. If [`id`](#option-id) is not provided [`name`](#option-name) will be used.
   * 
   * @type {string}
   */
  const inputName = computed(() => {
    return radioName.value || path.value
  })

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
    form$.value.$el.querySelectorAll(`input[name="${inputName.value}"`).forEach((element) => {
      element.addEventListener('change', () => {
        if (element.id != fieldId.value) {
          update(nullValue.value)
        }
      })
    })
  })

  return {
    inputName,
    check,
    uncheck,
  }
}

export default base