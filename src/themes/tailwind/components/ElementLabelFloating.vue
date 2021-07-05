<template>
  <div :class="classes.container">
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
          container: '',
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