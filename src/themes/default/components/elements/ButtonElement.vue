<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <component
        :is="buttonComponent"
        :name="name"
        :button="button"
        :parent="el$"
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
  export default {
    name: 'ButtonElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-button',
        }
      }
    }
  }
</script>