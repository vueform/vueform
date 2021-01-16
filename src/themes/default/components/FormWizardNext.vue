<template>
  <button
    v-if="visible && isLabelComponent"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="next"
  >
    <component :is="label" :step$="current$" />
  </button>
  <button
    v-else-if="visible"
    v-html="label"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="next"
  ></button>
</template>

<script>
  import FormWizardNext from './../../../components/FormWizardNext'

  export default {
    name: 'FormWizardNext',
    mixins: [FormWizardNext],
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-primary',
        }
      }
    }
  }
</script>