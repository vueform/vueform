<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <VueSlider
        v-bind="options"
        v-model="model"
        :name="name"
        :id="id"
        :min="min"
        :max="max"
        :disabled="disabled"
        @drag-end="handleChange"
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

  import VueSlider from 'vue-slider-component';

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