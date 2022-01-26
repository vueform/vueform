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
          slider: {
            target: 'vf-slider-target',
            focused: 'vf-slider-focused',
            tooltipFocus: 'vf-slider-tooltip-focus',
            tooltipDrag: 'vf-slider-tooltip-drag',
            ltr: 'vf-slider-ltr',
            rtl: 'vf-slider-rtl',
            horizontal: 'vf-slider-horizontal',
            vertical: 'vf-slider-vertical',
            textDirectionRtl: 'vf-slider-txt-dir-rtl',
            textDirectionLtr: 'vf-slider-txt-dir-ltr',
            base: 'vf-slider-base',
            connects: 'vf-slider-connects',
            connect: 'vf-slider-connect',
            origin: 'vf-slider-origin',
            handle: 'vf-slider-handle',
            touchArea: 'vf-slider-touch-area',
            tooltip: 'vf-slider-tooltip',
            tooltipTop: 'vf-slider-tooltip-top',
            tooltipBottom: 'vf-slider-tooltip-bottom',
            tooltipLeft: 'vf-slider-tooltip-left',
            tooltipRight: 'vf-slider-tooltip-right',
            tooltipHidden: 'vf-slider-tooltip-hidden',
            active: 'vf-slider-active',
            draggable: 'vf-slider-draggable',
            tap: 'vf-slider-state-tap',
            drag: 'vf-slider-state-drag',
          },
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-slider-wrapper {
    margin-top: calc((var(--vf-input-min-height) - var(--vf-slider-height)) / 2)
  }

  // @vueform/slider styles
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
  }

  .vf-slider-base,
  .vf-slider-connects {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .vf-slider-connects {
    overflow: hidden;
    z-index: 0;
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

  .vf-slider-handle {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
  }

  .vf-slider-touch-area {
    height: 100%;
    width: 100%;
  }

  .vf-slider-state-tap .vf-slider-connect,
  .vf-slider-state-tap .vf-slider-origin {
    -webkit-transition: transform 0.3s;
    transition: transform 0.3s;
  }

  .vf-slider-state-drag * {
    cursor: inherit !important;
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

  .vf-slider-horizontal {
    height: var(--vf-slider-height);
  }

  .vf-slider-horizontal .vf-slider-handle {
    width: var(--vf-slider-handle-width);
    height: var(--vf-slider-handle-height);
    top: calc(((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2 + 1px) * -1);
    right: calc(var(--vf-slider-handle-width) / 2 * -1);
  }

  .vf-slider-vertical {
    width: var(--vf-slider-height);
    height: var(--vf-slider-vertical-height);
  }

  .vf-slider-vertical .vf-slider-handle {
    width: var(--vf-slider-handle-height);
    height: var(--vf-slider-handle-width);
    right: calc(((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2 + 1px) * -1);
    bottom: calc(var(--vf-slider-handle-width) / 2 * -1);
  }

  .vf-slider-txt-dir-rtl.vf-slider-horizontal .vf-slider-handle {
    left: calc(var(--vf-slider-handle-width) / 2 * -1);
    right: auto;
  }

  .vf-slider-base {
    background-color: var(--vf-slider-bg);
    border-radius: var(--vf-slider-radius);
  }

  .vf-slider-connects {
    border-radius: var(--vf-slider-radius);
  }

  .vf-slider-connect {
    background: var(--vf-slider-connect-bg);
    cursor: pointer;
  }

  .vf-slider-draggable {
    cursor: ew-resize;
  }

  .vf-slider-vertical .vf-slider-draggable {
    cursor: ns-resize;
  }

  .vf-slider-handle {
    width: var(--vf-slider-handle-width);
    height: var(--vf-slider-handle-height);
    border-radius: var(--vf-slider-handle-radius);
    background: var(--vf-slider-handle-bg);
    border: var(--vf-slider-handle-border);
    box-shadow: var(--vf-slider-handle-shadow);
    cursor: grab;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 var(--vf-slider-handle-ring-width) var(--vf-slider-handle-ring-color), var(--vf-slider-handle-shadow);
    }
  }

  .vf-slider-active {
    box-shadow: var(--vf-slider-handle-shadow-active);
    cursor: grabbing;
  }

  [disabled] .vf-slider-connect {
    background: var(--vf-slider-connect-bg-disabled);
  }

  [disabled].vf-slider-target,
  [disabled].vf-slider-handle,
  [disabled] .vf-slider-handle {
    cursor: not-allowed;
  }

  [disabled] .vf-slider-tooltip {
    background: var(--vf-slider-tooltip-bg-disabled);
    border-color: var(--vf-slider-tooltip-bg-disabled);
  }

  .vf-slider-tooltip {
    position: absolute;
    display: block;
    font-size: var(--vf-slider-tooltip-font-size);
    line-height: var(--vf-slider-tooltip-line-height);
    font-weight: var(--vf-slider-tooltip-font-weight);
    white-space: nowrap;
    padding: var(--vf-slider-tooltip-py) var(--vf-slider-tooltip-px);
    min-width: var(--vf-slider-tooltip-min-width);
    text-align: center;
    color: var(--vf-slider-tooltip-color);
    border-radius: var(--vf-slider-tooltip-radius);
    border: 1px solid var(--vf-slider-tooltip-bg);
    background: var(--vf-slider-tooltip-bg);
  }

  .vf-slider-horizontal .vf-slider-tooltip-top {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    bottom: calc(var(--vf-slider-handle-height) + var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      bottom: calc(var(--vf-slider-tooltip-arrow-size) * -2);
      left: 50%;
      width: 0;
      height: 0;
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-top-color: inherit;
      transform: translate(-50%);
    }
  }

  .vf-slider-horizontal .vf-slider-tooltip-bottom {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    top: calc(var(--vf-slider-handle-height) + var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      top: calc(var(--vf-slider-tooltip-arrow-size) * -2);
      left: 50%;
      width: 0;
      height: 0;
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-bottom-color: inherit;
      transform: translate(-50%);
    }
  }

  .vf-slider-vertical .vf-slider-tooltip-left {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    right: calc(var(--vf-slider-handle-height) + var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      right: calc(var(--vf-slider-tooltip-arrow-size) * -2);
      top: 50%;
      width: 0;
      height: 0;
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-left-color: inherit;
      transform: translateY(-50%);
    }
  }

  .vf-slider-vertical .vf-slider-tooltip-right {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    left: calc(var(--vf-slider-handle-height) + var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-tooltip-distance));

    &:before {
      content: "";
      position: absolute;
      left: calc(var(--vf-slider-tooltip-arrow-size) * -2);
      top: 50%;
      width: 0;
      height: 0;
      border: var(--vf-slider-tooltip-arrow-size) solid transparent;
      border-right-color: inherit;
      transform: translateY(-50%);
    }
  }

  .vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip {
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
    left: auto;
  }

  .vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-top {
    bottom: calc(var(--vf-slider-tooltip-arrow-size) + ((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2) + var(--vf-slider-tooltip-distance) + 1px);
  }

  .vf-slider-horizontal .vf-slider-origin > .vf-slider-tooltip-bottom {
    top: calc(var(--vf-slider-tooltip-arrow-size) + ((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2) + var(--vf-slider-tooltip-distance) + var(--vf-slider-height) - 1px);
  }

  .vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip {
    transform: translate(0, calc((var(--vf-slider-tooltip-line-height, 1.25rem) - var(--vf-slider-tooltip-py, 2px)) * -1 + 1px));
    top: auto;
  }

  .vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-left {
    right: calc(var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-height) + ((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2) + var(--vf-slider-tooltip-distance) - 1px);
  }

  .vf-slider-vertical .vf-slider-origin > .vf-slider-tooltip-right {
    left: calc(var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-height) + ((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2) + var(--vf-slider-tooltip-distance) - var(--vf-slider-height) + 1px);
  }
</style>