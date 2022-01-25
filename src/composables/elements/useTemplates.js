import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    templates,
    presets,
  } = toRefs(props)
  
  const componentName = context.name

  // ============ DEPENDENCIES ============

  const theme = dependencies.theme
  const View = dependencies.View
  const form$ = dependencies.form$


  // ============== COMPUTED ==============

  /**
   * The component templates to use for the element. Use [`templates`](#option-templates) option to override any of the theme's default templates.
   * 
   * @type {object}
   */
  const Templates = computed(() => {
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
      ...(templates ? templates.value : {})
    }
  })

  /**
   * The component's template.
   * 
   * @type {object}
   */
  const template = computed(() => {
    return View && View.value && Templates.value[`${componentName.value}_${View.value}`]
            ? Templates.value[`${componentName.value}_${View.value}`]
            : Templates.value[componentName.value]
  })

  return {
    Templates,
    template,
  }
}

export default base