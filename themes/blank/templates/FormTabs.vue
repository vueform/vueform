<template>
  <ul :class="classes.container">
    <slot>
      <FormTab
        v-for="(tab, name, i) in tabs"
        v-bind="tab"
        :name="name"
        :index="i"
        :key="name"
     />
    </slot>
  </ul>
</template>

<script>
  export default {
    name: 'FormTabs',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>