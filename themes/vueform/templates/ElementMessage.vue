<script>
  import ElementMessage from './../../blank/templates/ElementMessage.vue'

  export default {
    name: 'ElementMessage',
    render: ElementMessage.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-message',
          container_sm: '',
          container_md: '',
          container_lg: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-element-message {
    font-size: var(--vf-element-text-font-size);
    line-height: var(--vf-element-text-line-height);
    color: var(--vf-success-color);
    margin-top: 0.25rem;
  }
</style>