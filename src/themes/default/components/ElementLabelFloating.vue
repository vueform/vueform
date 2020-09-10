<template>
  <span
    :class="[classes.floatingLabel, {[classes.floatingLabelVisible]: visible}]"
  >
    <slot></slot>
  </span>
</template>

<script>
  import ElementLabelFloating from './../../../components/ElementLabelFloating'

  export default {
    mixins: [ElementLabelFloating],
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