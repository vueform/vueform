<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['theme', 'layout'],
    	name: 'FormWizardPrevious',
    props: {
      wizard$: Object,
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
      label() {
        if (this.current$ && this.current$.labels && this.current$.labels.previous) {
          return this.current$.labels.previous
        }

        return this.__('wizard.previous')
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
</script>