<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.wrapper">
        <!-- @vueform/slider component -->
        <Slider
          :value="value"
          :modelValue="value"
          v-bind="fieldOptions"
          :aria="aria"
          :classes="classes.slider"
          :id="fieldId"
          ref="input"
          @update="handleUpdate"
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
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          slider: {
            target: '',
            focused: '',
            tooltipFocus: '',
            tooltipDrag: '',
            ltr: '',
            rtl: '',
            horizontal: '',
            vertical: '',
            textDirectionRtl: '',
            textDirectionLtr: '',
            base: '',
            connects: '',
            connect: '',
            origin: '',
            handle: '',
            touchArea: '',
            tooltip: '',
            tooltipTop: '',
            tooltipBottom: '',
            tooltipLeft: '',
            tooltipRight: '',
            tooltipHidden: '',
            active: '',
            draggable: '',
            tap: '',
            drag: '',
          },
        }
      }
    }
  }
</script>

<style lang="scss">
</style>