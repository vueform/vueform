<template>
  <ul :class="classes.container">
    <slot>
      <FormWizardStep
        v-for="(step, name) in steps"
        v-bind="step"
        :name="name"
        :key="name"
      />
    </slot>
  </ul>
</template>

<script>
  export default {
    name: 'FormWizard',
    data() {
      return {
        defaultClasses: {
          container: 'form-wizard',
        }
      }
    },
  }
</script>