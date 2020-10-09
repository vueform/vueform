export default {
  data() {
    return {
      /**
       * Form element components.
       * 
       * @type {object}
       * @default -
       */
      elements$: {},

      /**
       * Form wizard component.
       * 
       * @type {object}
       * @default -
       */
      wizard$: {},

      /**
       * Form tabs component.
       * 
       * @type {object}
       * @default -
       */
      tabs$: {},
    }
  },
  watch: {
    schema: {
      handler() {
        this.$nextTick(() => {
          this.$_setElements$()
        })
      },
      deep: true,
      immediate: false,
    },
    wizard: {
      handler() {
        this.$nextTick(() => {
          this.$_setWizard$()
        })
      },
      deep: true,
      immediate: false,
    },
    tabs: {
      handler() {
        this.$nextTick(() => {
          this.$_setTabs$()
        })
      },
      deep: true,
      immediate: false,
    },
  },
  methods: {
    $_setElements$() {
      if (!this.$refs.elements$ && !this.$refs.formElements$) {
        throw new Error('elements$ or formElements$ ref must be defined')
      }

      let elements$ = {}
      let elementRefs$ = this.$refs.formElements$
        ? _.values(this.$refs.formElements$.$refs)[0]
        : this.$refs.elements$ || []

      _.each(elementRefs$, (element$) => {
        elements$[element$.name] = element$
      })

      this.$set(this, 'elements$', elements$)
    },

    $_setWizard$() {
      this.$set(this, 'wizard$', this.$refs.wizard$ || {})
    },

    $_setTabs$() {
      this.$set(this, 'tabs$', this.$refs.tabs$ || {})
    },
  },
  mounted() {
    this.$_setElements$()
    this.$_setWizard$()
    this.$_setTabs$()
  }
}