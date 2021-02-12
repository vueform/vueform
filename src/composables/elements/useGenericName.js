import { computed, ref, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    name,
    placeholder,
    label,
  } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Helper property used to determine a generic name for the element.
   * 
   * @type {string}
   */
  const genericName = computed(() => {
    if (label && label.value) {
      return label.value
    } else if (placeholder && placeholder.value) {
      return placeholder.value
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