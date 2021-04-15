<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && canSelect"
        :title="__(`laraform.elements.${type}.dndTitle`)"
        :description="__(`laraform.elements.${type}.dndDescription`)"
        @click="handleClick"
        @drop="handleDrop"
      />
      <!-- Upload button -->
      <a
        v-else-if="canSelect"
        href=""
        :class="classes.selectButton"
        @click.prevent="handleClick"
      >{{ __(`laraform.elements.${type}.select`) }}</a>
      
      <!-- Invisible input field -->
      <input
        v-if="canSelect"
        v-show="false"
        type="file"
        :id="fieldId"
        :accept="accept"
        @change="handleChange"
        ref="input"
      />

      <!-- Preview -->
      <slot name="preview">
        <component :is="fieldSlots.preview" />
      </slot>
        
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
    name: 'FileElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          selectButton: 'btn btn-light',
          removing: 'removing',
        }
      }
    }
  }
</script>