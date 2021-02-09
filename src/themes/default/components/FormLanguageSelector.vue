<template>
  <ul :class="classes.container">
    <component
      v-for="(lang, code, key) in languages"
      :is="components.FormLanguageSelectorTab" 
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