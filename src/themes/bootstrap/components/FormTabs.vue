<template>
  <ul :class="classes.container">
    <component
      v-for="(tab, name, i) in tabs"
      :is="components.FormTab"
      :tab="tab"
      :name="name"
      :elements$="elements$"
      :index="i"
      :key="name"
      @select="select"
      :ref="setRef(formTabs$, i)"
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