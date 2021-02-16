<template>
  <component :is="layout">

    <template v-slot:field>
      
      <slot name="prefix"></slot>

      <div :class="classes.childrenContainer">
        <slot>
          <component :is="component(element)"
            v-for="(element, name) in children"
            v-bind="element"
            :embed="embed"
            :name="name"
            :key="name"
            @remove="(e) => $emit('remove', e)"
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
    name: 'ObjectElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-object',
          childrenContainer: 'element-group',
        }
      }
    }
  }
</script>