<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>
      
      <div
        :class="theme.classes.checkboxContainer"
      >
        <label 
          :class="theme.classes.checkboxLabel"
        >
          <input
            type="checkbox"
            v-model="model"
            :class="theme.classes.checkbox"
            :name="name"
            :id="id"
            :true-value="trueValue"
            :false-value="falseValue"
            :disabled="disabled"
            @change="handleChange"
            ref="checkbox"
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
  import CheckboxElement from './../../../../components/elements/CheckboxElement'

  export default {
    mixins: [CheckboxElement],
  }
</script>