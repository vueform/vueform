<template>
  <div :class="classes.container">
    <FormWizardControl type="previous" />
    <FormWizardControl type="next" />
    <FormWizardControl type="finish" />
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