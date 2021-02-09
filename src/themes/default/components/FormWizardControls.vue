<template>
  <div
    :class="classes.container"
  >
    <component :is="components.FormWizardPrevious"
      :wizard$="wizard$"
    />

    <component :is="components.FormWizardNext"
      :wizard$="wizard$"
    />

    <component :is="components.FormWizardFinish"
      :wizard$="wizard$"
    />
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