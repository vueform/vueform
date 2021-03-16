<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <ElementLabelFloating
        v-if="floating"
        :visible="!empty"
      />

      <select
        v-if="isNative"
        v-model="value"
        :class="classes.select"
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
      <Multiselect
        v-else
        v-bind="fieldOptions"
        v-model="value"
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
        
        <template v-if="options.mode == 'single'" v-slot:singlelabel="{ value }">
          <slot name="singlelabel" :value="value" :el$="el$">
            <component v-if="fieldSlots.singlelabel" :is="fieldSlots.singlelabel" :value="value" />
          </slot>
        </template>
        
        <template v-if="options.mode == 'multiple'" v-slot:multiplelabel="{ values }">
          <slot name="multiplelabel" :values="values" :el$="el$">
            <component :is="fieldSlots.multiplelabel" :values="values" />
          </slot>
        </template>

        <template v-if="options.mode == 'tags'" v-slot:tag="{ option, remove, disabled }">
          <slot name="tag" :option="option" :remove="remove" :disabled="disabled" :el$="el$">
            <component :is="fieldSlots.tag" :option="option" :remove="remove" :disabled="disabled" />
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
  import '@vueform/multiselect/themes/default.scss'

  export default {
    name: 'SelectElement',
    components: {
      Multiselect: Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: 'lf-select',
          select: 'form-control',
          selectNativePlaceholder: 'native-select-placeholder',
        }
      }
    }
  }
</script>

<style>

</style>