<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="finish"
  >{{ label }}</button>
</template>

<script>
  import FormWizardFinish from './../../../components/FormWizardFinish'

  export default {
    mixins: [FormWizardFinish],
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-primary',
        }
      }
    }
  }
</script>