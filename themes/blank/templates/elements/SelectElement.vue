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
        <span :class="classes.inputCaret"></span>
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
        
        <template v-if="fieldOptions.mode == 'single'" #singlelabel="{ value }">
          <slot name="single-label" :value="value" :el$="el$">
            <component :is="fieldSlots['single-label']" :value="value" :el$="el$"/>
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
    name: 'SelectElement',
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
          input_sm: '',
          input_md: '',
          input_lg: '',
          inputWrapper: '',
          inputWrapper_sm: '',
          inputWrapper_md: '',
          inputWrapper_lg: '',
          inputPlaceholder: '',
          inputPlaceholder_sm: '',
          inputPlaceholder_md: '',
          inputPlaceholder_lg: '',
          inputCaret: '',
          select: {
            container: '',
            container_sm: '',
            container_md: '',
            container_lg: '',
            containerDisabled: '',
            containerOpen: '',
            containerOpenTop: '',
            containerActive: '',
            singleLabel: '',
            singleLabel_sm: '',
            singleLabel_md: '',
            singleLabel_lg: '',
            singleLabelText: '',
            search: '',
            search_sm: '',
            search_md: '',
            search_lg: '',
            placeholder: '',
            placeholder_sm: '',
            placeholder_md: '',
            placeholder_lg: '',
            caret: '',
            caret_sm: '',
            caret_md: '',
            caret_lg: '',
            caretOpen: '',
            clear: '',
            clear_sm: '',
            clear_md: '',
            clear_lg: '',
            clearIcon: '',
            spinner: '',
            spinner_sm: '',
            spinner_md: '',
            spinner_lg: '',
            dropdown: '',
            dropdown_sm: '',
            dropdown_md: '',
            dropdown_lg: '',
            dropdownTop: '',
            dropdownTop_sm: '',
            dropdownTop_md: '',
            dropdownTop_lg: '',
            dropdownHidden: '',
            options: '',
            optionsTop: '',
            group: '',
            groupLabel: '',
            groupLabel_sm: '',
            groupLabel_md: '',
            groupLabel_lg: '',
            groupLabelPointable: '',
            groupLabelPointed: '',
            groupLabelSelected: '',
            groupLabelDisabled: '',
            groupLabelSelectedPointed: '',
            groupLabelSelectedDisabled: '',
            groupOptions: '',
            option: '',
            option_sm: '',
            option_md: '',
            option_lg: '',
            optionPointed: '',
            optionSelected: '',
            optionDisabled: '',
            optionSelectedPointed: '',
            optionSelectedDisabled: '',
            noOptions: '',
            noOptions_sm: '',
            noOptions_md: '',
            noOptions_lg: '',
            noResults: '',
            noResults_sm: '',
            noResults_md: '',
            noResults_lg: '',
            fakeInput: '',
            spacer: '',
            spacer_sm: '',
            spacer_md: '',
            spacer_lg: '',
            $container: (classes, { Size }) => ([
              classes.select.container,
              classes.select[`container_${Size}`],
            ]),
            $search: (classes, { Size }) => ([
              classes.select.search,
              classes.select[`search_${Size}`],
            ]),
            $placeholder: (classes, { Size }) => ([
              classes.select.placeholder,
              classes.select[`placeholder_${Size}`],
            ]),
            $caret: (classes, { Size }) => ([
              classes.select.caret,
              classes.select[`caret_${Size}`],
            ]),
            $clear: (classes, { Size }) => ([
              classes.select.clear,
              classes.select[`clear_${Size}`],
            ]),
            $spinner: (classes, { Size }) => ([
              classes.select.spinner,
              classes.select[`spinner_${Size}`],
            ]),
            $dropdown: (classes, { Size }) => ([
              classes.select.dropdown,
              classes.select[`dropdown_${Size}`],
            ]),
            $dropdownTop: (classes, { Size }) => ([
              classes.select.dropdownTop,
              classes.select[`dropdownTop_${Size}`],
            ]),
            $groupLabel: (classes, { Size }) => ([
              classes.select.groupLabel,
              classes.select[`groupLabel_${Size}`],
            ]),
            $option: (classes, { Size }) => ([
              classes.select.option,
              classes.select[`option_${Size}`],
            ]),
            $spacer: (classes, { Size }) => ([
              classes.select.spacer,
              classes.select[`spacer_${Size}`],
            ]),
            $noOptions: (classes, { Size }) => ([
              classes.select.noOptions,
              classes.select[`noOptions_${Size}`],
            ]),
            $noResults: (classes, { Size }) => ([
              classes.select.noResults,
              classes.select[`noResults_${Size}`],
            ]),
            $singleLabel: (classes, { Size }) => ([
              classes.select.singleLabel,
              classes.select[`singleLabel_${Size}`],
            ]),
          },
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled,
          ]),
          $inputWrapper: (classes, { Size }) => ([
            classes.inputWrapper,
            classes[`inputWrapper_${Size}`],
          ]),
          $inputPlaceholder: (classes, { Size }) => ([
            classes.inputPlaceholder,
            classes[`inputPlaceholder_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>