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
        ref="input"
      >
        <template #option="{ option, search }">
          <MultiselectOption :option="option" :search="search">
            <slot name="option" :option="option" :search="search">
              <component :is="fieldSlots.option" :option="option" :search="search" />
            </slot>
          </MultiselectOption>
        </template>
        
        <template v-if="fieldOptions.mode == 'single'" #singlelabel="{ value }">
          <MultiselectSingleLabel :value="value">
            <slot name="single-label" :value="value">
              <component :is="fieldSlots['single-label']" :value="value" />
            </slot>
          </MultiselectSingleLabel>
        </template>
        
        <template v-if="fieldOptions.mode == 'multiple'" #multiplelabel="{ values }">
          <MultiselectMultipleLabel :values="values">
            <slot name="multiple-label" :values="values">
              <component :is="fieldSlots['multiple-label']" :values="values" />
            </slot>
          </MultiselectMultipleLabel>
        </template>

        <template v-if="fieldOptions.mode == 'tags'" #tag="{ option, handleTagRemove, disabled }">
          <MultiselectTag :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled">
            <template #default="{ classes }">
              <slot name="tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :classes="classes">
                <component :is="fieldSlots.tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :classes="classes" />
              </slot>
            </template>
          </MultiselectTag>
        </template>

        <template #noresults>
          <MultiselectNoResults>
            <slot name="no-results">
              <component :is="fieldSlots['no-results']" />
            </slot>
          </MultiselectNoResults>
        </template>

        <template #nooptions>
          <MultiselectNoOptions>
            <slot name="no-options">
              <component :is="fieldSlots['no-options']" />
            </slot>
          </MultiselectNoOptions>
        </template>

        <template #beforelist>
          <MultiselectBeforeList>
            <slot name="before-list">
              <component v-if="fieldSlots['before-list']" :is="fieldSlots['before-list']" />
            </slot>
          </MultiselectBeforeList>
        </template>

        <template #afterlist>
          <MultiselectAfterList>
            <slot name="after-list">
              <component v-if="fieldSlots['after-list']" :is="fieldSlots['after-list']" />
            </slot>
          </MultiselectAfterList>
        </template>

      </Multiselect>

    </template>

    <template v-for="(slot) in elementSlots" #[slot]><slot :name="slot"></slot></template>
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