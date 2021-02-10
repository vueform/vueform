<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <div :class="classes.buttonsContainer">
        <slot>
          <component
            v-for="(button, i) in children"
            :is="component(button)"
            :embed="true"
            :button="button"
            :name="i"
            :parent="el$"
            :key="i"
          />
        </slot>
      </div>

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
    name: 'ButtonsElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-buttons',
          buttonsContainer: 'button-group',
        }
      }
    }
  }
</script>