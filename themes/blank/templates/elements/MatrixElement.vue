<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div :class="classes.wrapper">
        <table :class="classes.grid">
          <tr>
            <th
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
            <tr v-show="row.available">
              <td
                :class="classes.rowTitle"
                v-html="row.label"
              ></td>
              <template v-for="(column, c) in resolvedColumns">
                <td
                  v-show="column.available"
                  :class="classes.cell"
                >
                  <div :class="classes.cellWrapper">
                    <RadioElement
                      v-if="resolveColInputType(column) === 'radio'"
                      :conditions="resolveConditions(row, column)"
                      :name="`${name}_${r}_${c}`"
                      :radio-value="true"
                      :radio-name="row.value"
                    />
                    <CheckboxElement
                      v-else-if="resolveColInputType(column) === 'checkbox'"
                      :conditions="resolveConditions(row, column)"
                      :name="`${name}_${r}_${c}`"
                      :true-value="true"
                      :false-name="false"
                    />
                    <component
                      v-else
                      :is="inputTypeComponent(column)"
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