<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.inputContainer">
        <ElementAddon v-if="hasAddonBefore" type="before">
          <slot name="addon-before"/>
        </ElementAddon>

        <ElementAddon v-if="hasAddonAfter" type="after">
          <slot name="addon-after"/>
        </ElementAddon>

        <ElementLabelFloating
          v-if="hasFloating && !empty"
          :visible="!empty"
       />

        <ElementLoader
          v-show="pending"
       />

        <textarea
          :value="model"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="Placeholder"
          :disabled="isDisabled"
          :readonly="readonly"
          :rows="rows"
          v-bind="{
            ...attrs,
            ...aria,
          }"
          @keydown="handleKeydown"
          @keyup="handleKeyup"
          @keypress="handleKeypress"
          @input="handleInput"
          @blur="handleBlur"
          ref="input"
       />
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'TextareaElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>