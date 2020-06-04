<template>
  <li :class="classes.container" v-if="visible">
    <a
      href="#"
      :class="classes.wrapper"
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
    data() {
      return {
        defaultClasses: {
          container: 'wizard-step',
          wrapper: '',
          active: 'wizard-step-active',
          inactive: '',
          invalid: 'wizard-step-errors',
          valid: '',
          disabled: 'wizard-step-disabled',
          enabled: '',
          completed: 'wizard-step-completed',
          incompleted: '',
          pending: 'wizard-step-pending',
        },
        containers: {
          state: 'container'
        }
      }
    }
  }
</script>