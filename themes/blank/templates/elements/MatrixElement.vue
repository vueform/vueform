<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div
        :class="classes.grid"
        :style="gridStyle"
        ref="grid"
      >
        <!-- Header row -->
        <!-- First empty column -->
        <div v-if="rowsVisible && colsVisible" :class="classes.headerFirst" />
        <!-- Column headers -->
        <template v-for="(col, c) in resolvedColumns">
          <div v-if="colsVisible && col.available" v-html="col.label":class="classes.header" />
        </template>
        <!-- Remove column -->
        <div v-if="allowRemove && colsVisible" :class="classes.headerRemove" />

        <!-- Content rows -->
        <template v-for="(row, r) in resolvedRows">
          <!-- Row label -->
          <div v-if="rowsVisible && row.available" v-html="row.label" :class="classes.rowLabel" />
          <!-- Input cells -->
          <template v-for="(col, c) in resolvedColumns">
            <div v-if="row.available && col.available" :class="classes.cell">
              <div :class="classes.cellWrapper(resolveColType(col), resolveComponentName(r, c))">
                <component
                  :is="resolveComponentType(col)"
                  v-bind="resolveComponentProps(row, col, r, c)"
                  rules="required"
                />
              </div>
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