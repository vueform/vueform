<template>
  <ul
    :class="theme.classes.formLanguageSelectors"
  >
    <li
      v-for="(lang, code, key) in languages"
      :class="selectorClass(code)"
      :key="key"
    >
      <a
        href="#"
        @click.prevent="select(code)"
      >
        {{ lang.label }}
      </a>
    </li>
  </ul>
</template>

<script>
  import FormLanguageSelector from './../../../components/FormLanguageSelector'

  export default {
    mixins: [FormLanguageSelector],
    methods: {
      selectorClass(language) {
        return [
          this.theme.classes.formLanguageSelector,
          language == this.language
            ? this.theme.classes.formLanguageSelectorActive
            : this.theme.classes.formLanguageSelectorInactive
        ]
      },
    }
  }
</script>