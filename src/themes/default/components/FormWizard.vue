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
      @select="handleSelect"
      v-ref:wizardSteps$
    />
  </ul>
</template>

<script>
  import FormWizard from './../../../components/FormWizard'
  import init from './../../../init'

  export default {
    mixins: [FormWizard],
    setup: (props, context) => init(props, context, FormWizard, {
      container: 'form-wizard',
    }),
  }
</script>