<template>
  <div :class="classes.container">
    <FormStepsControl type="previous" :labels="labels"><slot name="previous"></slot></FormStepsControl>
    <FormStepsControl type="next" :labels="labels"><slot name="next"></slot></FormStepsControl>
    <FormStepsControl type="finish" :labels="labels"><slot name="finish"></slot></FormStepsControl>
  </div>
</template>

<script>
  export default {
    name: 'FormStepsControls',
    data() {
      return {
        defaultClasses: {
          container: ''
        }
      }
    }
  }
</script>

<style lang="scss">
</style>