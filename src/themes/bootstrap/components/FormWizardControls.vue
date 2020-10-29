<template>
  <div
    :class="classes.formWizardControls"
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
  import FormWizardControls from './../../../components/FormWizardControls'

  export default {
    name: 'FormWizardControls',
    mixins: [FormWizardControls],
    data() {
      return {
        defaultClasses: {
          container: 'form-wizard-controls'
        }
      }
    }
  }
</script>