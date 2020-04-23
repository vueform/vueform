<template>
  <span
    :class="[theme.classes.floatingLabel, {[theme.classes.floatingLabelVisible]: visible}]"
  >
    <slot></slot>
  </span>
</template>

<script>
  import ElementLabelFloating from './../../../components/ElementLabelFloating'

  export default {
    mixins: [ElementLabelFloating],
  }
</script>