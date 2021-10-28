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

  // ============== COMPUTED ==============
  
  /**
   * The `name` attribute of the element. If [`:id`](#id) is not provided [`:name`](#name) will be used.
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
    document.getElementsByName(inputName.value).forEach((element) => {
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
    inputName,
  }
}

export default base