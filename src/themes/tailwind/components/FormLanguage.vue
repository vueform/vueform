<template>
  <li :class="classes.container">
    <a
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      {{ language.label }}
    </a>
  </li>
</template>

<script>
  export default {
    name: 'FormLanguage',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          wrapperActive: '',
          wrapperInactive: ''
        },
      }
    }
  }
</script>

<style lang="scss">
</style>