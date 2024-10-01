<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.wrapper">
        <table :class="classes.grid">
          <tr v-if="!hideCols">
            <th
              v-if="!hideRows"
              :class="classes.colTitle"
              :style="getColStyle(0)"
            ></th>
            <template v-for="(column, c) in resolvedColumns">
              <th
                v-show="column.available"
                :class="classes.colTitle"
                :style="getColStyle(c+1)"
                v-html="column.label"
              ></th>
            </template>
          </tr>
          <template v-for="(row, r) in resolvedRows">
            <tr
              v-show="row.available"
              :class="classes.row"
            >
              <td
                v-if="!hideRows"
                :class="classes.rowTitle"
                v-html="row.label"
              ></td>
              <template v-for="(column, c) in resolvedColumns">
                <td
                  v-show="column.available"
                  :class="classes.cell"
                >
                  <!-- Remove button -->
                  <div
                    v-if="allowRemove && !c"
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
                  
                  <div :class="classes.cellWrapper">
                    <RadioElement
                      v-if="resolveColInputType(column) === 'radio'"
                      :disabled="isDisabled"
                      :readonly="isReadonly"
                      :conditions="resolveConditions(row, column)"
                      :name="`${name}_${r}_${c}`"
                      :radio-value="true"
                      :radio-name="`${path}_${r}_${c}`"
                      standalone
                      inline
                    />
                    <CheckboxElement
                      v-else-if="resolveColInputType(column) === 'checkbox'"
                      :disabled="isDisabled"
                      :readonly="isReadonly"
                      :conditions="resolveConditions(row, column)"
                      :name="`${name}_${r}_${c}`"
                      :true-value="true"
                      :false-name="false"
                      standalone
                      inline
                    />
                    <component
                      v-else
                      :is="inputTypeComponent(column)"
                      :disabled="isDisabled"
                      :readonly="isReadonly"
                      :conditions="resolveConditions(row, column)"
                      :name="`${name}_${r}_${c}`"
                      add-class="w-full"
                      v-bind="column.inputType || inputType"
                    />
                  </div>
                </td>
              </template>
            </tr>
          </template>
        </table>
      </div>

      <!-- Add button -->
      <div
        v-if="allowAdd"
        :class="classes.add"
        :id="`${fieldId}-add-button`"
        @click.prevent="handleAdd"
        @keypress.enter.space="handleAdd"
        v-html="'+ Add'"
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