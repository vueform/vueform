<template>
  <button
    v-if="visible && isLabelComponent"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  >
    <component :is="label" :step$="current$" />
  </button>
  <button
    v-else-if="visible"
    v-html="label"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  ></button>
</template>

<script>
  export default {
    name: 'FormStepsControl',
    data() {
      return {
        defaultClasses: {
          button: '',
          button_brevious: '',
          button_next: '',
          button_finish: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>