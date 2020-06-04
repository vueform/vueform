<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="theme.classes.formWizardControlNext"
  	@click.prevent="next"
  >{{ label }}</button>
</template>

<script>
  import FormWizardNext from './../../../components/FormWizardNext'

  export default {
    mixins: [FormWizardNext],
  }
</script>