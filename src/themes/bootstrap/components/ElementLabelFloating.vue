<template>
  <span
    :class="[classes.floatingLabel, {[classes.floatingLabelVisible]: visible}]"
    v-html="floating"
  ></span>
</template>

<script>
  export default {
    name: 'ElementLabelFloating',
    data() {
      return {
        defaultClasses: {
          floatingLabel: 'floating-label',
          floatingLabelVisible: 'floating-label-visible',
        }
      }
    }
  }
</script>