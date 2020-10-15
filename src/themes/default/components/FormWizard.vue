<template>
  <ul
    :class="classes.container"
  >
    <component
      v-for="(step, name) in steps"
      :is="components.FormWizardStep"
      :step="step"
      :name="name"
      :elements$="elements$"
      :visible$="visible$"
      :key="name"
      @select="select"
      v-ref:wizardSteps$
    />
  </ul>
</template>

<script>
  import FormWizard from './../../../components/FormWizard'

  export default {
    name: 'FormWizard',
    mixins: [FormWizard],
    data() {
      return {
        defaultClasses: {
          container: 'form-wizard',
        }
      }
    },
  }
</script>