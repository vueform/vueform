<template>
  <!-- If label is a component -->
  <button
    v-if="visible && label && isLabelComponent"
  	:disabled="isDisabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  	@keypress.enter.space.prevent="handleClick"
  >
    <component :is="label" :step$="current$"/>
  </button>

  <!-- If label is HTML -->
  <button
    v-else-if="visible && label"
    v-html="label"
  	:disabled="isDisabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  	@keypress.enter.space.prevent="handleClick"
  ></button>

  <!-- If label is a slot -->
  <button
    v-else-if="visible"
  	:disabled="isDisabled"
    :class="classes.button"
  	@click.prevent="handleClick"
  	@keypress.enter.space.prevent="handleClick"
  ><slot/></button>
</template>

<script>
  export default {
    name: 'FormStepsControl',
    data() {
      return {
        merge: true,
        defaultClasses: {
          button: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>