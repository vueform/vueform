<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <div :class="classes.wrapper">
        <Slider
          :value="value"
          :modelValue="value"
          v-bind="fieldOptions"
          :classes="classes.slider"
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
          wrapper: '',
          slider: {},
        }
      }
    }
  }
</script>

<style lang="scss">
</style>