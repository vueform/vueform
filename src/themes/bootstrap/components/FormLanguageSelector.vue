<template>
  <ul :class="classes.container">
      <component
        v-for="(lang, code, key) in languages"
        :is="components.FormLanguageSelectorTab" 
        :language="lang"
        :code="code"
        :key="key"
        @select="select"
      />
  </ul>
</template>
<script>
  import FormLanguageSelector from './../../../components/FormLanguageSelector'

  export default {
    mixins: [FormLanguageSelector],
    data() {
      return {
        defaultClasses: {
          container: 'nav nav-pills nav-justified form-language-selectors',
        },
      }
    }
  }
</script>