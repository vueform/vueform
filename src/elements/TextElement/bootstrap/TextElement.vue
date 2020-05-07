<template>
  <component :is="theme.components.BaseElementLayout">
    <template slot="field">
      <div>
        <input v-model="model" class="form-control" />
      </div>
    </template>

    <slot name="label" slot="label" :el$="el$"></slot>
  </component>
</template>

<script>
  import TextElement from './../index'

  export default {
    mixins: [TextElement],
  }
</script>