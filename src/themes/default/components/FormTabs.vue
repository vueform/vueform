<template>
  <ul :class="classes.container">
    <component
      v-for="(tab, name) in tabs"
      :is="components.FormTab"
      :tab="tab"
      :name="name"
      :elements$="elements$"
      :visible$="visible$"
      :key="name"
      @select="select"
      v-ref:formTabs$
    />
  </ul>
</template>

<script>
  import FormTabs from './../../../components/FormTabs'

  export default {
    name: 'FormTabs',
    mixins: [FormTabs],
    data() {
      return {
        defaultClasses: {
          container: 'nav nav-tabs form-tabs'
        }
      }
    },
  }
</script>