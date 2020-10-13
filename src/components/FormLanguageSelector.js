import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguageSelector',
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
    language() {
      return this.form$.language
    },
    languages() {
      return this.form$.languages
    },
  },
  methods: {
    select(language) {
      this.$emit('changeLanguage', language)
    },
  },
}