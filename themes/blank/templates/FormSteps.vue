<template>
  <ul :class="classes.container">
    <slot>
      <FormStep
        v-for="(step, name) in steps"
        v-bind="step"
        :name="name"
        :key="name"
     />
    </slot>
  </ul>
</template>

<script>
  export default {
    name: 'FormSteps',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>