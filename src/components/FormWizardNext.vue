<script>
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['form$', 'theme', 'layout'],
    	name: 'FormWizardNext',
    props: {
      wizard$: Object,
    },
    computed: {
      visible() {
        if (this.wizard$.isAtLastStep) {
          return false
        }

        if (this.current$ && this.current$.buttons && this.current$.buttons.next === false) {
          return false
        }

        return true
      },
    	disabled() {
        return !_.isEmpty(this.current$) &&
          // only disable next because of invalidity
          // if element validations are triggered on
          // change, otherwise it might occur that the
          // step has invalid fields, which values have
          // changed to valid, but still marked as invalid
          (
            (this.current$.invalid && this.form$.$_shouldValidateOn('change')) ||  
            this.current$.busy
          )
    	},
      label() {
        if (this.current$ && this.current$.labels && this.current$.labels.next) {
          return this.current$.labels.next
        }
        
        return this.__('wizard.next')
      },
      current$() {
        return this.wizard$.current$
      },
    },
    methods: {
    	next() {
        if (this.form$.$_shouldValidateOn('step')) {
          this.current$.validate()
        }

        this.current$.proceed(() => {
          this.current$.complete()
          this.wizard$.next()
        })
    	},
    },
  }
</script>