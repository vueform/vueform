<template>
  <ul
    :class="classes.container"
  >
    <component
      v-for="(step, name) in steps" :key="name"
      :is="components.FormWizardStep"
      :step="step"
      :name="name"
      :elements$="elements$"
      :visible$="visible$"
      @select="handleSelect"
      ref="steps$"
    />
  </ul>
</template>

<script>
  import FormWizard from './../../../components/FormWizard'

  export default {
    mixins: [FormWizard],
    data() {
      return {
        defaultClasses: {
          container: 'form-wizard',
        }
      }
    }
  }
</script>