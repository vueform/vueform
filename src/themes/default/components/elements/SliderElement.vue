<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <VueSlider
        v-bind="options"
        v-model="model"
        :name="name"
        :id="id"
        @change="handleChange"
        ref="input"
      />

      <slot name="suffix"></slot>

    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component v-if="slots.info" :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component v-if="slots.before" :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component v-if="slots.label" :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component v-if="slots.between" :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component v-if="slots.description" :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component v-if="slots.error" :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component v-if="slots.message" :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component v-if="slots.after" :is="slots.after" type="after" /></slot></template>
  </component>
</template>

<script>
  import SliderElement from './../../../../components/elements/SliderElement'

  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/default.css'

  export default {
    name: 'SliderElement',
    mixins: [SliderElement],
    components: {
      VueSlider,
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