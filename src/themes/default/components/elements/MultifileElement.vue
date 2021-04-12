<template>
  <component :is="elementLayout">
    
    <template v-slot:field>

      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && !isDisabled"
        :title="__(`laraform.elements.${type}.dndTitle`)"
        :description="__(`laraform.elements.${type}.dndDescription`)"
        @click="handleClick"
        @drop="handleDrop"
      />
      <!-- Upload button -->
      <a
        v-else-if="!isDisabled"
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
        :disabled="isDisabled"
        ref="input" 
      />

      <div :class="classes.element" ref="list">
        <div v-for="(val, i) in value" :key="i">
          <component
            :is="component(prototype)"
            v-if="prototype.type"
            v-bind="prototype"
            :disabled="isDisabled"
            :embed="true"
            :name="i"
            @remove="remove(i)"
          />
        </div>
      </div>

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
        classKeys: {
          sortable: 'element',
          add: 'add',
          remove: 'remove',
        }
      }
    }
  }
</script>