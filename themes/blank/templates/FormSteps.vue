<template>
  <div :class="classes.container">
    <ul :class="classes.wrapper" role="tablist">
      <slot>
        <FormStep
          v-for="(step, name) in steps"
          v-bind="step"
          :name="name"
          :key="name"
      />
      </slot>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'FormSteps',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>