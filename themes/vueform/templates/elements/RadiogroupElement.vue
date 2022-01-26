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
          wrapper_sm: 'vf-radiogroup-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radiogroup-wrapper-lg',
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
  .vf-radiogroup-wrapper {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));
    cursor: pointer;

    &.vf-radiogroup-wrapper-sm {
      padding-top: calc(var(--vf-input-py-sm) + var(--vf-border-width));
    }

    &.vf-radiogroup-wrapper-lg {
      padding-top: calc(var(--vf-input-py-lg) + var(--vf-border-width));
    }

    .vf-radio-container {
      padding-top: 0;
    }
  }
</style>