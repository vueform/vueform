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
          container: 'nav-item',
          wrapper: 'nav-link',
          active: 'active',
          inactive: ''
        },
        classKeys: {
          state: 'wrapper'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>