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
   * Returns the template to use within the element. Use [`:replaceTemplates`](#replace-templates) to override any of the element's templates.
   * 
   * @type {object}
   */
  const templates = computed(() => {
    return Object.assign({}, theme.value.templates,
      replaceTemplates && replaceTemplates.value && Object.keys(replaceTemplates.value).length > 0
        ? replaceTemplates.value 
        : {}
    )
  })

  return {
    templates,
  }
}

export default base