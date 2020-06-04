<template>
  <li
    v-if="visible"
    :class="classes"
  >
    <a
      href="#"
      :class="theme.classes.formWizardStepLink"
      @click.prevent="select"
    >
      {{ label }}
    </a>
  </li>
</template>

<script>
  import FormWizardStep from './../../../components/FormWizardStep'

  export default {
    mixins: [FormWizardStep],
    computed: {
      classes() {
        return [
          this.theme.classes.formWizardStep,

          this.active
            ? this.theme.classes.formWizardStepActive
            : this.theme.classes.formWizardStepInactive,

          this.invalid ? this.theme.classes.formWizardStepInvalid : '',
          this.disabled ? this.theme.classes.formWizardStepDisabled : '',
          this.completed ? this.theme.classes.formWizardStepCompleted : '',
          this.pending ? this.theme.classes.formWizardStepPending : '',
        ]
      },
    }
  }
</script>