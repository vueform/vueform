<script>
  import FormStep from './../../blank/templates/FormStep.vue'

  export default {
    name: 'FormStep',
    render: FormStep.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-step',
          wrapper: '',
          container_active: 'vf-step-active',
          container_inactive: '',
          container_invalid: 'vf-step-invalid',
          container_valid: '',
          container_disabled: 'vf-step-disabled',
          container_enabled: '',
          container_completed: 'vf-step-completed',
          container_incompleted: '',
          container_pending: 'vf-step-pending',
          $container: (classes, { active, isDisabled, completed, invalid, pending }) => ([
            classes.container,
            active ? classes.container_active : classes.container_inactive,
            isDisabled ? classes.container_disabled : classes.container_enabled,
            completed ? classes.container_completed : classes.container_incompleted,
            invalid ? classes.container_invalid : classes.container_valid,
            pending ? classes.container_pending : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-step {
    display: block;
    position: relative;
    white-space: nowrap;
    flex: 1 1;
    text-align: center;
    padding: 1.25rem 0.625rem 0;

    a {
      text-decoration: none !important;
      color: inherit;

      &:hover, &:focus, &:active {
        text-decoration: none !important;
        color: inherit;
      }

      &:before {
        content: " ";
        display: inline-block;
        width: 1rem;
        height: 1rem;
        position: absolute;
        background: var(--vf-primary);
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
        top: 0px;
      }

      &:after {
        content: " ";
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        position: absolute;
        background: #FFFFFF;
        border-radius: 50%;
        left: calc(50% - 0.25rem);
        transform: scale(0);
        top: 0.25rem;
        transition: transform .3s ease-in-out;
      }
    }

    &:first-of-type {
      padding-left: 0;
      text-align: left;

      &:before {
        display: none;
      }

      &:after {
        left: 0;
      }

      a {
        &:before {
          left: 0;
          transform: none;
        }

        &:after {
          left: 0.25rem;
          transform: scale(0);
        }
      }
    }

    &:last-of-type {
      padding-right: 0;
      text-align: right;

      &:after {
        display: none;
      }

      &:before {
        right: 0;
      }

      a {
        &:before {
          right: 0;
          left: auto;
          left: initial;
          transform: none;
        }

        &:after {
          left: auto;
          left: initial;
          transform: scale(0);
          right: 0.25rem;
        }
      }
    }

    &.vf-step-disabled {
      &:before {
        background: var(--vf-bg-passive);
        left: -100%;
      }

      a {
        color: var(--vf-color-passive);

        &:before {
          background: var(--vf-bg-passive);
        }
      }
    }

    &.vf-step-completed {
      & + .vf-step:not(.vf-step-completed):before {
        content: " ";
        display: inline-block;
        background: var(--vf-primary);
        position: absolute;
        top: 0.375rem;
        left: 0px;
        right: 50%;
        height: 0.25rem;
      }

      & + .vf-step:last-of-type:before {
        right: 0px;
      }

      &:before {
        content: " ";
        display: inline-block;
        background: var(--vf-primary);
        position: absolute;
        top: 0.375rem;
        left: 0px;
        right: 0px;
        height: 0.25rem;
      }
      
      a {
        &:after {
          mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
          mask-size: 0.5rem 0.5rem;
          -webkit-mask-size: 0.5rem 0.5rem;
          mask-position: 0 0;
          -webkit-mask-position: 0 0;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          background-color: var(--vf-color-on-primary);
          border-radius: 0;
          transform: scale(1);
        }
      }
    }

    &.vf-step-active {
      a {
        &:after {
          mask-image: none;
          -webkit-mask-image: none;
          background-color: var(--vf-color-on-primary);
          top: 0.25rem;
          transform: scale(1);
          border-radius: 50%;
        }
      }
    }

    &.vf-step-invalid {
      a {
        color: var(--vf-bg-btn-danger);

        &:before {
          background-color: var(--vf-bg-btn-danger);
        }

        &:after {
          mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
          mask-size: 0.5rem 0.5rem;
          -webkit-mask-size: 0.5rem 0.5rem;
          mask-position: 0 0;
          -webkit-mask-position: 0 0;
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;
          background-color: var(--vf-color-btn-danger);
          width: 0.5rem;
          height: 0.5rem;
          top: 0.25rem;
          border-radius: 0;
        }
      }

      &.vf-step-active {
        a {
          &:after {
            mask-image: none;
            -webkit-mask-image: none;
            background-color: var(--vf-color-on-primary);
            transform: scale(1);
            border-radius: 50%;
          }
        }
      }
    }

    &.vf-step-pending {
      a {
        &:after {
          animation: 1s linear infinite step-loading;
          background: var(--vf-color-btn-danger);
          top: 0.25rem;
          border-radius: 50%;
        }
      }
    }
  }

  @keyframes step-loading {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }

    20% {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    100% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
  }
</style>