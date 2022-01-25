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
          wrapper: 'vf-radiogroup-wrapper-blocks',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radiogroup-wrapper-blocks {
    display: flex;
  }
</style>