<template>
  <component :is="elementLayout" :multiple="true">

    <template v-slot:field>
      
      <div :class="classes.childrenContainer">
        <slot>
          <component :is="component(element)"
            v-for="(element, name) in children"
            v-bind="element"
            :name="name"
            :key="name"
          />
        </slot>
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
  export default {
    name: 'GroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: 'form-row',
        }
      }
    },
  }
</script>