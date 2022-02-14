<template>
  <component :is="elementLayout" :multiple="true">
    <template #element>
      <!-- Drag n drop -->
      <DragAndDrop
        v-if="drop && canDrop && hasAdd"
        :title="__(`vueform.elements.${type}.dndTitle`)"
        :description="__(`vueform.elements.${type}.dndDescription`)"
        :disabled="isDisabled"
        :class="classes.dnd"
        @click="handleClick"
        @drop="handleDrop"
     />

      <!-- Upload button -->
      <a
        v-else-if="hasAdd"
        href=""
        :class="classes.button"
        @click.prevent="handleClick"
      >{{ __('vueform.elements.multifile.uploadButton') }}</a>
      
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

      <div v-show="!empty" :class="classes.list" ref="list">
        <div v-for="(val, i) in value" :key="i" :class="classes.listItem">
          <component
            :is="component(prototype)"
            v-if="prototype.type"
            v-bind="prototype"
            :disabled="!hasRemove"
            :embed="true"
            :name="i"
            @remove="remove(i)"
         />
          <!-- Sort handle -->
          <span v-if="hasSort" :class="classes.handle" data-handle>
            <span :class="classes.handleIcon"></span>
          </span>
        </div>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'MultifileElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          list: '',
          list_file: '',
          list_file_sm: '',
          list_file_md: '',
          list_file_lg: '',
          list_image: '',
          list_image_sm: '',
          list_image_md: '',
          list_image_lg: '',
          list_gallery: '',
          list_gallery_sm: '',
          list_gallery_md: '',
          list_gallery_lg: '',
          list_disabled: '',
          list_sorting: '',
          spacer: '',
          spacer_sm: '',
          spacer_md: '',
          spacer_lg: '',
          listItem: '',
          listItem_file: '',
          listItem_file_sm: '',
          listItem_file_md: '',
          listItem_file_lg: '',
          listItem_image: '',
          listItem_image_sm: '',
          listItem_image_md: '',
          listItem_image_lg: '',
          listItem_gallery: '',
          listItem_gallery_sm: '',
          listItem_gallery_md: '',
          listItem_gallery_lg: '',
          handle: '',
          handle_file: '',
          handle_file_sm: '',
          handle_file_md: '',
          handle_file_lg: '',
          handle_image: '',
          handle_image_sm: '',
          handle_image_md: '',
          handle_image_lg: '',
          handle_gallery: '',
          handle_gallery_sm: '',
          handle_gallery_md: '',
          handle_gallery_lg: '',
          handleIcon: '',
          handleIcon_file: '',
          handleIcon_image: '',
          handleIcon_gallery: '',
          dnd: '',
          dnd_sm: '',
          dnd_md: '',
          dnd_lg: '',
          button: '',
          button_enabled: '',
          button_disabled: '',
          button_sm: '',
          button_md: '',
          button_lg: '',
          $list: (classes, { isDisabled, sorting, view, Size }) => ([
            classes.list,
            isDisabled ? classes.list_disabled : null,
            sorting ? classes.list_sorting : null,
            classes[`list_${view}`],
            classes[`list_${view}_${Size}`],
          ]),
          $spacer: (classes, { Size }) => ([
            classes.spacer,
            classes[`spacer_${Size}`],
          ]),
          $listItem: (classes, { view, Size }) => ([
            classes.listItem,
            classes[`listItem_${view}`],
            classes[`listItem_${view}_${Size}`],
          ]),
          $handle: (classes, { view, Size }) => ([
            classes.handle,
            classes[`handle_${view}`],
            classes[`handle_${view}_${Size}`],
          ]),
          $handleIcon: (classes, { view }) => ([
            classes.handleIcon,
            classes[`handleIcon_${view}`],
          ]),
          $dnd: (classes, { Size }) => ([
            classes.dnd,
            classes[`dnd_${Size}`],
          ]),
          $button: (classes, { isDisabled, preparing, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            !isDisabled && !preparing ? classes.button_enabled : null,
            isDisabled || preparing ? classes.button_disabled : null,
          ]),
        },
      }
    }
  }
</script>

<style lang="scss">
</style>