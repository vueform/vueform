<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div
        :class="classes.grid"
        :style="gridStyle"
        ref="grid"
      >
        <!-- Header row -->
        <!-- <div class="contents relative"> -->
          <!-- First empty column -->
          <div v-if="rowsVisible && colsVisible" :class="classes.headerFirst" />
          <!-- Column headers -->
          <template v-for="(col, c) in resolvedColumns">
            <div v-if="colsVisible && col.available" v-html="col.label":class="classes.header" />
          </template>
          <!-- Remove column -->
          <div v-if="allowRemove && colsVisible" :class="classes.headerRemove" />
        <!-- </div> -->

        <!-- Content rows -->
        <!-- <div class="contents relative" v-for="(row, r) in resolvedRows"> -->
        <template v-for="(row, r) in resolvedRows">
          <!-- Row label -->
          <div v-if="rowsVisible && row.available" v-html="row.label" :class="classes.rowLabel" />
          <!-- Input cells -->
          <template v-for="(col, c) in resolvedColumns">
            <div v-if="row.available && col.available" :class="classes.cell(resolveType(col))">
              <RadioElement
                v-if="resolveColInputType(col) === 'radio'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :columns="{ label: 6 }"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :radio-value="true"
                :radio-name="`${path}_${r}_${c}`"
                :presets="presets"
                standalone
              />
              <CheckboxElement
                v-else-if="resolveColInputType(col) === 'checkbox'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :true-value="true"
                :false-name="false"
                :presets="presets"
                standalone
              />
              <TextElement
                v-else-if="resolveColInputType(col) === 'text'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :presets="presets"
              />
              <TextareaElement
                v-else-if="resolveColInputType(col) === 'textarea'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :presets="presets"
                :rows="1"
              />
              <SelectElement
                v-else-if="resolveColInputType(col) === 'select'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :items="resolveItems(col)"
                :presets="presets"
              />
              <TagsElement
                v-else-if="resolveColInputType(col) === 'tags'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :items="resolveItems(col)"
                :presets="presets"
                :close-on-select="false"
                append-to-body
                search
              />
              <ToggleElement
                v-else-if="resolveColInputType(col) === 'toggle'"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :true-value="true"
                :false-name="false"
                :presets="presets"
                standalone
              />
              <component
                v-else
                :is="inputTypeComponent(col)"
                :field-name="`${genericName} / ${row.label} / ${col.label}`"
                :display-errors="false"
                :disabled="isDisabled"
                :readonly="isReadonly"
                :conditions="resolveConditions(row, col)"
                :name="`${name}_${r}_${c}`"
                :presets="presets"
                add-class="w-full"
                v-bind="col.inputType || inputType"
              />
            </div>
          </template>
          <!-- Remove column -->
          <div v-if="allowRemove" :class="classes.rowRemove">
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
        <!-- </div> -->
        </template>
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