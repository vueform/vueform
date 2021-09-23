<template>
  <li v-show="visible" :class="classes.container">
    <slot :classes="classes" :select="select">
      <!-- If label is a component -->
      <a
        v-if="isLabelComponent"
        href="#"
        :class="classes.wrapper"
        @click.prevent="select"
      >
        <component :is="tabLabel" :form$="form$"/>
      </a>

      <!-- If label is HTML -->
      <a
        v-else
        v-html="tabLabel"
        href="#"
        :class="classes.wrapper"
        @click.prevent="select"
    ></a>
    </slot>
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
          wrapper_active: '',
          wrapper_inactive: '',
          wrapper_valid: '',
          wrapper_invalid: '',
        },
      }
    }
  }
</script>

<style lang="scss">
</style>