<script>
  import RadiogroupRadio from './../../../../blank/components/elements/partials/RadiogroupRadio'

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
          label: 'vf-radio-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>