<template>
  <ul :class="classes.container">
    <component
      v-for="(step, name, i) in steps"
      :is="components.FormWizardStep"
      :step="step"
      :name="name"
      :elements$="elements$"
      :key="name"
      :index="i"
      @select="select"
    />
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