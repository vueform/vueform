<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>

      <toggle-button
        v-model="model"
        :name="String(name)"
        :id="String(id)"
        :sync="sync"
        :labels="labels"
        :speed="speed"
        :width="dimensions.width"
        :height="dimensions.height"
        :color="colors.background"
        :switchColor="colors.handle"
        :cssColors="cssColors"
        :disabled="disabled"
        @change="handleChange"
        ref="toggle$"
      />

      <span v-if="text" :class="theme.classes.toggleText">
        {{ text }}
      </span>

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
  import ToggleElement from './../../../../components/elements/ToggleElement'

  import ToggleButton from 'vue-js-toggle-button/src/Button'

  export default {
    mixins: [ToggleElement],
    components: {
      ToggleButton,
    },
  }
</script>