<template>
  <li :class="classes.container">
    <a
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      {{ language }}
    </a>
  </li>
</template>

<script>
  export default {
    name: 'FormLanguage',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          wrapper_sm: '',
          wrapper_md: '',
          wrapper_lg: '',
          wrapper_active: '',
          wrapper_inactive: '',
          $wrapper: (classes, { selected, Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
            selected ? classes.wrapper_active : classes.wrapper_inactive
          ]),
        },
      }
    }
  }
</script>

<style lang="scss">
</style>