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
          wrapper: 'vf-radiogroup-blocks-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radiogroup-blocks-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>