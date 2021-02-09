<template>
  <button
    v-if="visible && isLabelComponent"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="finish"
  >
    <component :is="label" :step$="current$" />
  </button>
  <button
    v-else-if="visible"
    v-html="label"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="finish"
  ></button>
</template>

<script>
  export default {
    name: 'FormWizardFinish',
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-primary',
        }
      }
    }
  }
</script>