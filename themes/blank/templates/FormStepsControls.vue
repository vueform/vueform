<template>
  <div :class="classes.container">
    <FormStepsControl type="previous" :labels="labels"><slot name="previous"/></FormStepsControl>
    <FormStepsControl type="next" :labels="labels"><slot name="next"/></FormStepsControl>
    <FormStepsControl type="finish" :labels="labels"><slot name="finish"/></FormStepsControl>
  </div>
</template>

<script>
  export default {
    name: 'FormStepsControls',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>