<template>
  <ul :class="classes.container">
    <component
      :is="components.FormLanguageSelectorTab" 
      v-for="(lang, code, key) in languages"
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