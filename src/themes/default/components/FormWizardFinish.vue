<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="theme.classes.formWizardControlFinish"
  	@click.prevent="finish"
  >{{ label }}</button>
</template>

<script>
  import FormWizardFinish from './../../../components/FormWizardFinish'

  export default {
    mixins: [FormWizardFinish],
  }
</script>