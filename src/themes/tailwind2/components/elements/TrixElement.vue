<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <TrixWrapper
        :value="model"
        :placeholder="placeholder"
        :id="fieldId"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="trixEndpoint"
        :disabled="isDisabled"
        :class="classes.trix"
        @input="handleInput"
        @alert="handleError"
        ref="input"
      />

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
          container: '',
          trix: '',
          disabled: 'is-disabled',
        }
      }
    }
  }
</script>

<style lang="scss">

  .is-disabled {
    trix-toolbar .trix-button-group button {
      pointer-events: none;
      opacity: 0.5;
    }
  }
</style>