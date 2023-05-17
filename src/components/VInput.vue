<template>
  <div :class="class" class="warper">
    <label class="label">{{ label }}</label>
    <input
      @input="handleChange"
      :value="modelValue"
      class="input"
      type="text"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  class?: string;
  modelValue?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
  modelValue: "",
  class: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
}>();

const handleChange = (e: Event) => {
  const value = e.target!.value;

  emit("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
@import "@/styles/variable";
.warper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px solid $border;
}
.label {
  font-size: 0.9rem;
}
.input {
  border: none;
  width: 100%;
}
</style>
