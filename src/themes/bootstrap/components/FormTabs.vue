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
    />
  </ul>
</template>

<script>
  export default {
    name: 'FormTabs',
    data() {
      return {
        defaultClasses: {
          container: 'nav nav-tabs form-tabs'
        }
      }
    },
  }
</script>