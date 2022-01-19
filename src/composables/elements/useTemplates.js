import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    replaceTemplates,
  } = toRefs(props)
  
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const theme = dependencies.theme
  const $view = dependencies.$view


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

  /**
   * The component's template.
   * 
   * @type {object}
   */
  const template = computed(() => {
    return $view.value && templates.value[`${componentName.value}_${$view.value}`]
            ? templates.value[`${componentName.value}_${$view.value}`]
            : templates.value[componentName.value]
  })

  return {
    templates,
    template,
  }
}

export default base