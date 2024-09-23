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
            <td
              v-html="row.label"
              class="text-left"
              style="vertical-align: center;"
            ></td>
            <td v-for="(column, c) in resolvedColumns">
              <label class="flex text-center items-center justify-center">
                <RadioElement
                  :name="`${name}_${r}_${c}`"
                  :radio-value="true"
                  :radio-name="row.value"
                  add-class="inline-flex"
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