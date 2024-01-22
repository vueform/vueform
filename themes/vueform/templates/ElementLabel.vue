<script>
  import ElementLabel from './../../blank/templates/ElementLabel.vue'

  export default {
    name: 'ElementLabel',
    render: ElementLabel.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-label',
          container_sm: 'vf-label-sm',
          container_md: '',
          container_lg: 'vf-label-lg',
          container_horizontal_sm: 'vf-horizontal-label-sm',
          container_horizontal_md: 'vf-horizontal-label',
          container_horizontal_lg: 'vf-horizontal-label-lg',
          container_vertical_sm: 'vf-vertical-label-sm',
          container_vertical_md: 'vf-vertical-label',
          container_vertical_lg: 'vf-vertical-label-lg',
          wrapper: '',
          $container: (classes, { el$, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            !el$.inline ? el$.columnsClasses.label : null,
            el$.cols.default.label < 12 ? classes[`container_horizontal_${Size}`] : classes[`container_vertical_${Size}`],
            ...(Object.keys(el$.cols).length > 1 ? (el$.$vueform.config.breakpoints||['sm', 'md', 'lg', 'xl', '2xl']).map((breakpoint) => {
              if (!el$.cols[breakpoint]?.label) {
                return null
              }

              return el$.cols[breakpoint].label < 12
                ? classes[`container_horizontal_${Size}`].map(c => `vf-${breakpoint}:${c}`).join(' ')
                : classes[`container_vertical_${Size}`].map(c => `vf-${breakpoint}:${c}`).join(' ')
            }) : []),
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Styles can be found at scss/_label.scss */
</style>