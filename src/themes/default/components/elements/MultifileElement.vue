<template>
  <component :is="layout">
    
    <template v-slot:field>
      <slot name="prefix"></slot>

      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && !disabled"
        :title="__(`laraform.elements.${type}.dndTitle`)"
        :description="__(`laraform.elements.${type}.dndDescription`)"
        @click="handleClick"
        @drop="handleDrop"
      />
      <!-- Upload button -->
      <a
        v-else-if="!disabled"
        href=""
        :class="classes.selectButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.multifile.uploadButton') }}</a>
      
      <!-- Actual input field -->
      <input
        v-show="false"
        multiple
        type="file"
        @change="handleChange"
        :accept="accept"
        :disabled="disabled"
        ref="input" 
      />

      <div v-sortable="sortable" :class="classes.element">
        <component
          v-for="(element, i) in instances"
          :is="component(element)"
          :schema="element"
          :name="i"
          :parent="el$"
          :embed="true"
          :key="element.key"
          @remove="remove"
        />
      </div>

      <slot name="suffix"></slot>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>

  </component>
</template>

<script>
  export default {
    name: 'MultifileElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-multifile',
          element: 'list-element-container',
          sortable: 'list-element-container-sortable',
          disabled: 'disabled',
          selectButton: 'btn btn-light btn-select-file',
        },
        containers: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
        }
      }
    }
  }
</script>