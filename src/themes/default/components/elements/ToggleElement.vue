<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <Toggle
        :value="model"
        :modelValue="model"
        v-bind="options"
        :name="name"
        :id="fieldId"
        @input="handleChange"
        ref="input"
      />

      <span v-if="text" :class="classes.toggleText" v-html="text"></span>

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
  import Toggle from '@vueform/toggle/src/Toggle'
  import '@vueform/toggle/themes/default.css'

  export default {
    name: 'ToggleElement',
    components: {
      Toggle,
    },
    data() {
      return {
        defaultClasses: {
          container: 'lf-toggle',
          toggleText: 'toggle-text',
        }
      }
    }
  }
</script>