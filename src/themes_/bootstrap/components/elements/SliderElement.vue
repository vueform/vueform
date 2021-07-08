<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <div :class="classes.wrapper">
        <Slider
          :value="value"
          :modelValue="value"
          v-bind="fieldOptions"
          :id="fieldId"
          ref="input"
          @change="handleChange"
        />
      </div>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  import Slider from '@vueform/slider/src/Slider'
  
  export default {
    name: 'SliderElement',
    components: {
      Slider,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'slider-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .slider-wrapper {
    margin-top: calc((#{$input-height} - 6px) / 2)
  }

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
    height: var(--slider-height, 6px);
  }

  .slider-horizontal .slider-handle {
    width: var(--slider-handle-width, 16px);
    height: var(--slider-handle-height, 16px);
    top: calc(((var(--slider-handle-height, 16px) - var(--slider-height, 6px)) / 2 + 1px) * -1);
    right: calc(var(--slider-handle-width, 16px) / 2 * -1);
  }

  .slider-vertical {
    width: var(--slider-height, 6px);
    height: var(--slider-vertical-height, 300px);
  }

  .slider-vertical .slider-handle {
    width: var(--slider-handle-height, 16px);
    height: var(--slider-handle-width, 16px);
    top: calc(var(--slider-handle-width, 16px) / 2 * -1);
    right: calc(((var(--slider-handle-height, 16px) - var(--slider-height, 6px)) / 2 + 1px) * -1);
  }

  .slider-txt-dir-rtl.slider-horizontal .slider-handle {
    left: calc(var(--slider-handle-width, 16px) / 2 * -1);
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
    background: var(--slider-connect-bg, #10B981);
    cursor: pointer;
  }

  .slider-draggable {
    cursor: ew-resize;
  }

  .slider-vertical .slider-draggable {
    cursor: ns-resize;
  }

  .slider-handle {
    width: var(--slider-handle-width, 16px);
    height: var(--slider-handle-height, 16px);
    border-radius: var(--slider-handle-radius, 9999px);
    background: var(--slider-handle-bg, #fff);
    border: var(--slider-handle-border, 0);
    box-shadow: var(--slider-handle-shadow, 0.5px 0.5px 2px 1px rgba(0,0,0,.32));
    cursor: grab;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 var(--slider-handle-ring-width, 3px) var(--slider-handle-ring-color, #10B98130), var(--slider-handle-shadow, 0.5px 0.5px 2px 1px rgba(0,0,0,.32));
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
    padding: var(--slider-tooltip-py, 2px) var(--slider-tooltip-px, 6px);
    min-width: var(--slider-tooltip-min-width, 20px);
    text-align: center;
    color: var(--slider-tooltip-color, #fff);
    border-radius: var(--slider-tooltip-radius, 5px);
    border: 1px solid var(--slider-tooltip-bg, #10B981);
    background: var(--slider-tooltip-bg, #10B981);
  }

  .slider-horizontal .slider-tooltip {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    bottom: calc(var(--slider-handle-height, 16px) + var(--slider-tooltip-arrow-size, 5px) + var(--slider-tooltip-distance, 3px));

    &:before {
      content: "";
      position: absolute;
      bottom: calc(var(--slider-tooltip-arrow-size, 5px) * -2);
      left: 50%;
      width: 0;
      height: 0;
      border: var(--slider-tooltip-arrow-size, 5px) solid transparent;
      border-top-color: inherit;
      transform: translate(-50%);
    }
  }

  .slider-vertical .slider-tooltip {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    right: calc(var(--slider-handle-height, 16px) + var(--slider-tooltip-arrow-size, 5px) + var(--slider-tooltip-distance, 3px));

    &:before {
      content: "";
      position: absolute;
      right: calc(var(--slider-tooltip-arrow-size, 5px) * -2);
      top: 50%;
      width: 0;
      height: 0;
      border: var(--slider-tooltip-arrow-size, 5px) solid transparent;
      border-left-color: inherit;
      transform: translateY(-50%);
    }
  }

  .slider-horizontal .slider-origin > .slider-tooltip {
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
    left: auto;
    bottom: calc(var(--slider-tooltip-arrow-size, 5px) + ((var(--slider-handle-height, 16px) - var(--slider-height, 6px)) / 2) + var(--slider-tooltip-distance, 3px));
  }

  .slider-vertical .slider-origin > .slider-tooltip {
    transform: translate(0, calc((var(--slider-tooltip-line-height, 1.25rem) - var(--slider-tooltip-py, 2px)) * -1));
    top: auto;
    right: calc(var(--slider-tooltip-arrow-size, 5px) + var(--slider-height, 6px) + ((var(--slider-handle-height, 16px) - var(--slider-height, 6px)) / 2) + var(--slider-tooltip-distance, 3px));
  }
</style>