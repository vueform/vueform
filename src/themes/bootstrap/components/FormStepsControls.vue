<template>
  <div :class="classes.container">
    <FormStepsControl type="previous" />
    <FormStepsControl type="next" />
    <FormStepsControl type="finish" />
  </div>
</template>

<script>
  export default {
    name: 'FormStepsControls',
    data() {
      return {
        defaultClasses: {
          container: 'form-steps-controls'
        }
      }
    }
  }
</script>