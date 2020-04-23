<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>
      
      <div :class="[{[theme.classes.inputContainer]: hasAddon}]">
        <component :is="theme.components.InputAddon"
          v-if="addon.before"
          :addon="addon.before"
          type="before"
        />

        <component :is="theme.components.ElementLabelFloating"
          v-if="floating"
          :visible="!empty"
        >{{ floating }}</component>

        <input
          v-model="model"
          :type="type"
          :name="name"
          :id="id"
          :class="theme.classes.input"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @keyup="handleKeyup"
          ref="input"
        />
        
        <component :is="theme.components.InputAddon"
          v-if="addon.after"
          :addon="addon.after"
          type="after"
        />
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
  import PasswordElement from './../../../../components/elements/PasswordElement'

  export default {
    mixins: [PasswordElement],
  }
</script>