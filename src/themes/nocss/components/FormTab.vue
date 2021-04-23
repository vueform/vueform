<template>
  <li v-show="visible" :class="classes.container">
    <a
      v-if="isLabelComponent"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <component :is="tabLabel" :form$="form$" />
    </a>
    <a
      v-else
      v-html="tabLabel"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    ></a>
  </li>
</template>

<script>
  export default {
    name: 'FormTab',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          active: '',
          inactive: '',
          valid: '',
          invalid: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>