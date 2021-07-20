<script>
  import ElementError from './../../blank/components/ElementError'

  export default {
    name: 'ElementError',
    render: ElementError.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-element-error',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-element-error {
    font-size: var(--form-element-text-font-size);
    line-height: var(--form-element-text-line-height);
    color: var(--form-element-error-color);
    margin-top: 0.25rem;
  }
</style>