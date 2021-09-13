import _ from 'lodash'
import { computed, ref, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    name,
    floating,
    label,
  } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * The generic name of the element constructed from label / floating or element name.
   * 
   * @type {string}
   * @private.
   */
  const genericName = computed(() => {
    if (label && label.value) {
      return label.value
    } else if (floating && floating.value) {
      return floating.value
    } else {
      return _.upperFirst(name.value)
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
    label
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const filename = dependencies.filename || ref(null)

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
    } else if (label.value) {
      return label.value
    } else {
      return /^\d+$/.test(name.value)
        ? form$.value.__('laraform.elements.file.defaultName')
        : _.upperFirst(name.value)
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