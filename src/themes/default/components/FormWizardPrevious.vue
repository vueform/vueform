<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="previous"
  >{{ label }}</button>
</template>

<script>
  import FormWizardPrevious from './../../../components/FormWizardPrevious'

  export default {
    mixins: [FormWizardPrevious],
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-secondary',
        }
      }
    }
  }
</script>