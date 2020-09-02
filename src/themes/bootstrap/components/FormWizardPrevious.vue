<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="previous"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :wizard$="wizard$" />
  </button>
</template>

<script>
  import FormWizardPrevious from './../../../components/FormWizardPrevious'

  export default {
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