<template>
  <component :is="elementLayout">

    <template #field>

      <ElementLabelFloating
        v-if="floating"
        :visible="!empty"
      />

      <div v-if="isNative" :class="classes.inputWrapper">
        <select
          v-model="value"
          :class="classes.input"
          :name="name"
          :id="fieldId"
          :multiple="fieldOptions.mode === 'multiple'"
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
        <span v-if="placeholder && empty && !isDisabled" :class="classes.inputPlaceholder">{{ placeholder }}</span>
      </div>
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
        <template v-for="(slot) in [
          'no-results', 'no-options', 'before-list', 'after-list',
          'placeholder', 'group-label', 'caret', 'clear', 'spinner',
          'option',
        ]" v-slot:[slot]="props">
          <slot :name="slot" v-bind="props" :el$="el$">
            <component :is="fieldSlots[slot]" v-bind="props" :el$="el$" />
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'single'" #singlelabel="{ value }">
          <slot name="single-label" :value="value" :el$="el$">
            <component :is="fieldSlots['single-label']" :value="value" :el$="el$" />
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'multiple'" #multiplelabel="{ values }">
          <slot name="multiple-label" :values="values" :el$="el$">
            <component :is="fieldSlots['multiple-label']" :values="values" :el$="el$" />
          </slot>
        </template>

        <template v-if="fieldOptions.mode == 'tags'" #tag="{ option, handleTagRemove, disabled }">
          <slot name="tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :el$="el$">
            <component :is="fieldSlots.tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :el$="el$" />
          </slot>
        </template>

      </Multiselect>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$" /></slot></template>
  </component>
</template>

<script>
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'SelectElement',
    components: {
      Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: '',
          inputPlaceholder: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
</style>