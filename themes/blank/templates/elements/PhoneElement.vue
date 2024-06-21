<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.inputContainer">
        <div :class="classes.optionsWrapper">
          <ElementAddonOptions
            :options="addonOptions"
            :placeholder="addonPlaceholder"
            @select="handleOptionSelect"
            @open="handleOpen"
            @close="handleClose"
            ref="options$"
          />
        </div>
        <ElementLabelFloating v-if="hasFloating && !empty" :visible="!empty" />
        <ElementLoader v-if="isLoading"/>
        <input
          :value="model"
          :type="inputType"
          :name="name"
          :id="fieldId"
          :class="classes.input"
          :placeholder="Placeholder" 
          :autocomplete="autocomplete"
          :disabled="isDisabled"
          :readonly="readonly"
          v-bind="{
            ...attrs,
            ...aria,
          }"
          @keydown="handleKeydown"
          @input="handleInput"
          @select="handleInput"
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
    name: 'PhoneElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          inputContainer: '',
          input: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>