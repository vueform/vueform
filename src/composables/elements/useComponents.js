import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    replaceTemplates,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const theme = dependencies.theme


  // ============== COMPUTED ==============

  /**
   * Returns the components to use within the element. Use [`:replaceTemplates`](#override-components) to override any of the element's components.
   * 
   * @type {object}
   */
  const components = computed(() => {
    return Object.assign({}, theme.value.components,
      replaceTemplates && replaceTemplates.value && Object.keys(replaceTemplates.value).length > 0
        ? replaceTemplates.value 
        : {}
    )
  })

  return {
    components,
  }
}

export default base