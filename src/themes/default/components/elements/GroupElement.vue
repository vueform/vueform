<template>
  <component :is="layout">

    <template v-slot:field>
      
      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <component
          v-for="(element, name, i) in children"
          v-bind="element"
          :is="component(element)"
          :name="name"
          :key="i"
        />
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
    name: 'GroupElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-group',
          childrenContainer: 'element-group',
        }
      }
    },
  }
</script>