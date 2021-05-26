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
          button: 'btn',
          enabled: '',
          disabled: 'btn-disabled',
          loading: 'btn-loading',
        },
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .btn-loading {
    position: relative;
    color: transparent !important;

    &:after {
      content: "";
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: text-bottom;
      border: .25em solid;
      border-right: .25em solid transparent;
      border-radius: 50%;
      -webkit-animation: button-spinner .75s linear infinite;
      animation: button-spinner .75s linear infinite;
      font-size: 9px;
      position: absolute;
      left: calc(50% - 7px);
      top: calc(50% - 7px);
      color: initial;
      color: #ffffff;
    }
  }

  @keyframes button-spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
</style>