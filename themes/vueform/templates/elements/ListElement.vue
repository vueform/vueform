<script>
  import ListElement from './../../../blank/templates/elements/ListElement.vue'

  export default {
    name: 'ListElement',
    render: ListElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: 'vf-rowset',
          list_disabled: 'vf-list-disabled',
          list_sorting: 'vf-list-sorting',
          listItem: 'vf-row',
          handle: 'vf-list-handle',
          handle_sm: 'vf-list-handle-sm',
          handle_md: '',
          handle_lg: 'vf-list-handle-lg',
          handleIcon: 'vf-list-handle-icon',
          remove: 'vf-list-remove',
          removeIcon: 'vf-list-remove-icon',
          add: 'vf-small-btn vf-btn-primary',
          add_sm: 'vf-small-btn-sm',
          add_md: '',
          add_lg: 'vf-small-btn-lg',
          $list: (classes, { isDisabled, sorting }) => ([
            classes.list,
            isDisabled ? classes.list_disabled : null,
            sorting ? classes.list_sorting : null,
          ]),
          $handle: (classes, { Size }) => ([
            classes.handle,
            classes[`handle_${Size}`],
          ]),
          $add: (classes, { Size }) => ([
            classes.add,
            classes[`add_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
    // Some styles are contained in Vueform.vue

  .vf-rowset {
    & > .vf-row {
      position: relative;

      &:hover {
        .vf-list-remove, .vf-list-handle {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    &.vf-list-sorting {
      & > div:hover {
        .vf-list-handle, .vf-list-remove {
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }

  .vf-list-remove, .vf-list-handle {
    visibility: hidden;
    opacity: 0;
    transition: .3s;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  .vf-list-remove {
    position: absolute;
    left: var(--vf-gutter);
    transform: translateX(-50%) translateY(-50%);
    top: 0;
    z-index: 3;
    background-color: var(--vf-gray-200);
    border-radius: 999px;
    transition: .15s;

    &:hover {
      background-color: var(--vf-gray-300);
    }
  }

  .vf-list-remove-icon {
    display: flex;
    width: 1.125rem;
    height: 1.125rem;
    align-items: center;
    justify-content: center;
    mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'%3E%3C/path%3E%3C/svg%3E");
    mask-size: 0.75rem 0.75rem;
    mask-repeat: no-repeat;
    mask-position: center center;
    background-color: var(--vf-gray-500);
  }

  .vf-list-handle {
    position: absolute;
    left: var(--vf-gutter);
    transform: translateX(-100%);
    top: 0;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  .vf-list-handle-icon {
    width: var(--vf-input-min-height);
    height: var(--vf-input-min-height);
    mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='11px' height='9px' viewBox='0 0 11 9' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3C!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3E%3Ctitle%3Ebars%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M10.0418527,0.894571939 L0.309709821,0.894571939 C0.235791888,0.894571939 0.17578125,0.834156736 0.17578125,0.759740479 L0.17578125,0.220414636 C0.17578125,0.145998379 0.235791888,0.0855831754 0.309709821,0.0855831754 L10.0418527,0.0855831754 C10.1157706,0.0855831754 10.1757812,0.145998379 10.1757812,0.220414636 L10.1757812,0.759740479 C10.1757812,0.834156736 10.1157706,0.894571939 10.0418527,0.894571939 Z M10.0418527,4.8049452 L0.309709821,4.8049452 C0.235791888,4.8049452 0.17578125,4.74453 0.17578125,4.67011374 L0.17578125,4.1307879 C0.17578125,4.05637164 0.235791888,3.99595644 0.309709821,3.99595644 L10.0418527,3.99595644 C10.1157706,3.99595644 10.1757812,4.05637164 10.1757812,4.1307879 L10.1757812,4.67011374 C10.1757812,4.74453 10.1157706,4.8049452 10.0418527,4.8049452 Z M10.0418527,8.80953919 L0.309709821,8.80953919 C0.235791888,8.80953919 0.17578125,8.74912399 0.17578125,8.67470773 L0.17578125,8.13538189 C0.17578125,8.06096563 0.235791888,8.00055043 0.309709821,8.00055043 L10.0418527,8.00055043 C10.1157706,8.00055043 10.1757812,8.06096563 10.1757812,8.13538189 L10.1757812,8.67470773 C10.1757812,8.74912399 10.1157706,8.80953919 10.0418527,8.80953919 Z' id='bars' fill='currentColor' %3E%3C/path%3E%3C/g%3E%3C/svg%3E");
    mask-size: 0.7rem 0.7rem;
    mask-repeat: no-repeat;
    mask-position: center center;
    background-color: #000000;
  }

  .vf-list-handle-sm {
    .vf-list-handle-icon {
      width: var(--vf-input-min-height-sm);
      height: var(--vf-input-min-height-sm);
    }
  }

  .vf-list-handle-lg {
    .vf-list-handle-icon {
      width: var(--vf-input-min-height-lg);
      height: var(--vf-input-min-height-lg);
    }
  }

  .sortable-ghost {
    opacity: 0.6;
  }
</style>