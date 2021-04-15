import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'ElementLabel',
  setup(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes: baseClasses,
      mainClass,
      components,
      theme,
      defaultClasses,
    } = useElementComponent(props, context)

    const {
      label,
      isLabelComponent
    } = useLabel(props, context, { 
      labelDefinition: computed(() => { return el$.value.label }),
      component$: el$,
     })

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const classes = computed(() => {
      return mergeComponentClasses(_.clone(baseClasses.value), {
        [mainClass.value]: el$.value.columnsClasses.label,
      })
    })

    /**
     * 
     * @type {string}
     */
    const name = computed(() => {
      return el$.value.name
    })

    return {
      el$,
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      components,
      label,
      isLabelComponent,
      name,
    }
  },
}