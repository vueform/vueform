<template>
  <component :is="elementLayout" :multiple="true">
    <template #field>
      <div :class="classes.wrapper">
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
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
	</component>
</template>

<script>
  export default {
    name: 'ObjectElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>