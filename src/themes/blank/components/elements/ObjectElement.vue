<template>
  <component :is="elementLayout" :multiple="true">

    <template v-slot:field>
      
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

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot"></slot></template>
	</component>
</template>

<script>
  export default {
    name: 'ObjectElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>