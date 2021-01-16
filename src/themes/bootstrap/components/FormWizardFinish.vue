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