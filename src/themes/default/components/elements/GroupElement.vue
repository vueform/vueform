<template>
  <component :is="components.NestedElementLayout">

    <template
      v-for="(element, name, index) in children"
      slot="elements"
    >
      <component
        :is="component(element)"
        :schema="element"
        :name="name"
        :parent="el$"
        :key="index"
        v-mref:children$
      />
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
	</component>
</template>

<script>
  import GroupElement from './../../../../components/elements/GroupElement'

  export default {
    mixins: [GroupElement],
  }
</script>