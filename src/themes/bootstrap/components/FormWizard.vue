<template>
  <ul
    :class="classes.container"
  >
    <template v-for="(step, name) in steps">
      <component :is="components.FormWizardStep"
        :step="step"
        :name="name"
        :elements$="elements$"
        :visible$="visible$"
        :key="name"
        @select="handleSelect"
        ref="steps$"
      />
    </template>
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