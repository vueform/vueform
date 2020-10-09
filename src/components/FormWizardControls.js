import BaseComponent from './../mixins/BaseComponent'

export default {
  name: 'FormWizardControls',
  mixins: [BaseComponent],
  props: {
    wizard$: {
      type: Object,
    },
  },
}