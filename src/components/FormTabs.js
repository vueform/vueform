import { ref } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import HasEvents from './../mixins/HasEvents'

export default {
  name: 'FormTabs',
  mixins: [HasEvents],
  props: {
    /**
     * Tabs definition.
     */
    tabs: {
      type: Object,
      required: true,
    },

    /**
     * Form element components.
     */
    elements$: {
      type: Object,
      required: true,
    },
  },
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ================ DATA ================

    const formTabs$ = ref([])

    return {
      // Inject
      form$,
      theme,

      // Data
      formTabs$,

      // Computed
      classes,
      components,
    }
  },
  data() {
    return {
      /**
       * Helper property used to store available events.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: [
        'change',
      ],
    }
  },
  watch: {
    elements$: {
      handler(newValue, oldValue) {
        let newElements$ = _.difference(_.keys(newValue), _.keys(oldValue))

        _.each(newElements$, (newElement$) => {
          this.elements$[newElement$].deactivate()
        })
      },
      deep: false,
      immediate: false
    },
    tabs: {
      handler() {
        this.$nextTick(() => {
          // this.$_setTabs$()

          this.$nextTick(() => {
            if (_.isEmpty(this.current$)) {
              this.first$.select()
            }
          })
        })
      },
      deep: true,
      immediate: false,
    }
  },
  computed: {
    /**
     * Object of tab$ components.
     * 
     * @type {object}
     * @default {}
     */
    tabs$() {
      let tabs$ = {}

      _.each(this.formTabs$, (formTab$) => {
        tabs$[formTab$.name] = formTab$
      })

      return tabs$
    },

    /**
     * Returns the visible [tab$](reference/frontend-tab) components.
     * 
     * @type {object}
     */
    visible$() {
      var tabs$ = {}

      _.each(this.tabs$, (tab$) => {
        if (tab$.visible) {
          tabs$[tab$.name] = tab$
        }
      })

      return tabs$
    },

    /**
     * Returns the current [tab$](reference/frontend-tab) components.
     * 
     * @type {object}
     */
    current$() {
      var current = _.find(this.tabs$, { active: true })

      return current !== undefined ? current : {}
    },

    /**
     * Returns the first [tab$](reference/frontend-tab) components.
     * 
     * @type {object}
     */
    first$() {
      return this.visible$[_.head(_.keys(this.visible$))]
    },

    /**
     * Returns the next [tab$](reference/frontend-tab) component.
     * 
     * @type {tab$}
     */
    next$() {
      return this.visible$[_.keys(this.visible$)[this.current$.index + 1]]
    },

    /**
     * Returns the previous [tabs$](reference/frontend-tab) component.
     * 
     * @type {tab$}
     */
    previous$() {
      return this.visible$[_.keys(this.visible$)[this.current$.index - 1]]
    },
  },
  methods: {
    /**
     * Moves to a tab.
     *
     * @public
     * @param {object} tab key of tab in [tabs](reference/frontend-form#prop-tabs)
     * @returns {void}
     */
    goTo(tab) {
      let tab$ = this.visible$[tab]
      
      tab$.select()
    },

    /**
     * Selects a tab.
     *
     * @private
     * @param {object} tab$ selected tab component
     * @returns {void}
     */
    select(tab$) {
      _.each(this.elements$, (element$) => {
        element$.deactivate()
      })

      _.each(this.tabs$, (tab$) => {
        tab$.deactivate()
      })

      this.handleChange(tab$)
    },

    /**
     * Returns a specific [tab$](reference/frontend-tab).
     *
     * @public
     * @param {object} tab key of tab in [tabs](reference/frontend-form#prop-tabs) object
     * @returns {wizardStep$}
     */
    tab$(tab) {
      return _.find(this.tabs$, {name: tab})
    },

    /**
     * Reset tabs, meaning selecting [first$](#prop-first) tab. 
     *
     * @public
     * @returns {void}
     */
    reset() {
      this.first$.select()
    },

    /**
     * Triggered the tab changes using [select](#method-select) method.
     *
     * @public
     * @param {object} tab$ selected tab component
     * @event change
     */
    handleChange(tab$) {
      this.fire('change', tab$)
    },
  },
  mounted() {
    if (_.isEmpty(this.tabs)) {
      return
    }

    // nextTick is required because elements$
    // only available after form is mounted,
    // which is later than the tabs mount
    // this.$nextTick(() => {
      this.first$.select()
    // })
  }
}