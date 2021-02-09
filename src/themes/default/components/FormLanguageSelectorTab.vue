<template>
  <li :class="classes.container">
      <a
        href="#"
        :class="classes.wrapper"
        @click.prevent="select"
      >
        {{ language.label }}
      </a>
    </li>
</template>

<script>
  export default {
    name: 'FormLanguageSelectorTab',
    data() {
      return {
        defaultClasses: {
          container: 'nav-item',
          wrapper: 'nav-link',
          active: 'active',
          inactive: 'inactive'
        },
        containers: {
          state: 'wrapper'
        }
      }
    }
  }
</script>