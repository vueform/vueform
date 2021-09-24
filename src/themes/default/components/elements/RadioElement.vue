<script>
  import RadioElement from './../../../blank/components/elements/RadioElement'

  export default {
    name: 'RadioElement',
    render: RadioElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'vf-radio-wrapper',
          input: 'vf-radio',
          input_enabled: '',
          input_disabled: '',
          label: 'vf-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>