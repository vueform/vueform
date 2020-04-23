<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>

      <div
        :class="theme.classes.radioGroup"
      >
        <template
          v-for="(item, value) in items"
        >
          <slot name="radio" :el$="el$" :item="item" :value="value">
            <component :is="slots.radio" :el$="el$" :item="item" :value="value" />
          </slot>
          
        </template>
      </div>

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import RadiogroupElement from './../../../../components/elements/RadiogroupElement'

  export default {
    mixins: [RadiogroupElement],
  }
</script>