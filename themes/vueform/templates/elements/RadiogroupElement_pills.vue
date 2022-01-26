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
          wrapper: 'vf-radiogroup-pills-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radiogroup-pills-wrapper {
    display: grid;
    grid-auto-flow: column;
  }
</style>