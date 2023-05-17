<template>
  <slot name="activator" :on="on" />

  <Transition>
    <div class="background" @click.self="handleClose" v-if="isOpen">
      <div class="content">
        <slot :close="handleClose" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref<boolean>(false);

const on = {
  click: () => {
    isOpen.value = true;
  },
};

const handleClose = () => {
  isOpen.value = false;
};
</script>

<style scoped lang="scss">
.background {
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 20;
}

.content {
  margin-left: auto;
  height: 100%;
  max-width: 600px;
  background-color: white;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
