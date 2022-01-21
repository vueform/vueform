<script>
  import ElementError from './../../blank/templates/ElementError.vue'

  export default {
    name: 'ElementError',
    render: ElementError.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-error',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-element-error {
    font-size: var(--vf-element-text-font-size);
    line-height: var(--vf-element-text-line-height);
    color: var(--vf-error-color);
    margin-top: 0.25rem;
  }
</style>