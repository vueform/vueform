<template>
  <component :is="elementLayout">
    <template v-slot:field>

      <div :class="classes.inputContainer">
        <slot name="addon-before">
          <component :is="fieldSlots.addonBefore"
            v-if="addons.before"
            type="before"
          />
        </slot>

        <ElementLabelFloating
          v-if="floating"
          :visible="!empty"
        />

        <ElementLoader
          v-show="pending"
        />

        <input
          :value="model"
          :type="inputType"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="placeholder" 
          :autocomplete="autocomplete"
          :disabled="isDisabled"
          :readonly="readonly"
          @input="handleInput"
          @select="handleInput"
          ref="input"
        />

        <slot name="addon-after">
          <component :is="fieldSlots.addonAfter"
            v-if="addons.after"
            type="after"
          />
        </slot>

      </div>

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
    name: 'TextElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'input-group',
          input: 'form-control',
        }
      }
    },
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  /* Fix for border radius bug introduced by inserting and extra div between the prefix and .form control */
  
  .input-group > :not(.input-group-prepend) ~ .form-control:not(:first-child),
  .input-group:not(.has-validation) > :not(.input-group-prepend) ~ .form-control {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  .input-group > .input-group-prepend ~ .form-control:not(:first-child),
  .input-group:not(.has-validation) > .input-group-prepend ~ .form-control {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
</style>