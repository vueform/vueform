<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <div
        :class="classes.checkboxGroup"
      >
          <slot name="checkbox" :el$="el$" :item="item" :value="value">
            <component
              v-for="(item, value, key) in items"
              :is="slots.checkbox"
              :el$="el$"
              :item="item"
              :value="value"
              :key="key"
            />
          </slot>
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
  import CheckboxgroupElement from './../../../../components/elements/CheckboxgroupElement'

  export default {
    name: 'CheckboxgroupElement',
    mixins: [CheckboxgroupElement],
    data() {
      return {
        defaultClasses: {
          checkboxGroup: 'checkbox-group',
        }
      }
    }
  }
</script>