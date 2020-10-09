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
  import init from './../../../init'

  export default {
    mixins: [FormTabs],
    setup: (props, context) => init(props, context, FormTabs, {
      container: 'nav nav-tabs form-tabs'
    }),
  }
</script>