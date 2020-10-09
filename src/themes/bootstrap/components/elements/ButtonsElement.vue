<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">

      <slot name="prefix"></slot>

      <div :class="classes.wrapper">
        <component
          v-for="(button, name) in buttons"
          :is="component(button)"
          :button="button"
          :key="name"
        />
      </div>

      <slot name="suffix"></slot>
      
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="info" name="info" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import ButtonsElement from './../../../../components/elements/ButtonsElement'

  export default {
    mixins: [ButtonsElement],
    data() {
      return {
        defaultClasses: {
          wrapper: 'lf-buttons'
        }
      }
    }
  }
</script>