import useFormComponent from './../composables/useFormComponent'
import HasLabel from './../mixins/HasLabel'

export default {
  name: 'FormWizardPrevious',
  mixins: [HasLabel],
  props: {
    wizard$: {
      type: Object,
    }
  },
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      components,
    }
  },
  computed: {
    visible() {
      if (this.current$ && this.current$.buttons && this.current$.buttons.previous === false) {
        return false
      }

      return true
    },
    disabled() {
      return this.wizard$.isAtFirstStep
    },
    baseLabel() {
      if (this.current$ && this.current$.labels && this.current$.labels.previous) {
        return this.current$.labels.previous
      }

      return this.__('laraform.wizard.previous')
    },
    current$() {
      return this.wizard$.current$
    },
  },
  methods: {
    previous() {
      this.wizard$.previous()
    }
  },
}