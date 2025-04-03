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
    let genericName

    if (fieldName && fieldName.value) {
      genericName = localize(fieldName.value, config$.value, form$.value)
    } else if (label && label.value) {
      genericName = Label.value
    } else if (floating && floating.value) {
      genericName = localize(floating.value, config$.value, form$.value)
    } else if (placeholder && placeholder.value && form$.value.options.floatPlaceholders) {
      genericName = localize(placeholder.value, config$.value, form$.value)
    } else {
      genericName = upperFirst(name.value).replace(/_|-/g, ' ')
    }

    return form$.value.$vueform.sanitize(genericName)
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
    let genericName

    if (embed.value && filename.value) {
      genericName = filename.value
    } else if (fieldName && fieldName.value) {
      genericName = localize(fieldName.value, config$.value, form$.value)
    } else if (label.value) {
      genericName = Label.value
    } else {
      genericName = /^\d+$/.test(name.value)
        ? form$.value.translations.vueform.elements.file.defaultName
        : upperFirst(name.value).replace(/_|-/g, ' ')
    }

    return form$.value.$vueform.sanitize(genericName)
  })
  
  return {
    genericName,
  }
}

export {
  file,
}

export default base