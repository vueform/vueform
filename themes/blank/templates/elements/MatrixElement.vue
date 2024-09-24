<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <table :class="classes.grid">
        <thead>
          <tr>
            <th :class="classes.colTitle" :style="getColStyle(0)"></th>
            <th
              v-for="(column, c) in resolvedColumns"
              :class="classes.colTitle"
               :style="getColStyle(c+1)"
              v-html="column.label"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, r) in resolvedRows">
            <td :class="classes.rowTitle" v-html="row.label"></td>
            <td :class="classes.cell" v-for="(column, c) in resolvedColumns">
              <label :class="classes.wrapper">
                <RadioElement
                  v-if="column.inputType === 'radio' || (!column.inputType && inputType === 'radio')"
                  :name="`${name}_${r}_${c}`"
                  :radio-value="true"
                  :radio-name="row.value"
                />
                <CheckboxElement
                  v-else-if="column.inputType === 'checkbox' || (!column.inputType && inputType === 'checkbox')"
                  :name="`${name}_${r}_${c}`"
                  :true-value="true"
                  :false-name="false"
                />
                <component
                  v-else
                  :is="inputTypeComponent(column)"
                  :name="`${name}_${r}_${c}`"
                  add-class="w-full"
                  v-bind="column.inputType || inputType"
                />
              </label>
            </td>
          </tr>
        </tbody>
      </table>
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