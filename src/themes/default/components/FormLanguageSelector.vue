<template>
  <ul :class="classes.container">
    <FormLanguageSelectorTab
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
    name: 'FormLanguageSelector',
    data() {
      return {
        defaultClasses: {
          container: 'nav nav-pills nav-justified form-language-selectors',
        },
      }
    }
  }
</script>