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
          wrapper_sm: 'vf-radiogroup-blocks-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-radiogroup-blocks-wrapper-lg',
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
  .vf-radiogroup-blocks-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: var(--vf-shadow-input);
    border-radius: var(--vf-radius-large);

    &.vf-radiogroup-blocks-wrapper-sm {
      border-radius: var(--vf-radius-large-sm);
    }

    &.vf-radiogroup-blocks-wrapper-lg {
      border-radius: var(--vf-radius-large-lg);
    }
  }
</style>