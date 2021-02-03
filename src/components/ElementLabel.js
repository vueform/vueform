import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'ElementLabel',
  init(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      mainClass,
      components,
      theme
    } = useElementComponent(props, context)

    const {
      label,
      isLabelComponent
    } = useLabel(props, context, { 
      descriptor: computed(() => { return el$.value.schema }),
      component$: el$,
     })

    // ============== COMPUTED ==============

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
      components,
      label,
      isLabelComponent,
      name,
    }
  },
}