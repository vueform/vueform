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
        merge: true,
        defaultClasses: {
          container: '',
          label: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>