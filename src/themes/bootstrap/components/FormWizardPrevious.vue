<template>
  <button
    v-if="visible && isLabelComponent"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="previous"
  >
    <component :is="label" :step$="current$" />
  </button>
  <button
    v-else-if="visible"
    v-html="label"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="previous"
  ></button>
</template>

<script>
  import FormWizardPrevious from './../../../components/FormWizardPrevious'

  export default {
    name: 'FormWizardPrevious',
    mixins: [FormWizardPrevious],
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-secondary',
        }
      }
    }
  }
</script>