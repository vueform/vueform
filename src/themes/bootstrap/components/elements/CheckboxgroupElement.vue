<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <div
        :class="classes.checkboxGroup"
      >
        <template
          v-for="(item, value, key) in items"
        >
          <slot name="checkbox" :el$="el$" :item="item" :value="value">
            <component
              :is="slots.checkbox"
              :el$="el$"
              :item="item"
              :value="value"
              :key="key"
            />
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
  import CheckboxgroupElement from './../../../../components/elements/CheckboxgroupElement'

  export default {
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