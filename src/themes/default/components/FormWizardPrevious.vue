<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="theme.classes.formWizardControlPrevious"
  	@click.prevent="previous"
  >{{ label }}</button>
</template>

<script>
  import FormWizardPrevious from './../../../components/FormWizardPrevious'

  export default {
    mixins: [FormWizardPrevious],
  }
</script>