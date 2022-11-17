<script>
  import ElementInfo from './../../blank/templates/ElementInfo.vue'

  export default {
    name: 'ElementInfo',
    render: ElementInfo.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-element-info',
          wrapper: 'vf-element-info-wrapper',
          wrapper_left: 'vf-element-info-wrapper-left',
          wrapper_right: 'vf-element-info-wrapper-right',
          wrapper_top: 'vf-element-info-wrapper-top',
          wrapper_bottom: 'vf-element-info-wrapper-bottom',
          content: 'vf-element-info-content',
          $wrapper: (classes, { position }) => ([
            classes.wrapper,
            classes[`wrapper_${position}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-element-info {
    margin-left: 0.25rem;
    position: relative;
    top: 1px;
    cursor: pointer;

    &:before {
      content: "";
      mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
      -webkit-mask-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='15px' height='14px' viewBox='0 0 15 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cpath d='M7.40520349,0.18129431 C11.1501134,0.18129431 14.1864373,3.21871306 14.1864373,6.96252814 C14.1864373,10.7085329 11.1501134,13.743762 7.40520349,13.743762 C3.6602936,13.743762 0.62396966,10.7085329 0.62396966,6.96252814 C0.62396966,3.21871306 3.6602936,0.18129431 7.40520349,0.18129431 Z M7.40520349,3.18909964 C6.77093148,3.18909964 6.25676873,3.70326238 6.25676873,4.3375344 C6.25676873,4.97180642 6.77093148,5.48596916 7.40520349,5.48596916 C8.03947551,5.48596916 8.55363825,4.97180642 8.55363825,4.3375344 C8.55363825,3.70326238 8.03947551,3.18909964 7.40520349,3.18909964 Z M8.93644984,10.1343956 L8.93644984,9.47814714 C8.93644984,9.29694183 8.78953094,9.15002293 8.60832562,9.15002293 L8.28020141,9.15002293 L8.28020141,6.41565445 C8.28020141,6.23444913 8.13328251,6.08753023 7.95207719,6.08753023 L6.20208136,6.08753023 C6.02087604,6.08753023 5.87395714,6.23444913 5.87395714,6.41565445 L5.87395714,7.07190288 C5.87395714,7.2531082 6.02087604,7.4000271 6.20208136,7.4000271 L6.53020558,7.4000271 L6.53020558,9.15002293 L6.20208136,9.15002293 C6.02087604,9.15002293 5.87395714,9.29694183 5.87395714,9.47814714 L5.87395714,10.1343956 C5.87395714,10.3156009 6.02087604,10.4625198 6.20208136,10.4625198 L8.60832562,10.4625198 C8.78953094,10.4625198 8.93644984,10.3156009 8.93644984,10.1343956 Z' id='info-circle' fill='currentColor'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
      mask-position: center center;
      -webkit-mask-position: center center;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-size: contain;
      -webkit-mask-size: contain;
      background-color: var(--vf-bg-passive);
      width: 0.875rem;
      height: 0.875rem;
      display: inline-block;
    }

    &:hover {
      .vf-element-info-wrapper {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .vf-element-info-wrapper {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transition: .3s;
    z-index: 999;
    width: 12.5rem;

    &.vf-element-info-wrapper-left {
      top: -0.5625rem;
      right: 1.375rem;
    }

    &.vf-element-info-wrapper-right {
      top: -0.5625rem;
      left: 1.375rem;
    }

    &.vf-element-info-wrapper-top {
      bottom: 1.375rem;
      left: 50%;
      transform: translateX(-50%);
    }

    &.vf-element-info-wrapper-bottom {
      top: 1.375rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .vf-element-info-content {
    background: rgba(0,0,0,0.85);
    color: #FFFFFF;
    border-radius: var(--vf-radius-small);
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    padding: 0.3125rem 0.625rem;
    font-style: normal;
    display: inline-block;
    position: relative;

    &:after {
      right: 100%;
      top: 0.625rem;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(0,0,0,0);
      border-right-color: rgba(0,0,0,0.85);
      border-width: 5px;
    }
  }
</style>