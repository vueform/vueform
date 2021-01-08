<template>
  <span
    :class="[classes.floatingLabel, {[classes.floatingLabelVisible]: visible}]"
    v-html="floating"
  ></span>
</template>

<script>
  import ElementLabelFloating from './../../../components/ElementLabelFloating'

  export default {
    name: 'ElementLabelFloating',
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