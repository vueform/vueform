<template>
  <component :is="elementLayout" ref="container">
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
        :options="resolvedOptions"
        :disabled="isDisabled"
        :placeholder="Placeholder"
        :attrs="attrs"
        :aria="aria"
        :locale="form$.locale$"
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
        merge: true,
        defaultClasses: {
          container: '',
          select: {
            container: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            search: '',
            tags: '',
            tag: '',
            tagDisabled: '',
            tagRemove: '',
            tagRemoveIcon: '',
            tagsSearchWrapper: '',
            tagsSearch: '',
            tagsSearchCopy: '',
            placeholder: '',
            caret: '',
            caretOpen: '',
            clear: '',
            clearIcon: '',
            spinner: '',
            dropdown: '',
            dropdownTop: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noResults: '',
            fakeInput: '',
            spacer: '',
          },
        }
      }
    }
  }
</script>

<style lang="scss">
</style>