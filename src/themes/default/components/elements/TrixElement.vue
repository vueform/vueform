<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <Trix
        :value="model"
        :placeholder="placeholder"
        :id="fieldId"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="trixEndpoint"
        :disabled="isDisabled"
        :class="{[classes.trixDisabled]: isDisabled}"
        @input="handleInput"
        @alert="handleError"
        ref="input"
      />

      <slot name="suffix"></slot>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  export default {
    name: 'TrixElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-trix',
          trixDisabled: 'trix-disabled',
        }
      }
    }
  }
</script>