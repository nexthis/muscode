<template>
  <ul class="list text-left">
    <li class="item" v-for="item in modelValue">
      <label class="content">
        <input v-model="item.state" class="checkbox ml-10" type="checkbox" />
        {{ item.text }}
      </label>
    </li>

    <li class="item">
      <div class="content">
        <icon-plus class="icon small fill-border ml-10" />
        <input
          @keydown.enter="handleAddItem"
          v-model="value"
          class="input"
          placeholder="Dodaj nowy element checklisty"
          type="text"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconPlus from "@/assets/icons/plus.svg?component";

interface Props {
  modelValue: Array<{ text: string; state: boolean }>;
}

const value = ref<string>("");

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
}>();

const handleAddItem = () => {
  props.modelValue.push({ text: value.value, state: false });
  value.value = "";
  emit("update:modelValue", props.modelValue);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";
.list {
  list-style: none;
  padding: 0;
}
.item {
  padding: 10px 0;
  border-bottom: 1px solid $border;
  font-size: 0.9rem;
}

.content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.input {
  border: none;
  width: 100%;
}

.checkbox {
  $size: 20px;
  width: $size;
  height: $size;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  &:checked {
    background-color: $border;
  }
}

.ml-10 {
  margin: 0 0 0 10px;
}
</style>
