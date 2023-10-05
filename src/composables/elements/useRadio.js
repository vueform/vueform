import { ref, watch, toRefs, onMounted, computed } from 'vue'

const base = function(props, context, dependencies)
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
  const form$ = dependencies.form$
  
  // ================ DATA ================
  
  /**
   * The list of listeners.
   *
   * @type {array}
   * @default []
   * @private
   */
  const listeners = ref([])
  
  // ============== COMPUTED ==============
  
  /**
   * The `name` attribute of the element. If [`id`](#option-id) is not provided [`name`](#option-name) will be used.
   *
   * @type {string}
   */
  const inputName = computed(() => {
    //@todo:adam incorrect documentation, id is non-existent in path computed
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
   * Unchecks the radio.
   *
   * @returns {void}
   */
  const uncheck = () => {
    update(nullValue.value)
  }
  
  /**
   * Watches radio name change.
   *
   * @returns {void}
   * @private
   */
  const watchChange = (value, old) => { //@todo:adam queryselectorall should check for name old and not name value
    if (old) {
      form$.value.$el.querySelectorAll(`input[name="${ old }"`).forEach((element, i) => {
        if (listeners.value[i]) {
          element.removeEventListener('change', listeners.value[i])
        }
      })
    }
    
    form$.value.$el.querySelectorAll(`input[name="${ value }"`).forEach((element) => {
      let listener = () => {
        if (element.id != fieldId.value) {
          update(nullValue.value)
        }
      }
      
      listeners.value.push(listener)
      
      element.addEventListener('change', listener)
    })
  }
  
  // =============== HOOKS ================
  
  onMounted(() => {
    watchChange(inputName.value)
  })
  
  // ============= WATCHERS ===============
  
  watch(inputName, watchChange)
  
  return {
    inputName,
    check,
    uncheck,
  }
}

export default base