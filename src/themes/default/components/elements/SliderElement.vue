<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <Slider
        :value="value"
        :modelValue="value"
        v-bind="options"
        :id="fieldId"
        ref="input"
        @change="handleChange"
      />

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