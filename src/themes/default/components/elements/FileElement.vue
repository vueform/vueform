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
      <slot name="preview" :previewOptions="previewOptions">
        <component :is="fieldSlots.preview" :previewOptions="previewOptions" />
      </slot>

      <!-- Progress -->
      <slot name="progress" :progress="progress">
        <component :is="fieldSlots.progress" :progress="progress" />
      </slot>

      <!-- Upload temp button -->
      <a
        v-if="canUploadTemp"
        href=""
        :class="classes.uploadButton"
        @click.prevent="handleUploadTemp"
      >{{ __(`laraform.elements.${type}.upload`) }}</a>

      <!-- Remove button -->
      <a
        v-if="canRemove"
        href=""
        :class="classes.removeButton"
        @click.prevent="handleRemove"
      >{{ __(`laraform.elements.${type}.remove`) }}</a>

      <!-- Abort button -->
      <a
        v-if="uploading"
        href=""
        :class="classes.abortButton"
        @click.prevent="handleAbort"
      >{{ __(`laraform.elements.${type}.abort`) }}</a>
        
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
          container: 'lf-file',
          selectButton: 'btn btn-light btn-select-file',
          uploadButton: 'btn btn-primary btn-upload-temp',
          removeButton: 'btn btn-light btn-remove-file',
          abortButton: 'btn btn-danger btn-abort-upload',
          removing: 'removing',
        }
      }
    }
  }
</script>

<style>
  .removing {
    opacity: 0.6;
  }
</style>