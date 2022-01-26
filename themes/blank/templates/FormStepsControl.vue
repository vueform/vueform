<template>
  <!-- If label is a component -->
  <button
    v-if="visible && label && isLabelComponent"
  	:disabled="isDisabled"
    :class="classes.button"
  	@click.prevent="handleClick"
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
  ></button>

  <!-- If label is a slot -->
  <button
    v-else-if="visible"
  	:disabled="isDisabled"
    :class="classes.button"
  	@click.prevent="handleClick"
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
          button_previous_enabled: '',
          button_previous_disabled: '',
          button_next_enabled: '',
          button_next_disabled: '',
          button_next_loading: '',
          button_finish_enabled: '',
          button_finish_disabled: '',
          button_finish_loading: '',
          button_sm: '',
          button_md: '',
          button_lg: '',
          $button: (classes, { isDisabled, isLoading, type, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            isDisabled ? classes[`button_${type}_disabled`] : classes[`button_${type}_enabled`],
            isLoading ? classes[`button_${type}_loading`] : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>