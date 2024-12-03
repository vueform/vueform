<template>
  <component :is="elementLayout" :multiple="true" ref="container">
    <template #element>
      <div :class="classes.wrapper" role="group" :aria-labelledby="labelId">
        <slot>
          <table :class="classes.table">
            <tr v-for="(row, r) in resolvedRows" :class="classes.tr(r, resolvedRows.length)">
              <component v-for="(col, c) in row" :is="col.type"
                :class="classes.td"
                :colspan="col.colspan"
                :rowspan="col.rowspan"
                v-bind="col.attrs"
              >
                <div v-if="col.schema" :class="classes.fieldWrapper(col.schema)">
                  <slot :name="col.slot">
                    <component :is="col.component"
                      :name="col.name"
                      :key="col.name"
                      v-bind="col.schema"
                    />
                  </slot>
                </div>
                <div v-else :class="classes.textWrapper">
                  <slot :name="col.slot">
                    <span :class="classes.text" v-html="col.content" />
                  </slot>
                </div>
              </component>
            </tr>
          </table>
        </slot>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
	</component>
</template>

<script>
  export default {
    name: 'TableElement',
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