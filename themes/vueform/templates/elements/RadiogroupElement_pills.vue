<script>
  import RadiogroupElement from './../../../blank/templates/elements/RadiogroupElement.vue'

  export default {
    name: 'RadiogroupElement',
    render: RadiogroupElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-radiogroup-wrapper-pills',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radiogroup-wrapper-pills {
    display: grid;
  }
</style>