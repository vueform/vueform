<template>
  <component :is="theme.components.NestedElementLayout"
    :el$="el$"
  >
    <slot slot="prefix" name="prefix"></slot>

    <template
      v-for="(schema, name, index) in children"
      slot="elements"
    >
      <Element
        :is="schema.component || schema.type + '-element'"
        :schema="schema"
        :name="name"
        :parent="heritage"
        :key="index"
        ref="children$"
      />
    </template>

    <slot slot="suffix" name="suffix"></slot>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
	</component>
</template>

<script>
  import ObjectElement from './../../../../components/elements/ObjectElement'

  export default {
    mixins: [ObjectElement],
  }
</script>