<template>
  <div :class="classes.container">
    <FormWizardPrevious />
    <FormWizardNext />
    <FormWizardFinish />
  </div>
</template>

<script>
  export default {
    name: 'FormWizardControls',
    data() {
      return {
        defaultClasses: {
          container: 'form-wizard-controls'
        }
      }
    }
  }
</script>