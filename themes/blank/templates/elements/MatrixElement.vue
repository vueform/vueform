<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div class="">
        <div
          class="grid overflow-auto"
          :style="gridStyle"
        >
          <!-- Header row -->
            <!-- First empty column -->
            <div v-if="rowsVisible && colsVisible" :class="[stickyCols || stickyRows ? 'sticky bg-white' : null, stickyCols ? 'top-0' : null, stickyRows ? 'left-0' : null]" />
            <!-- Column headers -->
            <template v-for="(col, c) in resolvedColumns">
              <div v-if="colsVisible && col.available" v-html="col.label" :class="[stickyCols ? 'sticky top-0 bg-white z-1' : '', padding ? 'px-2' : null, colWrap ? null : 'whitespace-nowrap', 'flex items-center justify-center text-center form-min-h-input-height-inner']" />
            </template>
            <!-- Remove column -->
            <div v-if="allowRemove" class="bg-white sticky right-0 w-10" />

          <!-- Content rows -->
          <template v-for="(row, r) in resolvedRows">
            <!-- Row label -->
            <div v-if="rowsVisible && row.available" v-html="row.label" :class="[stickyRows ? 'sticky left-0 bg-white' : null, rowWrap ? null : 'whitespace-nowrap', 'flex items-center pr-2']" />
            <!-- Input cells -->
            <template v-for="(col, c) in resolvedColumns">
              <div v-if="row.available && col.available" :class="['grid items-center form-min-h-input-height-inner', ['radio', 'checkbox', 'toggle'].includes(resolveType(col)) ? 'justify-center' : null, padding ? 'px-2' : null]">
                <RadioElement
                  v-if="resolveColInputType(col) === 'radio'"
                  :disabled="isDisabled"
                  :readonly="isReadonly"
                  :columns="{ label: 6 }"
                  :conditions="resolveConditions(row, col)"
                  :name="`${name}_${r}_${c}`"
                  :radio-value="true"
                  :radio-name="`${path}_${r}_${c}`"
                  standalone
                />
                <CheckboxElement
                  v-else-if="resolveColInputType(col) === 'checkbox'"
                  :disabled="isDisabled"
                  :readonly="isReadonly"
                  :conditions="resolveConditions(row, col)"
                  :name="`${name}_${r}_${c}`"
                  :true-value="true"
                  :false-name="false"
                  standalone
                />
                <TextElement
                  v-else-if="resolveColInputType(col) === 'text'"
                  :disabled="isDisabled"
                  :readonly="isReadonly"
                  :conditions="resolveConditions(row, col)"
                  :name="`${name}_${r}_${c}`"
                />
                <SelectElement
                  v-else-if="['select', 'multiselect', 'tags'].includes(resolveColInputType(col))"
                  :is="inputTypeComponent(col)"
                  :disabled="isDisabled"
                  :readonly="isReadonly"
                  :conditions="resolveConditions(row, col)"
                  :name="`${name}_${r}_${c}`"
                  :items="resolveItems(col)"
                  append-to-body
                />
                <component
                  v-else
                  :is="inputTypeComponent(col)"
                  :disabled="isDisabled"
                  :readonly="isReadonly"
                  :conditions="resolveConditions(row, col)"
                  :name="`${name}_${r}_${c}`"
                  add-class="w-full"
                  v-bind="col.inputType || inputType"
                />
              </div>
            </template>
            <!-- Remove column -->
            <div v-if="allowRemove" class="bg-white sticky right-0 flex items-center justify-center w-10">
              <div
                :aria-roledescription="form$.translations.vueform.a11y.list.remove"
                :class="classes.remove"
                :id="`${path}-${r}-remove-button`"
                @click.prevent="handleRemove(r)"
                @keypress.space.enter="handleRemove(r)"
                role="button"
                tabindex="0"
              >
                <span :class="classes.removeIcon"></span>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!-- Add button -->
      <div
        v-if="allowAdd"
        :class="classes.add"
        :id="`${fieldId}-add-button`"
        @click.prevent="handleAdd"
        @keypress.enter.space="handleAdd"
        v-html="addLabel"
        role="button"
        tabindex="0"
      />
    </template>
    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'MatrixElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>