<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <template v-if="buttonType === 'button'">
        <button v-if="isButtonLabelComponent" v-bind="button" :class="classes.button" @click.prevent="handleClick">
          <component :is="buttonLabel" :el$="el$" />
        </button>
        <button v-else :class="classes.button" v-bind="button" v-html="buttonLabel" @click.prevent="handleClick" />
      </template>
      <template v-else>
        <a v-if="isButtonLabelComponent" v-bind="button" :class="classes.button" @click="handleClick">
          <component :is="buttonLabel" :el$="el$" />
        </a>
        <a v-else :class="classes.button" v-bind="button" v-html="buttonLabel"  @click="handleClick"/>
      </template>

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
    name: 'ButtonElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-button',
          button: 'lf-btn',
          loading: 'btn-loading',
          disabled: 'btn-disabled',
          left: 'align-left',
          center: 'align-center',
          right: 'align-right',
        },
        containers: {
          button: 'button',
          loading: 'loading',
          disabled: 'disabled',
          left: 'left',
          center: 'center',
          right: 'right',
        }
      }
    }
  }
</script>