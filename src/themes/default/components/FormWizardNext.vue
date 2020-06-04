<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="next"
  >{{ label }}</button>
</template>

<script>
  import FormWizardNext from './../../../components/FormWizardNext'

  export default {
    mixins: [FormWizardNext],
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-primary',
        }
      }
    }
  }
</script>