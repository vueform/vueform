<script>
  import HasEvents from './../mixins/HasEvents'
  import FormTab from './FormTab'
  import Localized from './../mixins/Localized'

  export default {
    mixins: [HasEvents, Localized],
    inject: ['form$', 'theme', 'layout'],
    	name: 'FormTabs',
    components: {
      FormTab,
    },
    props: {
      tabs: Object,
      elements$: Object,
    },
    data() {
      return {
        tabs$: {},
        events: [
          'change',
        ],
      }
    },
    computed: {
      visible$() {
        var tabs$ = {}

        _.each(this.tabs$, (tab$) => {
          if (tab$.visible) {
            tabs$[tab$.name] = tab$
          }
        })

        return tabs$
      },
      current$() {
        var current = _.find(this.tabs$, { active: true })

        return current !== undefined ? current : {}
      },
      first$() {
        return this.visible$[_.head(_.keys(this.visible$))]
      },
    },
    methods: {
      select(tab) {
        _.each(this.elements$, (element$) => {
          element$.deactivate()
        })

        _.each(this.tabs$, (tab$) => {
          tab$.deactivate()
        })

        this.fire('change')
      },
      tab$(tab) {
        return _.find(this.tabs$, {name: tab})
      },
      reset() {
        this.first$.select()
      },
    },
    mounted() {
      if (_.isEmpty(this.tabs)) {
        return
      }

      this.tabs$ = {}

      _.each(this.$refs.tabs$, (tab$) => {
        this.tabs$[tab$.name] = tab$
      })

      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tabs mount
      this.$nextTick(() => {
        this.first$.select()
      })
    }
  }
</script>