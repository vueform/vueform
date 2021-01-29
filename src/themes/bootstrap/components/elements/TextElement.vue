<template>
  <component :is="layout">
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
        />

        <input
          :value="model"
          @input="handleInput"
          :type="inputType"
          :name="name"
          :id="id"
          :class="classes.input"
          :placeholder="placeholder" 
          :autocomplete="autocomplete"
          :disabled="disabled"
          :readonly="readonly"
          ref="input"
        />

        yo

        <component :is="components.InputAddon"
          v-if="addons.after"
          type="after"
        />

      </div>

      <slot name="suffix"></slot>
      
    </template>
    
    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>
  </component>
</template>

<script>
  import TextElement from './../../../../components/elements/TextElement'

  export default {
    name: 'TextElement',
    mixins: [TextElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-text',
          inputContainer: 'input-group',
          input: 'form-control',
        }
      }
    },
  }
</script>