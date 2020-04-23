<template>
  <ul
    :class="theme.classes.formLanguageSelectors"
  >
    <li
      v-for="(lang, code, key) in languages"
      :class="theme.classes.formLanguageSelectorContainer"
      :key="key"
    >
      <a
        href="#"
        :class="selectorClass(code)"
        @click.prevent="select(code)"
      >
        {{ lang.label }}
      </a>
    </li>
  </ul>
</template>

<script>
  import FormLanguageSelector from './../../default/components/FormLanguageSelector'

  export default {
    mixins: [FormLanguageSelector],
  }
</script>