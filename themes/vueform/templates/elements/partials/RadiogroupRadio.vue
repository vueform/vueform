<script>
  import RadiogroupRadio from './../../../../blank/templates/elements/partials/RadiogroupRadio.vue'

  export default {
    name: 'RadiogroupRadio',
    render: RadiogroupRadio.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-radio-wrapper',
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
  // Some styles are contained in Vueform.vue & RadiogroupElement.vue
</style>