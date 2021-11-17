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
   * The component templates to use for the element. Use [`replaceTemplates`](#option-replace-templates) option to override any of the theme's default templates.
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