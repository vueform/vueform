<template>
  <span :class="classes.container" v-show="visible">
    <slot v-if="hasLabel" name="label"></slot>
    <slot name="before"></slot>
    <slot name="field"></slot>
    <slot name="between"></slot>
    <slot name="description"></slot>
    <slot name="error"></slot>
    <slot name="message"></slot>
    <slot name="after"></slot>
  </span>
</template>

<script>
  export default {
    name: 'ElementLayoutInline',
    data() {
      return {
        defaultClasses: {
          container: '',
          error: 'has-error',
        },
      }
    },
  }
</script>