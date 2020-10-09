<template>
  <component v-if="wrap" :is="components.BaseElementLayout">

    <template slot="field">
      <div
        v-if="isHtml"
        v-html="content"
      ></div>

      <component
        v-else
        :is="content"
        :el$="el$"
      />
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="info" name="info" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>

  <div
    v-else-if="isHtml"
    v-html="content"
  ></div>

  <component
    v-else
    :is="content"
    :el$="el$"
  />
</template>

<script>
  import StaticElement from './../../../../components/elements/StaticElement'

  export default {
    name: 'StaticElement',
    mixins: [StaticElement],
  }
</script>