<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <VueSlider
        v-bind="options"
        v-model="model"
        :name="name"
        :id="id"
        @callback="handleChange"
        ref="slider$"
      />

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import SliderElement from './../../../../components/elements/SliderElement'

  import VueSlider from 'vue-slider-component'

  export default {
    mixins: [SliderElement],
    components: {
      VueSlider,
    },
    data() {
      return {
        defaultClasses: {}
      }
    }
  }
</script>

<style lang="scss">
  .slider-element {
    .row {
      & > div:last-of-type {
        margin-top: 5px;
      }
    }
  }

  .vue-slider-component {
    .vue-slider {
      background-color: #777
    }

    .vue-slider-tooltip {
      border-color: #0597db;
      background-color: #0597db;
    }

    .vue-slider-process {
      background-color: #0597db;
    } 
  }
</style>