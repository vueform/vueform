<template>
  <form>
    <component :is="extendedTheme.components.FormElements"
      :schema="schema"
      @updateSchema="updateSchema"
      ref="elements$"
    />

    <!-- <ExportConsole /> -->
  </form>
</template>
