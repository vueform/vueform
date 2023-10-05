import { computed, toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const fieldId = dependencies.fieldId
  const invalid = dependencies.invalid
  const isDisabled = dependencies.isDisabled
  const busy = dependencies.busy
  
  // ============== COMPUTED ==============
  
  /**
   * The `id` of the related label component.
   *
   * @type {string}
   * @private
   */
  const labelId = computed(() => {
    return `${ fieldId.value }__label`
  })
  
  /**
   * The `id` of the related description component.
   *
   * @type {string}
   * @private
   */
  const descriptionId = computed(() => {
    return `${ fieldId.value }__description`
  })
  
  /**
   * The `id` of the related description component.
   *
   * @type {string}
   * @private
   */
  const infoId = computed(() => {
    return `${ fieldId.value }__info`
  })
  
  /**
   * The `id` of the related error component.
   *
   * @type {string}
   * @private
   */
  const errorId = computed(() => {
    return `${ fieldId.value }__error`
  })
  
  /**
   * The `aria-*` attributes of the input.
   *
   * @type {object}
   */
  const aria = computed(() => {
    return {
      'aria-labelledby': labelId.value,
      'aria-describedby': `${ descriptionId.value } ${ infoId.value }`,
      'aria-invalid': invalid.value,
      'aria-errormessage': errorId.value,
      'aria-disabled': isDisabled?.value,
      'aria-busy': busy.value,
    }
  })
  
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria,
  }
}

const checkbox = function(props, context, dependencies)
{
  const { text } = toRefs(props)
  
  const {
    descriptionId,
    labelId,
    infoId,
    errorId,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES ============
  
  const invalid = dependencies.invalid
  const isDisabled = dependencies.isDisabled
  const busy = dependencies.busy
  
  // ============== COMPUTED ==============
  
  const aria = computed(() => {
    let aria = {
      'aria-label': text.value,
      'aria-describedby': `${ labelId.value } ${ descriptionId.value } ${ infoId.value }`,
      'aria-invalid': invalid.value,
      'aria-errormessage': errorId.value,
      'aria-disabled': isDisabled.value,
      'aria-busy': busy.value,
    }
    
    if (!aria['aria-label']) {
      aria['aria-labelledby'] = labelId.value
    }
    
    return aria
  })
  
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria,
  }
}

const checkboxgroup = function(props, context, dependencies)
{
  const {
    descriptionId,
    labelId,
    infoId,
    errorId,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES ============
  
  const invalid = dependencies.invalid
  const isDisabled = dependencies.isDisabled
  const busy = dependencies.busy
  
  // ============== COMPUTED ==============
  
  const aria = computed(() => {
    return {
      'aria-describedby': `${ descriptionId.value } ${ infoId.value }`,
      'aria-invalid': invalid.value,
      'aria-errormessage': errorId.value,
      'aria-disabled': isDisabled.value,
      'aria-busy': busy.value,
    }
  })
  
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria,
  }
}

const button = function(props, context, dependencies)
{
  const {
    descriptionId,
    labelId,
    infoId,
    errorId,
  } = base(props, context, dependencies)
  
  // ============ DEPENDENCIES ============
  
  const isDisabled = dependencies.isDisabled
  
  // ============== COMPUTED ==============
  
  const aria = computed(() => {
    return {
      'aria-labelledby': labelId.value,
      'aria-describedby': `${ descriptionId.value } ${ infoId.value }`,
      'aria-disabled': isDisabled.value,
    }
  })
  
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria,
  }
}

const static_ = function(props, context, dependencies)
{
  const {
    descriptionId,
    labelId,
    infoId,
    errorId,
  } = base(props, context, dependencies)
  
  // ============== COMPUTED ==============
  
  const aria = computed(() => {
    return {
      'aria-labelledby': labelId.value,
      'aria-describedby': `${ descriptionId.value } ${ infoId.value }`,
    }
  })
  
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria,
  }
}

const radiogroup = checkboxgroup
const radio = checkbox
const toggle = checkbox
const file = checkboxgroup

export {
  checkboxgroup,
  radiogroup,
  checkbox,
  radio,
  toggle,
  file,
  static_,
  button,
}

export default base