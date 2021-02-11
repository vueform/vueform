<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <Slider
        v-model="model"
        v-bind="options"
        :id="fieldId"
        @change="handleChange"
        ref="input"
      />

      <slot name="suffix"></slot>

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
  import '@vueform/slider/themes/default.scss'
  

  export default {
    name: 'SliderElement',
    components: {
      Slider,
    },
    data() {
      return {
        defaultClasses: {
          container: 'lf-slider',
        }
      }
    }
  }
</script>