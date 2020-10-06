<template>
  <ul :class="classes.container">
      <component
        v-for="(lang, code, key) in languages"
        :is="components.FormLanguageSelectorTab" 
        :language="lang"
        :code="code"
        @select="select"
        :key="key"
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