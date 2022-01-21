<template>
  <li :class="classes.container">
    <a
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      {{ language }}
    </a>
  </li>
</template>

<script>
  export default {
    name: 'FormLanguage',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          wrapper_active: '',
          wrapper_inactive: ''
        },
      }
    }
  }
</script>

<style lang="scss">
</style>