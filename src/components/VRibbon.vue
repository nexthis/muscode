<template>
  <div class="ribbon">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ribbon {
  $size: 80px;
  position: absolute;
  width: $size;
  height: $size;
  right: 0;
  top: 0;
  overflow: hidden;
}

.content {
  position: relative;
  transform: rotate(45deg);
  background-color: black;
  color: white;
  top: 24px;
  left: -14px;
  width: 120px;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
