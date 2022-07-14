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
          wrapper: 'vf-radiogroup-tabs-wrapper',
          wrapper_sm: 'vf-radiogroup-tabs-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radiogroup-tabs-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radiogroup-tabs-wrapper {
    display: grid;
    grid-auto-flow: column;
    box-shadow: var(--vf-shadow-input);
    border-radius: var(--vf-radius-large);

    &.vf-radiogroup-tabs-wrapper-sm {
      border-radius: var(--vf-radius-large-sm);
    }

    &.vf-radiogroup-tabs-wrapper-lg {
      border-radius: var(--vf-radius-large-lg);
    }
  }
</style>