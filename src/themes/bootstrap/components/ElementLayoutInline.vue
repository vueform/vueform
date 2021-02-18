<template>
  <span :class="classes.container" v-show="visible">
    <slot name="field"></slot>
  </span>
</template>

<script>
  export default {
    name: 'ElementLayoutInline',
    data() {
      return {
        defaultClasses: {
          container: 'lf-element-inline',
        },
      }
    },
  }
</script>