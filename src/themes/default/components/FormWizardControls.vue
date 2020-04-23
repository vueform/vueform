<template>
  <div
    :class="theme.classes.formWizardControls"
  >
    <component :is="theme.components.FormWizardPrevious"
      :wizard$="wizard$"
    />

    <component :is="theme.components.FormWizardNext"
      :wizard$="wizard$"
    />

    <component :is="theme.components.FormWizardFinish"
      :wizard$="wizard$"
    />
  </div>
</template>

<script>
  import FormWizardControls from './../../../components/FormWizardControls'

  export default {
    mixins: [FormWizardControls],
  }
</script>