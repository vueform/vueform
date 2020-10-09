<template>
  <button
    v-if="visible"
  	:disabled="disabled"
    :class="classes.button"
  	@click.prevent="finish"
    v-html-if="{label: !isLabelComponent}"
  >
    <component v-if="isLabelComponent" :is="label" :wizard$="wizard$" />
  </button>
</template>

<script>
  import FormWizardFinish from './../../../components/FormWizardFinish'

  export default {
    name: 'FormWizardFinish',
    mixins: [FormWizardFinish],
    data() {
      return {
        defaultClasses: {
          button: 'btn btn-primary',
        }
      }
    }
  }
</script>