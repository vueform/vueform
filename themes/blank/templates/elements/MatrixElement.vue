<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <table class="w-full">
        <thead>
          <tr>
            <th class="text-center"></th>
            <th
              v-for="(column, c) in resolvedColumns"
              class="text-center"
              v-html="column.label"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, r) in resolvedRows">
            <td v-html="row.label"></td>
            <td v-for="(column, c) in resolvedColumns">
              <label class="flex text-center items-center justify-center">
                <RadioElement
                  v-if="inputType === 'radio'"
                  :name="`${name}_${r}_${c}`"
                  :radio-value="true"
                  :radio-name="row.value"
                />
                <CheckboxElement
                  v-if="inputType === 'checkbox'"
                  :name="`${name}_${r}_${c}`"
                  :true-value="true"
                  :false-name="false"
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