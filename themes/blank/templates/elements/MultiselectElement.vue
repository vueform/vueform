<template>
  <component :is="elementLayout">
    <template #element>
      <ElementLabelFloating
        v-if="hasFloating && !empty"
        :visible="!empty"
     />

      <!-- Native select -->
      <div v-if="isNative" :class="classes.inputWrapper">
        <select
          v-model="value"
          :class="classes.input"
          :name="name"
          :id="fieldId"
          :multiple="true"
          :disabled="isDisabled"
          ref="input"
        >
          <option
            v-for="(option, index) in nativeItems" 
            :value="option.value"
            :key="index"
          >
            {{ option.label }}
          </option>
        </select>
        <span v-if="placeholder && empty && !isDisabled && type == 'select'" :class="classes.inputPlaceholder">{{ placeholder }}</span>
      </div>
      <!-- @vueform/multiselect copmonent -->
      <Multiselect
        v-else
        v-bind="fieldOptions"
        v-model="value"
        :classes="classes.select"
        :id="fieldId"
        :name="name"
        :options="items"
        :disabled="isDisabled"
        :placeholder="placeholder"
        @select="handleSelect"
        @deselect="handleDeselect"
        @search-change="handleSearchChange"
        @tag="handleTag"
        @open="handleOpen"
        @close="handleClose"
        @clear="handleClear"
        @paste="handlePaste"
        ref="input"
      >
        <template v-for="(slotName, slotKey) in {
          option: 'option', noresults: 'no-results', nooptions: 'no-options',
          afterlist: 'after-list', beforelist: 'before-list', placeholder: 'placeholder',
          grouplabel: 'group-label', caret: 'caret', clear: 'clear', spinner: 'spinner',
          default: 'default',
        }" #[slotKey]="props">
          <slot :name="slotName" v-bind="props" :el$="el$">
            <component :is="fieldSlots[slotName]" v-bind="props" :el$="el$"/>
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'multiple'" #multiplelabel="{ values }">
          <slot name="multiple-label" :values="values" :el$="el$">
            <component :is="fieldSlots['multiple-label']" :values="values" :el$="el$"/>
          </slot>
        </template>
      </Multiselect>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
import Multiselect from '@vueform/multiselect/src/Multiselect.vue'

  export default {
    name: 'MultiselectElement',
    components: {
      Multiselect,
    },
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
</style>