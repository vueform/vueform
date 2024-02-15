<script>
  import LocationElement from './../../../blank/templates/elements/LocationElement.vue'

  export default {
    name: 'LocationElement',
    render: LocationElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-text-type',
          inputContainer: 'vf-input-group',
          inputContainer_sm: 'vf-input-group-sm',
          inputContainer_md: '',
          inputContainer_lg: 'vf-input-group-lg',
          inputContainer_default: '',
          inputContainer_disabled: 'vf-input-group-disabled',
          inputContainer_focused: 'vf-input-group-focused',
          inputContainer_success: 'vf-input-group-success',
          inputContainer_danger: 'vf-input-group-danger',
          input: 'vf-input-field',
          input_sm: '',
          input_md: '',
          input_lg: '',
          input_enabled: '',
          input_disabled: '',
          input_focused: '',
          input_success: '',
          input_danger: '',
          $inputContainer: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.inputContainer,
            classes[`inputContainer_${Size}`],
            isDisabled ? classes.inputContainer_disabled : null,
            !isDisabled && !isSuccess && !isDanger ? classes.inputContainer_default : null,
            !isDisabled && focused ? classes.inputContainer_focused : null,
            !isDisabled && isSuccess ? classes.inputContainer_success : null,
            !isDisabled && isDanger ? classes.inputContainer_danger : null,
          ]),
          $input: (classes, { isDisabled, Size, isSuccess, isDanger, focused }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : null,
            !isDisabled && !isSuccess && !isDanger && !focused  ? classes.input_enabled : null,
            !isDisabled && focused && !isSuccess && !isDanger ? classes.input_focused : null,
            !isDisabled && isDanger ? classes.input_danger : null,
            !isDisabled && isSuccess ? classes.input_success : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  /* Google */
  .pac-container {
    border-color: var(--vf-border-color-input);
    background: var(--vf-bg-input);
  }

  .pac-item {
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    border-color: var(--vf-border-color-input);
    background: var(--vf-bg-input);
    color: var(--vf-color-input);
    cursor: pointer;

    & > span:last-of-type {
      font-size: 0.75rem;
      color: var(--vf-color-muted);
    } 

    &:hover, &.pac-item-selected {
      background: var(--vf-bg-selected);
    }
  }

  .pac-item-query {
    font-size: 0.875rem;
    line-height: 1;
    margin-right: 0.25rem;
    padding-right: 0.25rem;
    color: var(--vf-color-input);
  }

  .pac-icon-marker {
    mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
    -webkit-mask-image: url("data:image/svg+xml,%3csvg viewBox='0 0 384 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z'%3e%3c/path%3e%3c/svg%3e");
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center center;
    -webkit-mask-position: center center;
    mask-size: contain;
    -webkit-mask-size: contain;
    background: var(--vf-bg-icon);
    width: 0.875rem;
    width: 0.875rem;
    margin-right: 0.75rem;
    margin-top: 0;
    padding-top: 1px;
    padding-bottom: 1px;
    box-sizing: content-box;
    flex-shrink: 0;
  }

  .pac-logo {
    &:after {
      margin-left: 0.625rem;
      margin-right: 0.625rem;
      margin-bottom: 0.625rem;
    }
  }

  .pac-icon, .hdpi .pac-icon {
    background-image: none;
  }
</style>