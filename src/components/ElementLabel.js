import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'

export default {
  name: 'ElementLabel',
  setup(props, context)
  {    
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes,
      mainClass,
      components,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', computed(() => el$.value.columnsClasses.label ), ref(true)]
      ]
    })

    const {
      label,
      isLabelComponent
    } = useLabel(props, context, { 
      labelDefinition: computed(() => { return el$.value.label }),
      component$: el$,
     })

    // ============== COMPUTED ==============

    /**
     * The name of the element.
     * 
     * @type {string}
     * @private
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