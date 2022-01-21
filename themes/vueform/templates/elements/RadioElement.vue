<script>
  import RadioElement from './../../../blank/templates/elements/RadioElement.vue'

  export default {
    name: 'RadioElement',
    render: RadioElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radio-wrapper',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          text: 'vf-radio-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>