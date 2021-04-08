<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <Slider
        :value="value"
        :modelValue="value"
        v-bind="fieldOptions"
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

<style lang="scss">
  @import 'node_modules/@vueform/slider/themes/default.scss';
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .slider-base {
    background: $input-border-color;
  }

  .slider-connect {
    background: $primary;
  }

  .slider-tooltip {
    background: $primary;
    border-color: $primary;
  }

  [disabled] {
    & .slider-base {
      background: $input-disabled-bg;
    }

    & .slider-tooltip {
      background: $input-border-color;
      border-color: $input-border-color;
    }

    & .slider-connect {
      background: $input-border-color;
    }
  }
</style>