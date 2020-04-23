<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>

      <Trix
        v-model="model"
        :placeholder="placeholder"
        :id="id"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="endpoint"
        :disabled="disabled"
        :class="{[theme.classes.trixDisabled]: disabled}"
        @change="handleChange"
        @alert="handleAlert"
        ref="trix$"
      />

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
  import TrixElement from './../../../../components/elements/TrixElement'

  import Trix from './../../../../components/wrappers/Trix'

  export default {
    mixins: [TrixElement],
    components: {
      Trix,
    },
  }
</script>