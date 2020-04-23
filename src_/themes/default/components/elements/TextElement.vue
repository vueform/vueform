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

        <MaskedInput
          v-if="masked"
          v-model="model"
          :type="type"
          :name="name"
          :id="id"
          :class="theme.classes.input"
          :placeholder="placeholder"
          :autocomplete="autocomplete ? 'on' : 'off'"
          :disabled="disabled"
          :readonly="readonly"
          :mask="mask"
          :guide="guide"
          :placeholderChar="placeholderChar"
          :keepCharPositions="keepCharPositions"
          :pipe="pipe"
          :showMask="showMask"
          @keyup="handleKeyup"
          ref="input"
        />

        <input
          v-else
          v-model="model"
          :type="type"
          :name="name"
          :id="id"
          :class="theme.classes.input"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
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

      <component :is="theme.components.ElementLoader"
        v-if="pending"
      />

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
  }
</script>