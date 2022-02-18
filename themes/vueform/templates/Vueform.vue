<script>
  import Vueform from './../../blank/templates/Vueform.vue'

  export default {
    name: 'Vueform',
    render: Vueform.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          form: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>