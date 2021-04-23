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

  .slider-wrapper {
    margin-top: calc((#{$input-height} - 6px) / 2)
  }

  /* Functional styling;
  * These styles are required for noUiSlider to function.
  * You don't need to change these rules to apply your design.
  */
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

  /* Wrapper for all connect elements.
  */
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

  /* Offset direction
  */
  .slider-txt-dir-rtl.slider-horizontal .slider-origin {
    left: 0;
    right: auto;
  }

  /* Give origins 0 height/width so they don't interfere with clicking the
  * connect elements.
  */
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

  /* Slider size and handle placement;
  */
  .slider-horizontal {
    height: 6px;
  }

  .slider-horizontal .slider-handle {
    width: 16px;
    height: 16px;
    top: -6px;
    right: -8px;
  }

  .slider-vertical {
    width: 6px;
    height: 300px;
  }

  .slider-vertical .slider-handle {
    width: 16px;
    height: 16px;
    top: -8px;
    right: -6px;
  }

  .slider-txt-dir-rtl.slider-horizontal .slider-handle {
    left: -8px;
    right: auto;
  }

  /* Styling;
  * Giving the connect element a border radius causes issues with using transform: scale
  */
  .slider-base {
    background: $input-border-color;
    border-radius: 3px;
  }

  .slider-connects {
    border-radius: 3px;
  }

  .slider-connect {
    background: $primary;
    cursor: pointer;
  }

  /* Handles and cursors;
  */
  .slider-draggable {
    cursor: ew-resize;
  }

  .slider-vertical .slider-draggable {
    cursor: ns-resize;
  }

  .slider-handle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 0;
    right: -8px;
    box-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.32);
    cursor: grab;

    &:focus {
      outline: none;
    }
  }

  .slider-active {
    box-shadow: 0.5px 0.5px 2px 1px rgba(0,0,0,.42);
    cursor: grabbing;
  }

  /* Disabled state;
  */

  [disabled] .slider-base {
    background: $input-disabled-bg;
  }
  [disabled] .slider-connect {
    background: $input-border-color;
  }
  [disabled].slider-target,
  [disabled].slider-handle,
  [disabled] .slider-handle {
    cursor: not-allowed;
  }

  [disabled] .slider-tooltip {
    background: $input-border-color;
    border-color: $input-border-color;
  }

  .slider-tooltip {
    position: absolute;
    display: block;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    padding: 2px 5px;
    min-width: 20px;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    border: 1px solid $primary;
    background: $primary;
  }

  .slider-horizontal .slider-tooltip {
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    left: 50%;
    bottom: 24px;

    &:before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-top-color: inherit;
      transform: translate(-50%);
    }
  }

  .slider-vertical .slider-tooltip {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    top: 50%;
    right: 24px;

    &:before {
      content: "";
      position: absolute;
      right: -10px;
      top: 50%;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-left-color: inherit;
      transform: translateY(-50%);
    }
  }

  .slider-horizontal .slider-origin > .slider-tooltip {
    -webkit-transform: translate(50%, 0);
    transform: translate(50%, 0);
    left: auto;
    bottom: 14px;
  }

  .slider-vertical .slider-origin > .slider-tooltip {
    -webkit-transform: translate(0, -18px);
    transform: translate(0, -18px);
    top: auto;
    right: 18px;
  }

  /* Base;
  *
  */
  .slider-pips,
  .slider-pips * {
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .slider-pips {
    position: absolute;
    color: #999;
  }

  /* Values;
  *
  */
  .slider-value {
    position: absolute;
    white-space: nowrap;
    text-align: center;
  }

  .slider-value-sub {
    color: #ccc;
    font-size: 10px;
  }

  /* Markings;
  *
  */
  .slider-marker {
    position: absolute;
    background: #CCC;
  }

  .slider-marker-sub {
    background: #AAA;
  }

  .slider-marker-large {
    background: #AAA;
  }

  /* Horizontal layout;
  *
  */
  .slider-pips-horizontal {
    padding: 10px 0;
    height: 80px;
    top: 100%;
    left: 0;
    width: 100%;
  }

  .slider-value-horizontal {
    -webkit-transform: translate(-50%, 50%);
    transform: translate(-50%, 50%);

    .slider-rtl & {
      -webkit-transform: translate(50%, 50%);
      transform: translate(50%, 50%);
    }
  }

  .slider-marker-horizontal.slider-marker {
    margin-left: -1px;
    width: 2px;
    height: 5px;
  }

  .slider-marker-horizontal.slider-marker-sub {
    height: 10px;
  }

  .slider-marker-horizontal.slider-marker-large {
    height: 15px;
  }

  /* Vertical layout;
  *
  */
  .slider-pips-vertical {
    padding: 0 10px;
    height: 100%;
    top: 0;
    left: 100%;
  }

  .slider-value-vertical {
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    padding-left: 25px;

    .slider-rtl & {
      -webkit-transform: translate(0, 50%);
      transform: translate(0, 50%);
    }
  }

  .slider-marker-vertical.slider-marker {
    width: 5px;
    height: 2px;
    margin-top: -1px;
  }

  .slider-marker-vertical.slider-marker-sub {
    width: 10px;
  }

  .slider-marker-vertical.slider-marker-large {
    width: 15px;
  }
</style>