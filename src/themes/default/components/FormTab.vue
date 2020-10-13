<template>
  <li v-if="visible" :class="classes.container">
    <a
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
      v-html-if="{label: !isLabelComponent}"
    >
      <component v-if="isLabelComponent" :is="label" :tab$="tab$" />
    </a>
  </li>
</template>

<script>
  import FormTab from './../../../components/FormTab'

  export default {
    name: 'FormTab',
    mixins: [FormTab],
    data() {
      return {
        defaultClasses: {
          container: 'nav-item',
          active: 'active',
          inactive: 'inactive',
          valid: 'valid',
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