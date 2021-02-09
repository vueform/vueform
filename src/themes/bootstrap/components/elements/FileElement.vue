<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <!-- Drag n drop -->
      <component
        v-if="drop && canDrop && canSelect"
        :is="components.DragAndDrop"
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
        :id="id"
        :accept="accept"
        @change="handleChange"
        ref="input"
      />

      <!-- Preview -->
      <slot name="preview" :previewOptions="previewOptions">
        <component :is="slots.preview" :previewOptions="previewOptions" />
      </slot>

      <!-- Progress -->
      <slot name="progress" :progress="progress">
        <component :is="slots.progress" :progress="progress" />
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
        
      <slot name="suffix"></slot>

    </template>
    
    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>
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