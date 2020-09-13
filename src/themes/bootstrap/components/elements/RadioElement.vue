<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>
      
      <div
        :class="classes.radioContainer"
      >
        <label 
          :class="classes.radioLabel"
          :for="name"
        >
          <input
            type="radio"
            v-model="model"
            :value="radioValue"
            :class="classes.radio"
            :name="fieldName"
            :id="id"
            :disabled="disabled"
            @change="handleChange"
            ref="radio"
          />
        
          <span v-html="text"></span>
        </label>
      </div>

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import RadioElement from './../../../../components/elements/RadioElement'

  export default {
    mixins: [RadioElement],
    data() {
      return {
        defaultClasses: {
          radioContainer: 'radio',
          radioLabel: '',
          radio: '',
        }
      }
    }
  }
</script>