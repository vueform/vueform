<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>
      
      <div :class="[{[classes.inputContainer]: hasAddon}]">
        <component :is="components.InputAddon"
          v-if="addons.before"
          type="before"
        />

        <component
          :is="components.ElementLabelFloating"
          v-if="floating"
          :visible="!empty"
        >{{ floating }}</component>

        <input
          type="password"
          v-$model="model"
          :value="model"
          :name="name"
          :id="id"
          :class="classes.input"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          @keyup="handleKeyup"
          @select="handleKeyup"
          ref="input"
        />

        <component :is="components.InputAddon"
          v-if="addons.after"
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
    data() {
      return {
        defaultClasses: {
          inputContainer: 'input-group',
          input: 'form-control',
        }
      }
    },
  }
</script>