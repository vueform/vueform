<script>
  import SliderElement from './../../../blank/templates/elements/SliderElement.vue'
  import Slider from '@vueform/slider/src/Slider.vue'

  export default {
    name: 'SliderElement',
    render: SliderElement.render,
    components: {
      Slider,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-slider-wrapper',
          wrapper_sm: 'vf-slider-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-slider-wrapper-lg',
          slider: {
            target: 'vf-slider-target',
            target_sm: 'vf-slider-target-sm',
            target_md: 'vf-slider-target-md',
            target_lg: 'vf-slider-target-lg',
            focused: 'vf-slider-focused',
            tooltipFocus: 'vf-slider-tooltip-focus',
            tooltipDrag: 'vf-slider-tooltip-drag',
            ltr: 'vf-slider-ltr',
            rtl: 'vf-slider-rtl',
            horizontal: 'vf-slider-horizontal',
            horizontal_sm: 'vf-slider-horizontal-sm',
            horizontal_md: 'vf-slider-horizontal-md',
            horizontal_lg: 'vf-slider-horizontal-lg',
            vertical: 'vf-slider-vertical',
            vertical_sm: 'vf-slider-vertical-sm',
            vertical_md: 'vf-slider-vertical-md',
            vertical_lg: 'vf-slider-vertical-lg',
            textDirectionRtl: 'vf-slider-txt-dir-rtl',
            textDirectionLtr: 'vf-slider-txt-dir-ltr',
            base: 'vf-slider-base',
            base_sm: 'vf-slider-base-sm',
            base_md: 'vf-slider-base-md',
            base_lg: 'vf-slider-base-lg',
            connects: 'vf-slider-connects',
            connects_sm: 'vf-slider-connects-sm',
            connects_md: 'vf-slider-connects-md',
            connects_lg: 'vf-slider-connects-lg',
            connect: 'vf-slider-connect',
            connect_sm: 'vf-slider-connect-sm',
            connect_md: 'vf-slider-connect-md',
            connect_lg: 'vf-slider-connect-lg',
            origin: 'vf-slider-origin',
            handle: 'vf-slider-handle',
            handle_sm: 'vf-slider-handle-sm',
            handle_md: 'vf-slider-handle-md',
            handle_lg: 'vf-slider-handle-lg',
            handleUpper: 'vf-handle-upper',
            handleLower: 'vf-handle-lower',
            touchArea: 'vf-slider-touch-area',
            tooltip: 'vf-slider-tooltip',
            tooltip_sm: 'vf-slider-tooltip-sm',
            tooltip_md: 'vf-slider-tooltip-md',
            tooltip_lg: 'vf-slider-tooltip-lg',
            tooltipTop: 'vf-slider-tooltip-top',
            tooltipTop_sm: 'vf-slider-tooltip-top-sm',
            tooltipTop_md: 'vf-slider-tooltip-top-md',
            tooltipTop_lg: 'vf-slider-tooltip-top-lg',
            tooltipBottom: 'vf-slider-tooltip-bottom',
            tooltipBottom_sm: 'vf-slider-tooltip-bottom-sm',
            tooltipBottom_md: 'vf-slider-tooltip-bottom-md',
            tooltipBottom_lg: 'vf-slider-tooltip-bottom-lg',
            tooltipLeft: 'vf-slider-tooltip-left',
            tooltipLeft_sm: 'vf-slider-tooltip-left-sm',
            tooltipLeft_md: 'vf-slider-tooltip-left-md',
            tooltipLeft_lg: 'vf-slider-tooltip-left-lg',
            tooltipRight: 'vf-slider-tooltip-right',
            tooltipRight_sm: 'vf-slider-tooltip-right-sm',
            tooltipRight_md: 'vf-slider-tooltip-right-md',
            tooltipRight_lg: 'vf-slider-tooltip-right-lg',
            tooltipHidden: 'vf-slider-tooltip-hidden',
            active: 'vf-slider-active',
            draggable: 'vf-slider-draggable',
            tap: 'vf-slider-state-tap',
            drag: 'vf-slider-state-drag',
            $slider: (classes, { Size }) => ([
              classes.slider.slider,
              classes.slider[`slider_${Size}`],
            ]),
            $horizontal: (classes, { Size }) => ([
              classes.slider.horizontal,
              classes.slider[`horizontal_${Size}`],
            ]),
            $vertical: (classes, { Size }) => ([
              classes.slider.vertical,
              classes.slider[`vertical_${Size}`],
            ]),
            $base: (classes, { Size }) => ([
              classes.slider.base,
              classes.slider[`base_${Size}`],
            ]),
            $connects: (classes, { Size }) => ([
              classes.slider.connects,
              classes.slider[`connects_${Size}`],
            ]),
            $connect: (classes, { Size }) => ([
              classes.slider.connect,
              classes.slider[`connect_${Size}`],
            ]),
            $handle: (classes, { Size }) => ([
              classes.slider.handle,
              classes.slider[`handle_${Size}`],
            ]),
            $tooltip: (classes, { Size }) => ([
              classes.slider.tooltip,
              classes.slider[`tooltip_${Size}`],
            ]),
            $tooltipTop: (classes, { Size }) => ([
              classes.slider.tooltipTop,
              classes.slider[`tooltipTop_${Size}`],
            ]),
            $tooltipBottom: (classes, { Size }) => ([
              classes.slider.tooltipBottom,
              classes.slider[`tooltipBottom_${Size}`],
            ]),
            $tooltipLeft: (classes, { Size }) => ([
              classes.slider.tooltipLeft,
              classes.slider[`tooltipLeft_${Size}`],
            ]),
            $tooltipRight: (classes, { Size }) => ([
              classes.slider.tooltipRight,
              classes.slider[`tooltipRight_${Size}`],
            ]),
          },
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`],
          ])
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-slider-wrapper {
    margin-top: calc((var(--vf-min-height-input) - var(--vf-slider-height)) / 2);

    &.vf-slider-wrapper-sm {
      margin-top: calc((var(--vf-min-height-input-sm) - var(--vf-slider-height)) / 2);
      margin-bottom: 0.25rem;
    }

    &.vf-slider-wrapper-lg {
      margin-top: calc((var(--vf-min-height-input-lg) - var(--vf-slider-height)) / 2);
    }
  }

  /* @vueform/slider styles */
  .vf-slider-target,
  .vf-slider-target * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -ms-touch-action: none;
    touch-action: none;
    -ms-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .vf-slider-target {
    position: relative;
    margin: calc((var(--vf-line-height) - var(--vf-slider-height)) / 2) 0;

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.vf-slider-target-sm {
      margin: calc((var(--vf-line-height-sm) - var(--vf-slider-height-sm)) / 2) 0;
    }

    &.vf-slider-target-lg {
      margin: calc((var(--vf-line-height-lg) - var(--vf-slider-height-lg)) / 2) 0;
    }

    &.vf-slider-horizontal {
      height: var(--vf-slider-height);

      &.vf-slider-horizontal-sm {
        height: var(--vf-slider-height-sm);
      }

      &.vf-slider-horizontal-lg {
        height: var(--vf-slider-height-lg);
      }
    }

    &.vf-slider-vertical {
      width: var(--vf-slider-height);
      height: var(--vf-slider-height-vertical);

      &.vf-slider-vertical-sm {
        width: var(--vf-slider-height-sm);
        height: var(--vf-slider-height-vertical-sm);
      }

      &.vf-slider-vertical-lg {
        width: var(--vf-slider-height-lg);
        height: var(--vf-slider-height-vertical-lg);
      }
    }

    &.vf-slider-state-drag * {
      cursor: inherit !important;
    }
  }

  .vf-slider-base,
  .vf-slider-connects {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .vf-slider-base {
    box-shadow: var(--vf-shadow-input);
    background-color: var(--vf-bg-passive);
    border-radius: var(--vf-radius-slider);
    z-index: 1;

    &.vf-slider-base-sm {
      border-radius: var(--vf-radius-slider-sm);
    }
    
    &.vf-slider-base-lg {
      border-radius: var(--vf-radius-slider-lg);
    }
  }

  .vf-slider-connects {
    overflow: hidden;
    z-index: 0;
    border-radius: var(--vf-radius-slider);

    &.vf-slider-connects-sm {
      border-radius: var(--vf-radius-slider-sm);
    }
    
    &.vf-slider-connects-lg {
      border-radius: var(--vf-radius-slider-lg);
    }
  }

  .vf-slider-connect,
  .vf-slider-origin {
    will-change: transform;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    -webkit-transform-style: preserve-3d;
    transform-origin: 0 0;
    transform-style: flat;
  }

  .vf-slider-connect {
    background: var(--vf-primary);
    border-radius: var(--vf-radius-slider);
    cursor: pointer;

    &.vf-slider-connect-sm {
      border-radius: var(--vf-radius-slider-sm);
    }

    &.vf-slider-connect-lg {
      border-radius: var(--vf-radius-slider-lg);
    }
  }

  [disabled] .vf-slider-connect {
    background: var(--vf-slider-connect-bg-disabled);
  }

  .vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-origin {
    left: 0;
    right: auto;
  }

  .vf-slider-vertical .vf-slider-origin {
    top: -100%;
    width: 0;
  }

  .vf-slider-horizontal .vf-slider-origin {
    height: 0;
  }

  .vf-slider-state-tap .vf-slider-connect,
  .vf-slider-state-tap .vf-slider-origin {
    -webkit-transition: transform 0.3s;
    transition: transform 0.3s;
  }

  .vf-slider-handle {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    width: var(--vf-slider-handle-size);
    height: var(--vf-slider-handle-size);
    background-color: var(--vf-bg-slider-handle);
    border-radius: 999px;
    box-shadow: var(--vf-shadow-handles);
    outline: 0px solid var(--vf-ring-color);
    outline-offset: 0;
    cursor: grab;
    transition: box-shadow .2s ease-in-out,
                color .2s ease-in-out,
                background-color .2s ease-in-out,
                border-color .2s ease-in-out;

    &:focus {
      box-shadow: var(--vf-shadow-handles-focus);
      outline: var(--vf-ring-width) solid var(--vf-ring-color);
    }

    &:hover {
      box-shadow: var(--vf-shadow-handles-hover);
    }

    &.vf-slider-handle-sm {
      height: var(--vf-slider-handle-size-sm);
      width: var(--vf-slider-handle-size-sm);
    }

    &.vf-slider-handle-lg {
      height: var(--vf-slider-handle-size-lg);
      width: var(--vf-slider-handle-size-lg);
    }
  }

  .vf-slider-horizontal {
    .vf-slider-handle {
      top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * (-1));
      right: calc(var(--vf-slider-handle-size) / 2 * (-1));

      &.vf-slider-handle-sm {
        top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * (-1));
        right: calc(var(--vf-slider-handle-size-sm) / 2 * (-1));
      }

      &.vf-slider-handle-lg {
        top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * (-1));
        right: calc(var(--vf-slider-handle-size-lg) / 2 * (-1));
      }
    }

    &.vf-slider-txt-dir-rtl .vf-slider-handle {
      left: calc(var(--vf-slider-handle-width) / 2 * (-1));
      right: auto;

      &.vf-slider-handle-sm {
        left: calc(var(--vf-slider-handle-width-sm) / 2 * (-1));
      }

      &.vf-slider-handle-lg {
        left: calc(var(--vf-slider-handle-width-lg) / 2 * (-1));
      }
    }
  }

  .vf-slider-vertical {
    width: var(--vf-slider-height);
    height: var(--vf-slider-vertical-height);

    .vf-slider-handle {
      bottom: calc(var(--vf-slider-handle-size) / 2 * (-1));
      right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 * (-1));

      &.vf-slider-handle-sm {
        bottom: calc(var(--vf-slider-handle-size-sm) / 2 * (-1));
        right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 * (-1));
      }
      
      &.vf-slider-handle-lg {
        bottom: calc(var(--vf-slider-handle-size-lg) / 2 * (-1));
        right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 * (-1));
      }
    }
  }

  .vf-slider-touch-area {
    height: 100%;
    width: 100%;
  }
  
  .vf-slider-tooltip {
    position: absolute;
    display: block;
    font-weight: 600;
    white-space: nowrap;
    min-width: 1.25rem;
    text-align: center;
    border: 1px solid var(--vf-border-color-slider-tooltip);
    background: var(--vf-primary);
    color: var(--vf-color-on-primary);
    font-size: var(--vf-font-size-small);
    line-height: var(--vf-line-height-small);
    letter-spacing: var(--vf-letter-spacing-small);
    padding: var(--vf-py-slider-tooltip) var(--vf-px-slider-tooltip);
    border-radius: var(--vf-radius-small);

    &.vf-slider-tooltip-sm {
      font-size: var(--vf-font-size-small-sm);
      line-height: var(--vf-line-height-small-sm);
      letter-spacing: var(--vf-letter-spacing-small-sm);
      padding: var(--vf-py-slider-tooltip-sm) var(--vf-px-slider-tooltip-sm);
      border-radius: var(--vf-radius-small-sm);
    }

    &.vf-slider-tooltip-lg {
      font-size: var(--vf-font-size-small-lg);
      line-height: var(--vf-line-height-small-lg);
      letter-spacing: var(--vf-letter-spacing-small-lg);
      padding: var(--vf-py-slider-tooltip-lg) var(--vf-px-slider-tooltip-lg);
      border-radius: var(--vf-radius-small-lg);
    }
  }

  .vf-slider-tooltip-focus .vf-slider-tooltip,
  .vf-slider-tooltip-drag .vf-slider-tooltip {
    display: none !important;
  }

  .vf-slider-tooltip-focus.vf-slider-focused .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
  .vf-slider-tooltip-drag.vf-slider-state-drag .vf-slider-tooltip:not(.vf-slider-tooltip-hidden),
  .vf-slider-tooltip-drag .vf-slider-active .vf-slider-tooltip {
    display: block !important;
  }

  [disabled].vf-slider-target,
  [disabled].vf-slider-handle,
  [disabled] .vf-slider-handle {
    cursor: not-allowed;
  }

  .vf-slider-horizontal .vf-slider-tooltip-top {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    bottom: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      width: 0;
      height: 0;
      transform: translate(-50%);
      bottom: calc(var(--vf-slider-tooltip-arrow-size) * (-2));
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-top-color: inherit;
    }

    &.vf-slider-tooltip-top-sm {
      bottom: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));

      &:before {
        bottom: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
        border-top-color: inherit;
      }
    }

    &.vf-slider-tooltip-top-lg {
      bottom: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));

      &:before {
        bottom: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
        border-top-color: inherit;
      }
    }
  }

  .vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {
    bottom: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));

    &.vf-slider-tooltip-top-sm {
      bottom: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
    }

    &.vf-slider-tooltip-top-lg {
      bottom: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
    }
  }

  .vf-slider-horizontal .vf-slider-tooltip-bottom {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    top: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      width: 0;
      height: 0;
      transform: translate(-50%);
      top: calc(var(--vf-slider-tooltip-arrow-size) * (-2));
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-bottom-color: inherit;
    }

    &.vf-slider-tooltip-bottom-sm {
      &:before {
        top: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
        border-bottom-color: inherit;
      }

      top: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));
    }

    &.vf-slider-tooltip-bottom-lg {
      &:before {
        top: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
        border-bottom-color: inherit;
      }

      top: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));
    }
  }

  .vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {
    top: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));

    &.vf-slider-tooltip-bottom-sm {
      top: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
    }

    &.vf-slider-tooltip-bottom-lg {
      top: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
    }
  }

  .vf-slider-vertical .vf-slider-tooltip-left {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    right: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      right: calc(var(--vf-slider-tooltip-arrow-size) * (-2));
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-left-color: inherit;
    }

    &.vf-slider-tooltip-left-sm {
      right: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));

      &:before {
        right: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
        border-left-color: inherit;
      }
    }

    &.vf-slider-tooltip-left-lg {
      right: calc(var(--vf-slider-handle-siz-lg) + var(--vf-slider-tooltip-distanc-lg));

      &:before {
        right: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
        border-left-color: inherit;
      }
    }
  }

  .vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {
    right: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-height) + var(--vf-slider-tooltip-distance));

    &.vf-slider-tooltip-left-sm {
      right: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-height-sm) + var(--vf-slider-tooltip-distance-sm));
    }

    &.vf-slider-tooltip-left-lg {
      right: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-height-lg) + var(--vf-slider-tooltip-distance-lg));
    }
  }

  .vf-slider-vertical .vf-slider-tooltip-right {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    left: calc(var(--vf-slider-handle-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      width: 0;
      height: 0;
      transform: translateY(-50%);
      left: calc(var(--vf-slider-tooltip-arrow-size) * (-2));
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-right-color: inherit;
    }

    &.vf-slider-tooltip-right-sm {
      left: calc(var(--vf-slider-handle-size-sm) + var(--vf-slider-tooltip-distance-sm));

      &:before {
        left: calc(var(--vf-slider-tooltip-arrow-size-sm) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-sm) solid transparent;
        border-right-color: inherit;
      }
    }

    &.vf-slider-tooltip-right-lg {
      left: calc(var(--vf-slider-handle-size-lg) + var(--vf-slider-tooltip-distance-lg));

      &:before {
        left: calc(var(--vf-slider-tooltip-arrow-size-lg) * (-2));
        border: var(--vf-slider-tooltip-arrow-size-lg) solid transparent;
        border-right-color: inherit;
      }
    }
  }

  .vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {
    left: calc((var(--vf-slider-handle-size) - var(--vf-slider-height)) / 2 + var(--vf-slider-tooltip-distance));

    &.vf-slider-tooltip-right-sm {
      left: calc((var(--vf-slider-handle-size-sm) - var(--vf-slider-height-sm)) / 2 + var(--vf-slider-tooltip-distance-sm));
    }

    &.vf-slider-tooltip-right-lg {
      left: calc((var(--vf-slider-handle-size-lg) - var(--vf-slider-height-lg)) / 2 + var(--vf-slider-tooltip-distance-lg));
    }
  }


  .vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {
    transform: translate(50%, 0);
    left: auto;
  }

  .vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {
    transform: translate(0, 50%);
    top: auto;
  }

  .vf-slider-active {
    cursor: grabbing;
  }

  .vf-slider-draggable {
    cursor: ew-resize;
  }

  .vf-slider-vertical .vf-slider-draggable {
    cursor: ns-resize;
  }
</style>