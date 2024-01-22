<script>
  import StaticElement from './../../../blank/templates/elements/StaticElement.vue'

  export default {
    name: 'StaticElement',
    render: StaticElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          content: 'vf-static',
          content_sm: 'vf-static-sm',
          content_md: '',
          content_lg: 'vf-static-lg',
          content_top_1: 'vf-static-tag-top-1',
          content_top_2: 'vf-static-tag-top-2',
          content_top_3: 'vf-static-tag-top-3',
          content_bottom_1: 'vf-static-tag-bottom-1',
          content_bottom_2: 'vf-static-tag-bottom-2',
          content_bottom_3: 'vf-static-tag-bottom-3',
          tag: 'vf-static-tag',
          tag_sm: 'vf-static-tag-sm',
          tag_md: '',
          tag_lg: 'vf-static-tag-lg',
          tag_top_1: 'vf-static-tag-top-1',
          tag_top_2: 'vf-static-tag-top-2',
          tag_top_3: 'vf-static-tag-top-3',
          tag_bottom_1: 'vf-static-tag-bottom-1',
          tag_bottom_2: 'vf-static-tag-bottom-2',
          tag_bottom_3: 'vf-static-tag-bottom-3',
          tag_left: 'vf-static-tag-left',
          tag_center: 'vf-static-tag-center',
          tag_right: 'vf-static-tag-right',
          tag_p: 'vf-static-tag-p',
          tag_h1: 'vf-static-tag-h1',
          tag_h2: 'vf-static-tag-h2',
          tag_h3: 'vf-static-tag-h3',
          tag_h4: 'vf-static-tag-h4',
          tag_blockquote: 'vf-static-tag-blockquote',
          tag_a: 'vf-static-tag-a',
          tag_hr: 'vf-static-tag-hr',
          tag_img: 'vf-static-tag-img',
          $content: (classes, { Size, top, bottom }) => ([
            classes.content,
            classes[`content_${Size}`],
            top >= 1 ? classes[`content_top_${top}`] : null,
            bottom >= 1 ? classes[`content_bottom_${bottom}`] : null,
          ]),
          $tag: (classes, { Size, tag, align, top, bottom }) => ([
            classes.tag,
            classes[`tag_${Size}`],
            classes[`tag_${tag}`],
            align === 'left' ? classes.tag_left : null,
            align === 'center' ? classes.tag_center : null,
            align === 'right' ? classes.tag_right : null,
            top >= 1 ? classes[`tag_top_${top}`] : null,
            bottom >= 1 ? classes[`tag_bottom_${bottom}`] : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Styles contained in scss/_static.scss */
</style>