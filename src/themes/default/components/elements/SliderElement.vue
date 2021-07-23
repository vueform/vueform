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
          wrapper: 'form-slider-wrapper',
          slider: {},
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-slider-wrapper {
    margin-top: calc((var(--form-input-min-height) - var(--slider-height, 0.375rem)) / 2)
  }

  // @vueform/slider styles
  .slider-target,
  .slider-target * {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
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
    height: var(--slider-height, 0.375rem);
  }

  .slider-horizontal .slider-handle {
    width: var(--slider-handle-width, 1rem);
    height: var(--slider-handle-height, 1rem);
    top: calc(((var(--slider-handle-height, 1rem) - var(--slider-height, 0.375rem)) / 2 + 1px) * -1);
    right: calc(var(--slider-handle-width, 1rem) / 2 * -1);
  }

  .slider-vertical {
    width: var(--slider-height, 0.375rem);
    height: var(--slider-vertical-height, 18.75rem);
  }

  .slider-vertical .slider-handle {
    width: var(--slider-handle-height, 1rem);
    height: var(--slider-handle-width, 1rem);
    top: calc(var(--slider-handle-width, 1rem) / 2 * -1);
    right: calc(((var(--slider-handle-height, 1rem) - var(--slider-height, 0.375rem)) / 2 + 1px) * -1);
  }

  .slider-txt-dir-rtl.slider-horizontal .slider-handle {
    left: calc(var(--slider-handle-width, 1rem) / 2 * -1);
    right: auto;
  }

  .slider-base {
    background-color: var(--slider-bg, #D1D5DB);
    border-radius: var(--slider-radius, 9999px);
  }

  .slider-connects {
    border-radius: var(--slider-radius, 9999px);
  }

  .slider-connect {
    background: var(--slider-connect-bg, var(--form-primary));
    cursor: pointer;
  }

  .slider-draggable {
    cursor: ew-resize;
  }

  .slider-vertical .slider-draggable {
    cursor: ns-resize;
  }

  .slider-handle {
    width: var(--slider-handle-width, 1rem);
    height: var(--slider-handle-height, 1rem);
    border-radius: var(--slider-handle-radius, 9999px);
    background: var(--slider-handle-bg, #fff);
    border: var(--slider-handle-border, 0);
    box-shadow: var(--slider-handle-shadow, 0.5px 0.5px 2px 1px rgba(0,0,0,.32));
    cursor: grab;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 var(--slider-handle-ring-width, var(--form-ring-width)) var(--slider-handle-ring-color, var(--form-ring-color)), var(--slider-handle-shadow, 0.5px 0.5px 2px 1px rgba(0,0,0,.32));
    }
  }

  .slider-active {
    box-shadow: var(--slider-handle-shadow-active, 0.5px 0.5px 2px 1px rgba(0,0,0,.42));
    cursor: grabbing;
  }

  [disabled] .slider-connect {
    background: var(--slider-connect-bg-disabled, #9CA3AF);
  }

  [disabled].slider-target,
  [disabled].slider-handle,
  [disabled] .slider-handle {
    cursor: not-allowed;
  }

  [disabled] .slider-tooltip {
    background: var(--slider-tooltip-bg-disabled, #9CA3AF);
    border-color: var(--slider-tooltip-bg-disabled, #9CA3AF);
  }

  .slider-tooltip {
    position: absolute;
    display: block;
    font-size: var(--slider-tooltip-font-size, 0.875rem);
    line-height: var(--slider-tooltip-line-height, 1.25rem);
    font-weight: var(--slider-tooltip-font-weight, 600);
    white-space: nowrap;
    padding: var(--slider-tooltip-py, 0.125rem) var(--slider-tooltip-px, 0.375rem);
    min-width: var(--slider-tooltip-min-width, 1.25rem);
    text-align: center;
    color: var(--slider-tooltip-color, #fff);
    border-radius: var(--slider-tooltip-radius, var(--form-border-radius));
    border: 1px solid var(--slider-tooltip-bg, var(--form-primary));
    background: var(--slider-tooltip-bg, var(--form-primary));
  }

  .slider-horizontal .slider-tooltip {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    bottom: calc(var(--slider-handle-height, 1rem) + var(--slider-tooltip-arrow-size, 0.3125rem) + var(--slider-tooltip-distance, 0.1875rem));

    &:before {
      content: "";
      position: absolute;
      bottom: calc(var(--slider-tooltip-arrow-size, 0.3125rem) * -2);
      left: 50%;
      width: 0;
      height: 0;
      border: var(--slider-tooltip-arrow-size, 0.3125rem) solid transparent;
      border-top-color: inherit;
      transform: translate(-50%);
    }
  }

  .slider-vertical .slider-tooltip {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    right: calc(var(--slider-handle-height, 1rem) + var(--slider-tooltip-arrow-size, 0.3125rem) + var(--slider-tooltip-distance, 0.1875rem));

    &:before {
      content: "";
      position: absolute;
      right: calc(var(--slider-tooltip-arrow-size, 0.3125rem) * -2);
      top: 50%;
      width: 0;
      height: 0;
      border: var(--slider-tooltip-arrow-size, 0.3125rem) solid transparent;
      border-left-color: inherit;
      transform: translateY(-50%);
    }
  }

  .slider-horizontal .slider-origin > .slider-tooltip {
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
    left: auto;
    bottom: calc(var(--slider-tooltip-arrow-size, 0.3125rem) + ((var(--slider-handle-height, 1rem) - var(--slider-height, 0.375rem)) / 2) + var(--slider-tooltip-distance, 0.1875rem));
  }

  .slider-vertical .slider-origin > .slider-tooltip {
    transform: translate(0, calc((var(--slider-tooltip-line-height, 1.25rem) - var(--slider-tooltip-py, 0.125rem)) * -1));
    top: auto;
    right: calc(var(--slider-tooltip-arrow-size, 0.3125rem) + var(--slider-height, 0.375rem) + ((var(--slider-handle-height, 1rem) - var(--slider-height, 0.375rem)) / 2) + var(--slider-tooltip-distance, 0.1875rem));
  }
</style>