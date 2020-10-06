<template>
  <component :is="components.BaseElementLayout">
    <template v-slot:field>

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

        <MaskedInput
          v-if="masked"
          :value="String(model === null ? '' : model)"
          @change="model = $event.target.value"
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
          :value="model"
          @input="model = $event.target.value"
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
          v-if="addons.after"
          type="after"
        />

      </div>

      <slot name="suffix"></slot>
      
    </template>
    
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" /></slot></template>
  </component>
</template>

<script>
  import TextElement from './../../../../components/elements/TextElement'
  import { setup } from './../../../../index'

  import MaskedInput from 'vue-text-mask'

  const defaultClasses = {
    input: 'form-control'
  }

  export default {
    mixins: [TextElement],
    components: {
      MaskedInput,
    },
    setup: (props, context) => setup(props, context, TextElement, defaultClasses),
    data() {
      return {
        defaultClasses,
      }
    },
  }
</script>