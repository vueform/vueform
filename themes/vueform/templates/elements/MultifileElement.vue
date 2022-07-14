<script>
  import MultifileElement from './../../../blank/templates/elements/MultifileElement.vue'

  export default {
    name: 'MultifileElement',
    render: MultifileElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          list: 'vf-multifile-list',
          list_sm: 'vf-multifile-list-sm',
          list_md: '',
          list_lg: 'vf-multifile-list-lg',
          list_file: 'vf-multifile-list-file',
          list_file_sm: '',
          list_file_md: '',
          list_file_lg: '',
          list_image: 'vf-multifile-list-image',
          list_image_sm: 'vf-multifile-list-image-sm',
          list_image_md: '',
          list_image_lg: 'vf-multifile-list-image-lg',
          list_gallery: 'vf-multifile-list-gallery',
          list_gallery_sm: 'vf-multifile-list-gallery-sm',
          list_gallery_md: '',
          list_gallery_lg: 'vf-multifile-list-gallery-lg',
          list_disabled: 'vf-multifile-list-disabled',
          list_sorting: 'vf-multifile-list-sorting',
          listItem: '',
          handle: '',
          handle_file: 'vf-multifile-handle-file',
          handle_file_sm: 'vf-multifile-handle-file-sm',
          handle_file_md: '',
          handle_file_lg: 'vf-multifile-handle-file-lg',
          handle_image: 'vf-multifile-handle-image',
          handle_image_sm: 'vf-multifile-handle-image-sm',
          handle_image_md: '',
          handle_image_lg: 'vf-multifile-handle-image-lg',
          handle_gallery: 'vf-multifile-handle-gallery',
          handle_gallery_sm: '',
          handle_gallery_md: '',
          handle_gallery_lg: '',
          handleIcon: '',
          handleIcon_file: 'vf-multifile-handle-icon-file',
          handleIcon_image: 'vf-multifile-handle-icon-image',
          handleIcon_gallery: 'vf-multifile-handle-icon-gallery',
          dnd: '',
          button: 'vf-btn vf-btn-secondary',
          button_enabled: '',
          button_disabled: 'vf-btn-disabled',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          $list: (classes, { isDisabled, sorting, view, Size }) => ([
            classes.list,
            classes[`list_${Size}`],
            isDisabled ? classes.list_disabled : null,
            sorting ? classes.list_sorting : null,
            classes[`list_${view}`],
            classes[`list_${view}_${Size}`],
          ]),
          $handle: (classes, { view, Size }) => ([
            classes.handle,
            classes[`handle_${view}`],
            classes[`handle_${view}_${Size}`],
          ]),
          $handleIcon: (classes, { view }) => ([
            classes.handleIcon,
            classes[`handleIcon_${view}`],
          ]),
          $button: (classes, { isDisabled, preparing, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            !isDisabled && !preparing ? classes.button_enabled : null,
            isDisabled || preparing ? classes.button_disabled : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue

  .vf-multifile-list {
    margin-top: var(--vf-gutter);

    &.vf-multifile-list-sm {
      margin-top: var(--vf-gutter-sm);
    }

    &.vf-multifile-list-lg {
      margin-top: var(--vf-gutter-lg);
    }
  }

  .vf-multifile-list-file,
  .vf-multifile-list-image {
    display: grid;

    & > .vf-row {
      position: relative;

      &:hover {
        .vf-multifile-handle-file,
        .vf-multifile-handle-image {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    &.vf-multifile-list-sorting {
      & > div:hover {
        .vf-multifile-handle-file,
        .vf-multifile-handle-image {
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }

  .vf-multifile-list-file {
    row-gap: calc(var(--vf-gutter) / 2);

    &.vf-multifile-list-file-sm {
      row-gap: calc(var(--vf-gutter-sm) / 2);
    }

    &.vf-multifile-list-file-lg {
      row-gap: calc(var(--vf-gutter-lg) / 2);
    }
  }

  .vf-multifile-list-image {
    row-gap: calc(var(--vf-gutter) / 2);

    &.vf-multifile-list-image-sm {
      row-gap: calc(var(--vf-gutter-sm) / 2);
    }

    &.vf-multifile-list-image-lg {
      row-gap: calc(var(--vf-gutter-lg) / 2);
    }
  }

  .vf-multifile-list-gallery {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--vf-gutter) / 2);

    &.vf-multifile-list-sorting {
      & > div:hover {
        .vf-multifile-handle-gallery {
          visibility: hidden;
          opacity: 0;
        }
      }
    }

    & > div {
      position: relative;

      &:hover {
        .vf-multifile-handle-gallery {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  .vf-multifile-handle-file,
  .vf-multifile-handle-image {
    position: absolute;
    left: var(--vf-gutter);
    transform: translateX(-100%);
    top: 0;
    cursor: grab;
    visibility: hidden;
    opacity: 0;
    transition: .3s;

    &:active {
      cursor: grabbing;
    }
  }

  .vf-multifile-handle-icon-file,
  .vf-multifile-handle-icon-image {
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    width: var(--vf-min-height-input);
    height: var(--vf-min-height-input);
    mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    mask-size: 0.7rem 0.7rem;
    -webkit-mask-size: 0.7rem 0.7rem;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    background-color: currentColor;
  }

  .vf-multifile-handle-file {
    &.vf-multifile-handle-file-sm {
      .vf-multifile-handle-icon-file {
        width: var(--vf-min-height-input-sm);
        height: var(--vf-min-height-input-sm);
      }
    }

    &.vf-multifile-handle-file-lg {
      .vf-multifile-handle-icon-file {
        width: var(--vf-min-height-input-lg);
        height: var(--vf-min-height-input-lg);
      }
    }
  }

  .vf-multifile-handle-image {
    &.vf-multifile-handle-image-sm {
      .vf-multifile-handle-icon-image {
        width: var(--vf-min-height-input-sm);
        height: var(--vf-min-height-input-sm);
      }
    }

    &.vf-multifile-handle-image-lg {
      .vf-multifile-handle-icon-image {
        width: var(--vf-min-height-input-lg);
        height: var(--vf-min-height-input-lg);
      }
    }
  }

  .vf-multifile-handle-gallery {
    position: absolute;
    cursor: grab;
    visibility: hidden;
    opacity: 0;
    transition: .3s;
    border-radius: 999px;
    left: 0.1875rem;
    top: 0.1875rem;
    transform: none;
    background: var(--vf-gray-200);

    &:active {
      cursor: grabbing;
    }

    &:hover {
      background-color: var(--vf-gray-300);
    }
  }

  .vf-multifile-handle-icon-gallery {
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-position: center center;
    width: 1rem;
    height: 1rem;
    mask-size: 0.75rem 0.75rem;
    -webkit-mask-size: 0.75rem 0.75rem;
    mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='12px' height='13px' viewBox='0 0 12 13' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='%236B7280' fill-rule='evenodd'%3E%3Cpath d='M7.93929644,10.4886534 L6.22140503,12.2179202 C6.11156489,12.3277374 5.93349525,12.3277374 5.82363223,12.2179202 L4.10576371,10.4886534 C3.99594646,10.3788132 3.99594646,10.2007436 4.10576371,10.0909263 L4.27147376,9.92521629 C4.381291,9.81537616 4.55938354,9.81537616 4.66922367,9.92521629 L5.62409352,10.89137 L5.64753097,10.89137 L5.64753097,6.67528507 L1.43144605,6.67528507 L1.43144605,6.69872252 L2.39762264,7.65359237 C2.50746277,7.76340962 2.50746277,7.94150215 2.39762264,8.05134228 L2.2318897,8.21705233 C2.12207245,8.32686958 1.94400281,8.32686958 1.83416268,8.21705233 L0.104918753,6.49916092 C-0.0048984896,6.38932079 -0.0048984896,6.21125115 0.104918753,6.10138813 L1.83418557,4.38349671 C1.9440257,4.27367947 2.12209534,4.27367947 2.23193547,4.38349671 L2.39766841,4.54922966 C2.50750855,4.6590469 2.50750855,4.83713943 2.39766841,4.94697956 L1.43144605,5.90184942 L1.43144605,5.92528686 L5.64753097,5.92528686 L5.64753097,1.70920194 L5.62409352,1.70920194 L4.66922367,2.67537853 C4.55940642,2.78521867 4.38131389,2.78521867 4.27147376,2.67537853 L4.10576371,2.50964559 C3.99594646,2.39982835 3.99592358,2.2217587 4.10576371,2.11191857 L5.82365512,0.382651762 C5.93349525,0.272834518 6.11156489,0.272834518 6.22142791,0.382651762 L7.93931933,2.11191857 C8.04913657,2.2217587 8.04913657,2.39982835 7.93931933,2.50966848 L7.77358638,2.67540142 C7.66376914,2.78524155 7.48567661,2.78524155 7.37583648,2.67540142 L6.42096662,1.70920194 L6.39752918,1.70920194 L6.39752918,5.92528686 L10.6136141,5.92528686 L10.6136141,5.90184942 L9.64743751,4.94697956 C9.53759737,4.83716232 9.53759737,4.65906979 9.64743751,4.54922966 L9.81317045,4.3835196 C9.92298769,4.27370236 10.1010573,4.27370236 10.2108975,4.3835196 L11.9401643,6.10141102 C12.0500044,6.21125115 12.0499815,6.38932079 11.9401643,6.49918381 L10.2108975,8.21707522 C10.1010573,8.32689246 9.92298769,8.32689246 9.81317045,8.21707522 L9.64743751,8.05136517 C9.53759737,7.94154792 9.53759737,7.76345539 9.64743751,7.65361526 L10.6136141,6.69872252 L10.6136141,6.67528507 L6.39752918,6.67528507 L6.39752918,10.89137 L6.42096662,10.89137 L7.37583648,9.9251934 C7.48565372,9.81535327 7.66374625,9.81535327 7.77358638,9.9251934 L7.93929644,10.0909263 C8.04911368,10.2007207 8.04911368,10.3787903 7.93929644,10.4886534 Z' id='arrows' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    background-color: var(--vf-gray-600);
  }

  .sortable-ghost {
    opacity: 0.6;
  }
</style>