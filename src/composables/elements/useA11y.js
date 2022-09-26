import { computed } from 'vue'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const fieldId = dependencies.fieldId

  // ============== COMPUTED ==============
  
  /**
   * The `id` of the related label component.
   * 
   * @type {string}
   */
  const labelId = computed(() => {
    return `${fieldId.value}__label`
  })
  
  /**
   * The `id` of the related description component.
   * 
   * @type {string}
   */
  const descriptionId = computed(() => {
    return `${fieldId.value}__description`
  })
  
  /**
   * The `id` of the related description component.
   * 
   * @type {string}
   */
  const infoId = computed(() => {
    return `${fieldId.value}__info`
  })
  
  /**
   * The `id` of the related error component.
   * 
   * @type {string}
   */
  const errorId = computed(() => {
    return `${fieldId.value}__info`
  })

  /**
   * The `aria-describedby` attribute of the input.
   * 
   * @type {string}
   */
  const ariaDescribedby = computed(() => {
    return `${descriptionId.value} ${infoId.value}`
  })

  return {
    ariaDescribedby,
    descriptionId,
    labelId,
    infoId,
    errorId,
  }
}

export default base