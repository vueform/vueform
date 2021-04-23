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
          button: 'btn',
          previous: 'btn-secondary',
          next: 'btn-primary',
          finish: 'btn-primary',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>