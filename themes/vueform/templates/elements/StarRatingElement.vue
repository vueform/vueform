<script>
import StarRatingElement from './../../../blank/templates/elements/StarRatingElement.vue'

export default {
  name: 'StarRatingElement',
  render: StarRatingElement.render,
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: '',
        wrapper: 'vf-star-rating-wrapper',
        wrapper_sm: 'vf-star-rating-wrapper-sm',
        wrapper_md: '',
        wrapper_lg: 'vf-star-rating-wrapper-lg',
        wrapper_left: 'vf-star-rating-wrapper-left',
        wrapper_right: 'vf-star-rating-wrapper-right',
        wrapper_disabled: 'vf-star-rating-disabled',
        star: 'vf-star-rating-star',
        $wrapper: (classes, { Size, align, isDisabled }) => ([
          classes.wrapper,
          classes[`wrapper_${Size}`],
          align === 'left' ? classes.wrapper_left : null,
          align === 'right' ? classes.wrapper_right : null,
          isDisabled ? classes.wrapper_disabled : null,
        ]),
      }
    }
  }
}
</script>

<style lang="scss">
.vf-star-rating-wrapper,
.vf-star-rating-wrapper-sm,
.vf-star-rating-wrapper-lg {
  display: flex;
  width: fit-content;
  vertical-align: middle;
  line-height: 0;

  .vf-star-rating-star {
    pointer-events: none;
  }

  &.vf-star-rating-wrapper-left {
    justify-self: start;
    margin-right: auto;
  }

  &.vf-star-rating-wrapper-right {
    justify-self: end;
    margin-left: auto;
  }

  &.vf-star-rating-disabled {
    pointer-events: none;
  }
}

.vf-star-rating-wrapper {
  font-size: calc(var(--vf-font-size) * 2.5);
}

.vf-star-rating-wrapper-sm {
  font-size: calc(var(--vf-font-size) * 2);
}

.vf-star-rating-wrapper-lg {
  font-size: calc(var(--vf-font-size) * 3);
}
</style>