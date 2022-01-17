<template>
  <component :is="elementLayout">
    <template #element>
      <ElementLabelFloating
        v-if="hasFloating && !empty"
        :visible="!empty"
     />

      <!-- @vueform/multiselect copmonent -->
      <Multiselect
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

        <template v-if="fieldOptions.mode == 'tags'" #tag="{ option, handleTagRemove, disabled }">
          <slot name="tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :el$="el$">
            <component :is="fieldSlots.tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :el$="el$"/>
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
    name: 'TagsElement',
    components: {
      Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
</style>