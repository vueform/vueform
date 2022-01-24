import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    replaceTemplates,
    presets,
  } = toRefs(props)
  
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const theme = dependencies.theme
  const View = dependencies.View
  const form$ = dependencies.form$


  // ============== COMPUTED ==============

  /**
   * The component templates to use for the element. Use [`replaceTemplates`](#option-replace-templates) option to override any of the theme's default templates.
   * 
   * @type {object}
   */
  const templates = computed(() => {
    let presetTemplates = {}

    _.each(presets ? presets.value : [], (presetName) => {
      let preset = form$.value.$vueform.config.presets[presetName]

      if (!preset.templates) {
        return
      }

      presetTemplates = Object.assign({}, presetTemplates, preset.templates)
    })

    return {
      ...theme.value.templates,
      ...presetTemplates,
      ...(replaceTemplates ? replaceTemplates.value : {})
    }
  })

  /**
   * The component's template.
   * 
   * @type {object}
   */
  const template = computed(() => {
    return View && View.value && templates.value[`${componentName.value}_${View.value}`]
            ? templates.value[`${componentName.value}_${View.value}`]
            : templates.value[componentName.value]
  })

  return {
    templates,
    template,
  }
}

export default base