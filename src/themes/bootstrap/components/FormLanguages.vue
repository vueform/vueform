<template>
  <ul :class="classes.container">
    <FormLanguage
      v-for="(lang, code, key) in languages"
      :language="lang"
      :code="code"
      :key="key"
      @select="handleSelect"
    />
  </ul>
</template>
<script>
  export default {
    name: 'FormLanguages',
    data() {
      return {
        defaultClasses: {
          container: 'form-languages nav nav-pills nav-fill',
        },
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .nav.form-languages {
    margin-bottom: calc(#{$spacer} * 2);

    &.nav-fill {
      .nav-item {
        flex: 1;
      }
    }
  }
</style>