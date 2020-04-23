<script>
  import FormWizardPrevious from './FormWizardPrevious'
  import FormWizardNext from './FormWizardNext'
  import FormWizardFinish from './FormWizardFinish'
  import Localized from './../mixins/Localized'

  export default {
    mixins: [Localized],
    inject: ['form$', 'theme', 'layout'],
  	  name: 'FormWizardControls',
    components: {
      FormWizardPrevious,
      FormWizardNext,
      FormWizardFinish,
    },
    props: {
      wizard$: Object,
    },
  }
</script>