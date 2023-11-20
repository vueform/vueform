import upperFirst from 'lodash/upperFirst'
import { computed, ref, toRefs, inject } from 'vue'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    name,
    floating,
    placeholder,
    label,
    fieldName,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const Label = dependencies.Label
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  /**
   * The generic name of the element constructed from label / floating or element name.
   *
   * @type {string}
   * @private.
   */
  const genericName = computed(() => {
    if (fieldName && fieldName.value) {
      return localize(fieldName.value, config$.value, form$.value)
    } else if (label && label.value) {
      return Label.value
    } else if (floating && floating.value) {
      return localize(floating.value, config$.value, form$.value)
    } else if (placeholder && placeholder.value && form$.value.options.floatPlaceholders) {
      return localize(placeholder.value, config$.value, form$.value)
    } else {
      return upperFirst(name.value).replace(/_|-/g, ' ')
    }
  })
  
  return {
    genericName,
  }
}

const file = function(props, context, dependencies)
{
  const {
    name,
    embed,
    label,
    fieldName,
  } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  const Label = dependencies.Label
  const filename = dependencies.filename || /* istanbul ignore next: failsafe only */ ref(null)
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  
  // ============== COMPUTED ==============
  
  /**
   * The generic name of the element constructed from label / floating, element name or default file name if name is a number.
   *
   * @type {string}
   * @private.
   */
  const genericName = computed(() => {
    if (embed.value && filename.value) {
      return filename.value
    } else if (fieldName && fieldName.value) {
      return localize(fieldName.value, config$.value, form$.value)
    } else if (label.value) {
      return Label.value
    } else {
      return /^\d+$/.test(name.value)
        ? form$.value.translations.vueform.elements.file.defaultName
        : upperFirst(name.value).replace(/_|-/g, ' ')
    }
  })
  
  return {
    genericName,
  }
}

export {
  file,
}

export default base