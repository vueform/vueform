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
          container: 'nav nav-pills nav-fill mb-3',
        },
      }
    }
  }
</script>