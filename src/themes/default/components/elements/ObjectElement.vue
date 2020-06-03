<template>
  <component :is="components.NestedElementLayout">

    <slot slot="prefix" name="prefix"></slot>

    <div :class="classes.elements" slot="elements">
      <template v-for="(element, name) in children">
        <component
          :is="component(element)"
          :schema="element"
          :name="name"
          :parent="el$"
          :key="name"
          v-mref:children$
        />
      </template>
    </div>

    <slot slot="suffix" name="suffix"></slot>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
	</component>
</template>

<script>
  import ObjectElement from './../../../../components/elements/ObjectElement'

  export default {
    mixins: [ObjectElement],
    data() {
      return {
        elements: 'row',
      }
    }
  }
</script>