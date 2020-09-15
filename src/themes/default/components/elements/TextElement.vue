<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">

      <slot name="prefix"></slot>

      <div :class="[{[classes.inputContainer]: hasAddon}]">
        <component :is="components.InputAddon"
          v-if="addon.before"
          type="before"
        />

        <component
          :is="components.ElementLabelFloating"
          v-if="floating"
          :visible="!empty"
        >{{ floating }}</component>

        <MaskedInput
          v-if="masked"
          v-$model="model"
          :value="String(model === null ? '' : model)"
          :type="inputType"
          :name="name"
          :id="id"
          :class="classes.input"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :readonly="readonly"
          :mask="mask"
          :guide="guide"
          :placeholderChar="placeholderChar"
          :keepCharPositions="keepCharPositions"
          :pipe="pipe"
          :showMask="showMask"
          @keyup="handleKeyup"
          @select="handleKeyup"
          ref="input"
        />

        <input
          v-else
          v-$model="model"
          :value="model"
          :type="inputType"
          :name="name"
          :id="id"
          :class="classes.input"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :readonly="readonly"
          @keyup="handleKeyup"
          @select="handleKeyup"
          ref="input"
        />

        <component :is="components.InputAddon"
          v-if="addon.after"
          type="after"
        />

      </div>

      <slot name="suffix"></slot>
      
    </template>
    
    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="info" name="info" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import TextElement from './../../../../components/elements/TextElement'

  import MaskedInput from 'vue-text-mask'

  export default {
    mixins: [TextElement],
    components: {
      MaskedInput,
    },
    data() {
      return {
        defaultClasses: {
          input: 'form-control'
        }
      }
    }
  }
</script>