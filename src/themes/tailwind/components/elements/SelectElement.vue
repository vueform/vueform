<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <ElementLabelFloating
        v-if="floating"
        :visible="!empty"
      />

      <div v-if="isNative" :class="classes.native">
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
        <span v-if="placeholder && empty" :class="classes.placeholder">{{ placeholder }}</span>
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
        <template v-slot:option="{ option, search }">
          <slot name="option" :option="option" :search="search" :el$="el$">
            <component :is="fieldSlots.option" :option="option" :search="search" />
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'single'" v-slot:singlelabel="{ value }">
          <slot name="singlelabel" :value="value" :el$="el$">
            <component v-if="fieldSlots.singlelabel" :is="fieldSlots.singlelabel" :value="value" />
          </slot>
        </template>
        
        <template v-if="fieldOptions.mode == 'multiple'" v-slot:multiplelabel="{ values }">
          <slot name="multiplelabel" :values="values" :el$="el$">
            <component :is="fieldSlots.multiplelabel" :values="values" />
          </slot>
        </template>

        <template v-if="fieldOptions.mode == 'tags'" v-slot:tag="{ option, handleTagRemove, disabled }">
          <slot name="tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" :el$="el$">
            <component :is="fieldSlots.tag" :option="option" :handleTagRemove="handleTagRemove" :disabled="disabled" />
          </slot>
        </template>

        <template v-slot:noresults><slot name="noresults"><component :is="fieldSlots.noresults" /></slot></template>
        <template v-slot:nooptions><slot name="nooptions"><component :is="fieldSlots.nooptions" /></slot></template>
        <template v-slot:beforelist><slot name="beforelist"><component v-if="fieldSlots.beforelist" :is="fieldSlots.beforelist" /></slot></template>
        <template v-slot:afterlist><slot name="afterlist"><component v-if="fieldSlots.afterlist" :is="fieldSlots.afterlist" /></slot></template>

      </Multiselect>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'SelectElement',
    components: {
      Multiselect: Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          inputEnabled: '',
          inputDisabled: '',
          native: '',
          placeholder: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>