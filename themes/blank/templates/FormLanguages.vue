<template>
  <ul :class="classes.container">
    <slot>
      <FormLanguage
        v-for="(lang, code, key) in languages"
        :language="lang"
        :code="code"
        :key="key"
        @select="handleSelect"
      />
    </slot>
  </ul>
</template>
<script>
  export default {
    name: 'FormLanguages',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>