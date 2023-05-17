<template>
  <div class="warper">
    <label class="label">{{ label }}</label>
    <select @change="handleChange" class="input">
      <option v-for="item in values" :value="item">{{ item }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  values: Array<string>;
  modelValue?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
  modelValue: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: Props["modelValue"]): void;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLSelectElement;

  emit("update:modelValue", target.value);
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
  margin-top: 5px;
  background-color: white;
}
</style>
