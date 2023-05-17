<template>
  <table class="table text-left">
    <slot />
  </table>
</template>

<style scoped lang="scss">
@import "@/styles/variable";
.table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  overflow: hidden;
  :deep(tr) {
    border-bottom: 1px solid $border;
  }
}
</style>
