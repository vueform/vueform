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
        defaultClasses: {
          container: 'form-steps',
        }
      }
    },
  }
</script>

<style lang="scss">

  .form-steps {
    list-style: none;
    margin-bottom: calc(#{$spacer} * 2);
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: 20px;
  }
</style>