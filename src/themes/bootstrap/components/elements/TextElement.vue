<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <div>
        <input v-model="model" :class="classes.input" />
      </div>
    </template>

    <slot name="label" slot="label" :el$="el$"></slot>
  </component>
</template>

<script>
  import TextElement from './../../../../components/elements/TextElement'

  export default {
    mixins: [TextElement],
    data() {
      return {
        defaultClasses: {
          input: 'form-control'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'variables';
</style>