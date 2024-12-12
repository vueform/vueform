<template>
  <component :is="elementLayout" :multiple="true" ref="container">
    <template #element>
      <div
        :class="classes.grid"
        :style="gridStyle"
        role="group"
        :aria-labelledby="labelId"
      >
        <div v-for="(cell, c) in cells"
          :class="classes.cell(cell)"
          :style="cell.style"
          v-bind="cell.attrs"
          :data-col="cell.col"
          :data-row="cell.row"
          :data-col-start="cell.colStart"
          :data-col-end="cell.colEnd"
          :data-row-start="cell.rowStart"
          :data-row-end="cell.rowEnd"
        >
          <div
            v-if="cell.schema"
            :class="classes.fieldWrapper(cell)"
          >
            <slot :name="cell.slot">
              <component :is="cell.component"
                :name="cell.name"
                :key="cell.name"
                v-bind="cell.schema"
              />
            </slot>
          </div>
          <div v-else :class="classes.textWrapper(cell)">
            <slot :name="cell.slot">
              <span
                v-if="cell.content"
                :class="classes.text"
                v-html="cell.content"
              />
            </slot>
          </div>
        </div>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
	</component>
</template>

<script>
  export default {
    name: 'GridElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>