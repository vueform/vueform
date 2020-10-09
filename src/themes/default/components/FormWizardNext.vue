<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="next"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :wizard$="wizard$" />
  </button>
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