<script>
  import FormLanguages from './../../blank/templates/FormLanguages.vue'

  export default {
    name: 'FormLanguages',
    render: FormLanguages.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-languages',
          container_sm: 'vf-languages-sm',
          container_md: '',
          container_lg: 'vf-languages-lg',
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
  .vf-languages {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0 0 var(--vf-gutter-lg) 0;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-languages-sm {
      margin: 0 0 var(--vf-gutter) 0;
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-languages-lg {
      margin: 0 0 var(--vf-gutter-lg) 0;
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }
</style>