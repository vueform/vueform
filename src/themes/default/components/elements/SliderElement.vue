<script>
  import SliderElement from './../../../blank/components/elements/SliderElement'
  import Slider from '@vueform/slider/src/Slider'

  export default {
    name: 'SliderElement',
    render: SliderElement.render,
    components: {
      Slider,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'vf-slider-wrapper',
          slider: {},
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
  .slider-target,
  .slider-target * {
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

  .slider-target {
    position: relative;
  }

  .slider-base,
  .slider-connects {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .slider-connects {
    overflow: hidden;
    z-index: 0;
  }

  .slider-connect,
  .slider-origin {
    will-change: transform;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    -webkit-transform-style: preserve-3d;
    transform-origin: 0 0;
    transform-style: flat;
  }

  .slider-connect {
    height: 100%;
    width: 100%;
  }

  .slider-origin {
    height: 10%;
    width: 10%;
  }

  .slider-txt-dir-rtl.slider-horizontal .slider-origin {
    left: 0;
    right: auto;
  }

  .slider-vertical .slider-origin {
    width: 0;
  }

  .slider-horizontal .slider-origin {
    height: 0;
  }

  .slider-handle {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
  }

  .slider-touch-area {
    height: 100%;
    width: 100%;
  }

  .slider-state-tap .slider-connect,
  .slider-state-tap .slider-origin {
    -webkit-transition: transform 0.3s;
    transition: transform 0.3s;
  }

  .slider-state-drag * {
    cursor: inherit !important;
  }

  .slider-tooltip-focus .slider-tooltip,
  .slider-tooltip-drag .slider-tooltip {
    display: none !important;
  }

  .slider-tooltip-focus.slider-focused .slider-tooltip:not(.slider-tooltip-hidden),
  .slider-tooltip-drag.slider-state-drag .slider-tooltip:not(.slider-tooltip-hidden),
  .slider-tooltip-drag .slider-active .slider-tooltip {
    display: block !important;
  }

  .slider-horizontal {
    height: var(--vf-slider-height);
  }

  .slider-horizontal .slider-handle {
    width: var(--vf-slider-handle-width);
    height: var(--vf-slider-handle-height);
    top: calc(((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2 + 1px) * -1);
    right: calc(var(--vf-slider-handle-width) / 2 * -1);
  }

  .slider-vertical {
    width: var(--vf-slider-height);
    height: var(--vf-slider-vertical-height);
  }

  .slider-vertical .slider-handle {
    width: var(--vf-slider-handle-height);
    height: var(--vf-slider-handle-width);
    top: calc(var(--vf-slider-handle-width) / 2 * -1);
    right: calc(((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2 + 1px) * -1);
  }

  .slider-txt-dir-rtl.slider-horizontal .slider-handle {
    left: calc(var(--vf-slider-handle-width) / 2 * -1);
    right: auto;
  }

  .slider-base {
    background-color: var(--vf-slider-bg);
    border-radius: var(--vf-slider-radius);
  }

  .slider-connects {
    border-radius: var(--vf-slider-radius);
  }

  .slider-connect {
    background: var(--vf-slider-connect-bg);
    cursor: pointer;
  }

  .slider-draggable {
    cursor: ew-resize;
  }

  .slider-vertical .slider-draggable {
    cursor: ns-resize;
  }

  .slider-handle {
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

  .slider-active {
    box-shadow: var(--vf-slider-handle-shadow-active);
    cursor: grabbing;
  }

  [disabled] .slider-connect {
    background: var(--vf-slider-connect-bg-disabled);
  }

  [disabled].slider-target,
  [disabled].slider-handle,
  [disabled] .slider-handle {
    cursor: not-allowed;
  }

  [disabled] .slider-tooltip {
    background: var(--vf-slider-tooltip-bg-disabled);
    border-color: var(--vf-slider-tooltip-bg-disabled);
  }

  .slider-tooltip {
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

  .slider-horizontal .slider-tooltip {
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

  .slider-vertical .slider-tooltip {
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

  .slider-horizontal .slider-origin > .slider-tooltip {
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
    left: auto;
    bottom: calc(var(--vf-slider-tooltip-arrow-size) + ((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2) + var(--vf-slider-tooltip-distance));
  }

  .slider-vertical .slider-origin > .slider-tooltip {
    transform: translate(0, calc((var(--vf-slider-tooltip-line-height) - var(--vf-slider-tooltip-py)) * -1));
    top: auto;
    right: calc(var(--vf-slider-tooltip-arrow-size) + var(--vf-slider-height) + ((var(--vf-slider-handle-height) - var(--vf-slider-height)) / 2) + var(--vf-slider-tooltip-distance));
  }
</style>