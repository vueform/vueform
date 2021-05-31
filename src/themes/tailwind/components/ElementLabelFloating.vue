<template>
  <div :class="classes.wrapper">
    <span
      :class="classes.label"
      v-html="floating"
    ></span>
  </div>
</template>

<script>
  export default {
    name: 'ElementLabelFloating',
    data() {
      return {
        defaultClasses: {
          wrapper: '',
          label: '',
          labelInvisible: '',
          labelVisible: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>