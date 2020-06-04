<template>
  <ul :class="classes.container">

    <template v-for="(tab, name, key) in tabs">
      <component :is="components.FormTab"
        :tab="tab"
        :name="name"
        :elements$="elements$"
        :key="key"
        ref="tabs$"
        @select="select"
      />
    </template>

  </ul>
</template>

<script>
  import FormTabs from './../../../components/FormTabs'

  export default {
    mixins: [FormTabs],
    data() {
      return {
        defaultClasses: {
          container: 'nav nav-tabs form-tabs'
        }
      }
    }
  }
</script>