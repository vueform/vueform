<template>
  <li :class="classes.container" v-show="visible">
    <a
      v-if="isLabelComponent"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <component :is="label" :form$="form$" />
    </a>
    <a
      v-else
      v-html="label"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    ></a>
  </li>
</template>

<script>
  export default {
    name: 'FormStep',
    data() {
      return {
        defaultClasses: {
          container: 'steps-step',
          wrapper: '',
          active: 'steps-step-active',
          inactive: '',
          invalid: 'steps-step-errors',
          valid: '',
          disabled: 'steps-step-disabled',
          enabled: '',
          completed: 'steps-step-completed',
          incompleted: '',
          pending: 'steps-step-pending',
        },
        containers: {
          state: 'container'
        }
      }
    }
  }
</script>

<style>
.steps-step-active {
  font-weight: bold;
}
.steps-step-disabled {
  opacity: 0.3;
}
</style>