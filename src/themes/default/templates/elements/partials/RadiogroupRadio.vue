<script>
  import RadiogroupRadio from './../../../../blank/templates/elements/partials/RadiogroupRadio'

  export default {
    name: 'RadiogroupRadio',
    render: RadiogroupRadio.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-radio-container',
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