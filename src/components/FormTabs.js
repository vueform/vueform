import BaseComponent from './../mixins/BaseComponent'
import HasEvents from './../mixins/HasEvents'
import Localized from './../mixins/Localized'
import FormTab from './FormTab'

export default {
  name: 'FormTabs',
  components: {
    FormTab,
  },
  mixins: [BaseComponent, HasEvents, Localized],
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
  data() {
    return {
      /**
       * Object of [tab$](reference/frontend-tab) components.
       * 
       * @type {object}
       * @default {}
       */
      tabs$: {},

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
  computed: {
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
  },
  methods: {
    /**
     * Selects a tab.
     *
     * @public
     * @param {object} tab key of tab in [tabs](reference/frontend-form#prop-tabs) object
     * @returns {void}
     */
    select(tab) {
      _.each(this.elements$, (element$) => {
        element$.deactivate()
      })

      _.each(this.tabs$, (tab$) => {
        tab$.deactivate()
      })

      this.fire('change')
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
     * @event change
     */
    handleChange() {},

    $_setTabs() {
      let tabs$ = {}

      _.each(this.$refs.tabs$, (tab$) => {
        tabs$[tab$.name] = tab$
      })

      this.$set(this, 'tabs$', tabs$)
    }
  },
  mounted() {
    if (_.isEmpty(this.tabs)) {
      return
    }

    this.$_setTabs()

    // nextTick is required because elements$
    // only available after form is mounted,
    // which is later than the tabs mount
    this.$nextTick(() => {
      this.first$.select()
    })
  }
}