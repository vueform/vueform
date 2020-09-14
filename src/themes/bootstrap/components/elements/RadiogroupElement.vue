<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <div
        :class="classes.radioGroup"
      >
        <template
          v-for="(item, value, key) in items"
        >
          <slot name="radio" :el$="el$" :item="item" :value="value">
            <component
              :is="slots.radio"
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
  import RadiogroupElement from './../../../../components/elements/RadiogroupElement'

  export default {
    mixins: [RadiogroupElement],
    data() {
      return {
        defaultClasses: {
          radioGroup: 'radio-group',
        }
      }
    }
  }
</script>