<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <template v-if="buttonType === 'button'">

        <button
          v-if="isButtonLabelComponent"
          v-bind="button"
          :disabled="isDisabled"
          :class="classes.button"
          @click.prevent="handleClick"
        >
          <component :is="buttonLabel" :el$="el$" />
        </button>

        <button
          v-else
          v-bind="button"
          v-html="buttonLabel"
          :class="classes.button"
          :disabled="isDisabled"
          @click.prevent="handleClick" 
        />

      </template>

      <template v-else>
        <a
          v-if="isButtonLabelComponent"
          v-bind="button"
          :class="classes.button"
          @click="handleClick"
        >
          <component :is="buttonLabel" :el$="el$" />
        </a>

        <a
          v-else
          v-bind="button"
          v-html="buttonLabel"
          :class="classes.button"
          @click="handleClick"
        />
      </template>

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
    name: 'ButtonElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
          button_loading: '',
        },
      }
    }
  }
</script>