<template>
  <li v-show="visible" :class="classes.container">
    <a
      v-if="isLabelComponent"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <component :is="label" :tab="tab" :form$="form$" />
    </a>
    <a
      v-else
      v-html="label"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    ></a>
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