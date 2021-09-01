<template>
  <button
    v-if="visible && label && isLabelComponent"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  >
    <component :is="label" :step$="current$" />
  </button>
  <button
    v-else-if="visible && label"
    v-html="label"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  ></button>
  <button
    v-else-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  ><slot></slot></button>
</template>

<script>
  export default {
    name: 'FormStepsControl',
    data() {
      return {
        defaultClasses: {
          button: '',
          button_previous_enabled: '',
          button_previous_disabled: '',
          button_next_enabled: '',
          button_next_disabled: '',
          button_next_loading: '',
          button_finish_enabled: '',
          button_finish_disabled: '',
          button_finish_loading: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>