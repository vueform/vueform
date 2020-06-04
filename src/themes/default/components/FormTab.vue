<template>
  <li v-if="visible" :class="classes.container">
    <a href="#" :class="classes.wrapper" @click.prevent="select">
      {{ label }}
    </a>
  </li>
</template>

<script>
  import FormTab from './../../../components/FormTab'

  export default {
    mixins: [FormTab],
    data() {
      return {
        defaultClasses: {
          container: 'nav-item',
          active: 'active',
          inactive: '',
          valid: '',
          invalid: 'has-error',
          wrapper: 'nav-link',
        },
        containers: {
          state: 'wrapper'
        }
      }
    }
  }
</script>