import BaseComponent from './../mixins/BaseComponent'
import HasLabel from './../mixins/HasLabel'

export default {
  name: 'FormWizardPrevious',
  mixins: [BaseComponent, HasLabel],
  props: {
    wizard$: {
      type: Object,
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