<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/styles/variable";

.btn {
  padding: 5px 10px;
  border: 1px solid $border;
  background-color: white;

  &:hover {
    background-color: lighten($color: $accent, $amount: 10);
    color: white;
  }
  &:active {
    background-color: $accent;
    color: white;
  }
}
</style>
