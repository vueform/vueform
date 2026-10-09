<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      <div
        :class="classes.wrapper"
        :id="fieldId"
        ref="input"
        v-bind="{...aria}"
        @mouseup="handleMouseUp"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
        @touchstart="handleMouseDown"
        @touchend="handleMouseUp"
        @touchmove="handleMouseMove"
      >
        <svg
          :class="classes.star"
          v-for="(n, i) in count"
          height="1em"
          :viewBox="starViewBox"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient :id="`${gradientPrefix}-${i}`">
              <stop
                :offset="`${fillPercentages[i]}%`"
                :stop-color="starHoverColor"
              />
              <stop
                :offset="`${fillPercentages[i]}%`"
                :stop-color="starColor"
              />
            </linearGradient>
          </defs>
          <path :d="starPathData" :fill="`url(#${gradientPrefix}-${i})`" />
        </svg>
      </div>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
export default {
  name: "StarRatingElement",
  data() {
    return {
      merge: true,
      defaultClasses: {
        container: '',
        wrapper: '',
      },
    };
  },
};
</script>

<style lang="scss">
</style>
