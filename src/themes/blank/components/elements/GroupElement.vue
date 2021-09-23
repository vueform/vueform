<template>
  <component :is="elementLayout" :multiple="true">
    <template #field>
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

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
	</component>
</template>

<script>
  export default {
    name: 'GroupElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>