<script>
  // @todo: check required schema (eg. `elements` property) here and everywhere

  import HasConditions from './../mixins/HasConditions'
  import HasEvents from './../mixins/HasEvents'
  import Localized from './../mixins/Localized'

  export default {
    mixins: [HasConditions, HasEvents, Localized],
    inject: ['form$', 'theme', 'layout'],
    	name: 'FormTab',
    props: {
      name: [String, Number],
      tab: Object,
      elements$: Object,
    },
    data() {
      return {
        active: false,
        events: [
          'active', 'inactive',
        ],
      }
    },
    computed: {
      visible() {
        return this.available
      },
      label() {
        return this.tab.label
      },
      invalid() {
        return _.some(this.children$, { available: true, invalid: true })   
      },
      children$() {
        return _.filter(this.elements$, (element$, key) => {
          return this.tab.elements.indexOf(key) !== -1
        })
      },
      conditions() {
        return this.tab.conditions || []
      },
    },
    methods: {
      select() {
        this.$emit('select', this.name)

        _.each(this.children$, (element$) => {
          element$.activate()
        })

        this.activate()
      },
      activate() {
        if (this.active) {
          return
        }

        this.active = true

        this.fire('active')
      },
      deactivate() {
        if (!this.active) {
          return
        }

        this.active = false

        this.fire('inactive')
      },
      $_forwardConditions() {
        if (this.conditions.length == 0) {
          return
        }

        _.each(this.children$, (element$) => {
          _.each(this.tab.conditions, (condition) => {
            element$.conditions.push(condition)
          })
        })
      },
      $_initEvents() {
        _.each(this.events, (func, event) => {
          if (this.tab[event] !== undefined) {
            this.$set(this.events, event, this.tab[event])
          }
        })
      },
    },
    mounted() {
      this.$_initEvents()

      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tab mount
      this.$nextTick(() => {
        this.$_forwardConditions()
      })
    }
  }
</script>