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
          wrapper: 'vf-radiogroup-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radiogroup-wrapper {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
    cursor: pointer;

    .vf-radio-container {
      padding-top: 0;
    }
  }
</style>