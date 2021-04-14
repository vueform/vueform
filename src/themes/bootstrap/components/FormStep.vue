<template>
  <li :class="classes.container" v-show="visible">
    <a
      v-if="isLabelComponent"
      href=""
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <component :is="stepLabel" :form$="form$" />
    </a>
    <a
      v-else
      v-html="stepLabel"
      href=""
      :class="classes.wrapper"
      @click.prevent="select"
    ></a>
  </li>
</template>

<script>
  export default {
    name: 'FormStep',
    data() {
      return {
        defaultClasses: {
          container: 'form-step',
          wrapper: '',
          active: 'is-active',
          inactive: '',
          invalid: 'has-errors',
          valid: '',
          disabled: 'is-disabled',
          enabled: '',
          completed: 'is-completed',
          incompleted: '',
          pending: 'is-pending',
        },
        classKeys: {
          state: 'container'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .form-step {
    position: relative;
    white-space: nowrap;
    flex: 1;
    text-align: center;
    padding: 0 10px;

    &:nth-child(1):before, &:nth-child(1) a:before, &:nth-child(1) a:after { z-index: 10; }
    &:nth-child(2):before, &:nth-child(2) a:before, &:nth-child(2) a:after { z-index: 9; }
    &:nth-child(3):before, &:nth-child(3) a:before, &:nth-child(3) a:after { z-index: 8; }
    &:nth-child(4):before, &:nth-child(4) a:before, &:nth-child(4) a:after { z-index: 7; }
    &:nth-child(5):before, &:nth-child(5) a:before, &:nth-child(5) a:after { z-index: 6; }
    &:nth-child(6):before, &:nth-child(6) a:before, &:nth-child(6) a:after { z-index: 5; }
    &:nth-child(7):before, &:nth-child(7) a:before, &:nth-child(7) a:after { z-index: 4; }
    &:nth-child(8):before, &:nth-child(8) a:before, &:nth-child(8) a:after { z-index: 3; }

    &:before {
      content: " ";
      display: inline-block;
      height: 4px;
      background: $primary;
      position: absolute;
      top: -12px;
      left: 0;
      right: 50%;
      transition: .3s;
    }

    &:after {
      content: " ";
      display: inline-block;
      height: 4px;
      background: $primary;
      position: absolute;
      top: -12px;
      left: 50%;
      right: 0;
      transition: .3s;
    }

    a {
      text-decoration: none !important;
      color: $body-color;

      &:hover, &:focus, &:active {
        text-decoration: none !important;
        color: $body-color;
      }

      &:before {
        content: " ";
        display: inline-block;
        width: 16px;
        height: 16px;
        position: absolute;
        background: $primary;
        border-radius: 50%;
        left: 50%;
        transform: translateX(-50%);
        top: -18px;
        z-index: 3;
      }

      &:after {
        content: " ";
        display: inline-block;
        width: 8px;
        height: 8px;
        position: absolute;
        background: #ffffff;
        border-radius: 50%;
        left: calc(50% - 4px);
        transform: scale(0);
        top: -14px;
        z-index: 4;
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
          left: 4px;
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
          right: 4px;
        }
      }
    }

    &.is-disabled {
      &:before {
        background: $gray-300;
        left: -100%;
      }

      a {
        color: $text-muted;

        &:before {
          background: $gray-300;
        }
      }
    }

    &.is-completed {
      &:after {
        // background: $primary;
      }

      a {
        &:after {
          background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
          background-size: 8px 8px;
          background-position: 0px 0px;
          background-repeat: no-repeat;
          border-radius: 0;
          transform: scale(1);
        }
      }
    }

    &.is-active {
      a {
        &:after {
          background: #ffffff;
          top: -14px;
          transform: scale(1);
          border-radius: 50%;
        }
      }
    }

    &.has-errors {
      a {
        color: $danger;

        &:before {
          background-color: $danger;
        }

        &:after {
          background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation" class="svg-inline--fa fa-exclamation fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="white" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z"></path></svg>');
          background-size: 8px 8px;
          background-position: 0px 0px;
          background-repeat: no-repeat;
          width: 8px;
          height: 8px;
          top: -14px;
          border-radius: 0;
        }
      }
    }

    &.is-pending {
      a {
        &:after {
          animation: 1s linear infinite step-loading;
          background: #ffffff;
          top: -14px;
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