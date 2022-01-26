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
          container_sm: '',
          container_md: '',
          container_lg: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        },
      }
    }
  }
</script>

<style lang="scss">
</style>