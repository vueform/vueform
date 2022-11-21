<template>
  <component :is="elementLayout" :multiple="true" ref="container">
    <template #element>
      <div :class="classes.wrapper" role="group" :aria-labelledby="labelId">
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
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>