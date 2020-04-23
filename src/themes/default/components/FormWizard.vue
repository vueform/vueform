<template>
  <ul
    :class="theme.classes.formWizard"
  >
    <template v-for="(step, name, key) in steps">
      <component :is="theme.components.FormWizardStep"
        :step="step"
        :name="name"
        :elements$="elements$"
        :visible$="visible$"
        :key="key"
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
  }
</script>