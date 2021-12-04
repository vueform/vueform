<template>
  <component :is="elementLayout">
    <template #element>
      <div :class="classes.wrapper">
        <!-- @vueform/slider component -->
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

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
import Slider from '@vueform/slider/src/Slider.vue'
  
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